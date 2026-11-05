import { NextRequest, NextResponse } from 'next/server';
import { list } from '@vercel/blob';
import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data', 'conversations');

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const expectedSecret = process.env.ADMIN_SECRET || 'neider2026';

  if (!secret || secret !== expectedSecret) {
    return NextResponse.json(
      { error: 'No autorizado. Proporciona ?secret=...' },
      { status: 401 }
    );
  }

  // Si está en Vercel Blob (por BLOB_STORE_ID con OIDC o BLOB_READ_WRITE_TOKEN)
  const isBlobConfigured = Boolean(
    process.env.BLOB_STORE_ID || process.env.BLOB_READ_WRITE_TOKEN
  );

  if (isBlobConfigured) {
    try {
      const { blobs } = await list({ prefix: 'conversations/' });

      const conversationsList = await Promise.all(
        blobs.map(async (b) => {
          try {
            const res = await fetch(b.url, { cache: 'no-store' });
            if (res.ok) {
              const data = await res.json();
              return {
                filename: b.pathname,
                url: b.url,
                uploadedAt: b.uploadedAt,
                size: b.size,
                data,
              };
            }
          } catch {
            // Error individual al leer un blob
          }
          return {
            filename: b.pathname,
            url: b.url,
            uploadedAt: b.uploadedAt,
            size: b.size,
          };
        })
      );

      return NextResponse.json({
        source: 'vercel-blob',
        total: conversationsList.length,
        conversations: conversationsList,
      });
    } catch (error) {
      console.error('Error al listar blobs:', error);
      return NextResponse.json(
        { error: 'Error al consultar Vercel Blob', details: String(error) },
        { status: 500 }
      );
    }
  }

  // Fallback local (disco)
  try {
    const files = await fs.readdir(DATA_DIR);
    const jsonFiles = files.filter((f) => f.endsWith('.json'));

    const conversations = await Promise.all(
      jsonFiles.map(async (filename) => {
        const filePath = path.join(DATA_DIR, filename);
        const content = await fs.readFile(filePath, 'utf-8');
        return {
          filename,
          data: JSON.parse(content),
        };
      })
    );

    return NextResponse.json({
      source: 'local-filesystem',
      total: conversations.length,
      conversations,
    });
  } catch {
    return NextResponse.json({
      source: 'local-filesystem',
      total: 0,
      conversations: [],
    });
  }
}

