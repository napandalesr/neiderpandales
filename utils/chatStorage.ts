import fs from 'fs/promises';
import path from 'path';
import { put, list } from '@vercel/blob';

export type ChatEntry = {
  id: string;
  timestamp: string;
  dateFormatted: string;
  userMessage: string;
  botResponse: string;
};

export type UserConversation = {
  email: string;
  name?: string;
  createdAt: string;
  lastUpdated: string;
  totalInteractions: number;
  chats: ChatEntry[];
};

const DATA_DIR = path.join(process.cwd(), 'data', 'conversations');

/**
 * Sanitiza el correo para usarlo de forma segura como nombre de archivo
 */
export const sanitizeEmailForFilename = (email: string): string => {
  return email
    .toLowerCase()
    .trim()
    .replace(/@/g, '_at_')
    .replace(/[^a-z0-9_.-]/g, '_');
};

/**
 * Guarda o actualiza la conversación de un usuario.
 * - Si `BLOB_READ_WRITE_TOKEN` está configurado (Vercel en producción o local con token),
 *   se almacena en Vercel Blob en la nube.
 * - Si no está configurado (desarrollo local sin token), guarda en el disco local `data/conversations/`.
 */
export async function saveUserChatInteraction({
  email,
  name,
  userMessage,
  botResponse,
}: {
  email: string;
  name?: string;
  userMessage: string;
  botResponse: string;
}): Promise<void> {
  const cleanEmail = email?.trim().toLowerCase() || 'anonimo@sin-correo.com';
  const filename = `${sanitizeEmailForFilename(cleanEmail)}.json`;
  const blobPathname = `conversations/${filename}`;

  const now = new Date();
  const newEntry: ChatEntry = {
    id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp: now.toISOString(),
    dateFormatted: now.toLocaleString('es-CO', {
      dateStyle: 'long',
      timeStyle: 'medium',
    }),
    userMessage,
    botResponse,
  };

    // 1. Si Vercel Blob está configurado (vía BLOB_STORE_ID con OIDC o BLOB_READ_WRITE_TOKEN)
    const isBlobConfigured = Boolean(
      process.env.BLOB_STORE_ID || process.env.BLOB_READ_WRITE_TOKEN
    );

    if (isBlobConfigured) {
      try {
        let conversation: UserConversation;

        try {
          const { blobs } = await list({ prefix: blobPathname });
          const existingBlob = blobs.find((b) => b.pathname === blobPathname);

          if (existingBlob) {
            const res = await fetch(existingBlob.url, { cache: 'no-store' });
            if (res.ok) {
              conversation = (await res.json()) as UserConversation;
            } else {
              throw new Error('No se pudo descargar el blob existente');
            }
          } else {
            throw new Error('Blob nuevo');
          }
        } catch {
          conversation = {
            email: cleanEmail,
            name: name || '',
            createdAt: now.toISOString(),
            lastUpdated: now.toISOString(),
            totalInteractions: 0,
            chats: [],
          };
        }

        if (name && !conversation.name) {
          conversation.name = name;
        }

        conversation.chats.push(newEntry);
        conversation.totalInteractions = conversation.chats.length;
        conversation.lastUpdated = now.toISOString();

        await put(blobPathname, JSON.stringify(conversation, null, 2), {
          access: 'public',
          addRandomSuffix: false,
        });

        return;
      } catch (blobError) {
        console.error('Error al guardar en Vercel Blob, intentando fallback local:', blobError);
      }
    }

    // 2. Fallback local en disco (desarrollo local)
    try {
      await fs.mkdir(DATA_DIR, { recursive: true });
      const filePath = path.join(DATA_DIR, filename);

      let conversation: UserConversation;

      try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        conversation = JSON.parse(fileData);
      } catch {
        conversation = {
          email: cleanEmail,
          name: name || '',
          createdAt: now.toISOString(),
          lastUpdated: now.toISOString(),
          totalInteractions: 0,
          chats: [],
        };
      }

      if (name && !conversation.name) {
        conversation.name = name;
      }

      conversation.chats.push(newEntry);
      conversation.totalInteractions = conversation.chats.length;
      conversation.lastUpdated = now.toISOString();

      await fs.writeFile(filePath, JSON.stringify(conversation, null, 2), 'utf-8');
    } catch (fsError) {
      console.error('Error al guardar la conversación en disco local:', fsError);
    }
  }
