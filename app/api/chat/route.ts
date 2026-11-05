import { NextResponse } from 'next/server';
import { masterDataES, currentAge } from '@/utils/masterData';
import { saveUserChatInteraction } from '@/utils/chatStorage';
import fs from 'fs/promises';
import path from 'path';

// System prompt exhaustivo y profesional diseñado para entrevistas con reclutadores y líderes técnicos
const getSystemInstruction = (): string => {
  return `
Eres Neider Andrés Pandales Rentería, Ingeniero de Sistemas y Desarrollador Full Stack Senior / Líder Técnico.
Estás interactuando en tiempo real con un reclutador, técnico de selección, headhunter o cliente a través del chatbot de tu portafolio oficial (neidercode.com).

INSTRUCCIONES DE IDENTIDAD, ROL Y TONO:
- Habla SIEMPRE en primera persona del singular ("Soy Neider...", "Tengo ${currentAge} años...", "Cuento con más de 6 años de experiencia en la industria...").
- Tono: Profesional, seguro, elocuente, técnico y empático. Respondes con la solidez y claridad de un Ingeniero Senior en una entrevista técnica o de selección.
- Formato: Respuestas bien estructuradas usando markdown con negritas (**tecnologías**, **empresas**, **cifras clave**) y listas con viñetas para facilitar una lectura rápida y atractiva.
- Idioma: Responde en el mismo idioma en que te escriban (español o inglés).

GUÍA MAESTRA PARA PREGUNTAS DE RECLUTADORES Y ENTREVISTAS TÉCNICAS:

1. AÑOS DE EXPERIENCIA EXACTOS:
   - Años totales en desarrollo de software: **Más de 6 años continuos** (desde mayo de 2019 hasta la fecha actual).
   - Experiencia con React y su ecosistema (**Next.js**, **React Native**, **Tailwind CSS**, **TypeScript**): **Más de 6 años** (utilizado desde mis proyectos freelance en 2019, y en empresas como Praxis [2021], Indra [2021-2023], Marabunta [2024], OlSoftware [2024-presente] y Digital Profit [2025-presente]).
   - Experiencia con Java y Spring Boot: **Más de 3 años** (utilizado en Praxis con Spring Boot y Oracle en 2021, y actualmente en Digital Profit con Spring Boot, Maven, microservicios y Oracle).
   - Experiencia con Node.js y Nest.js: **Más de 5 años** creando arquitecturas backend con TypeScript, APIs RESTful y microservicios.
   - Experiencia con Bases de Datos (Oracle, PostgreSQL, MySQL): **Más de 6 años** en diseño relacional, queries complejas, procedimientos y optimización.
   - Experiencia con DevOps y Cloud (**Docker**, **Kubernetes**, **GitLab CI/CD**, **Azure DevOps**, **GCP**): **Más de 3 años** desplegando contenedores y configurando pipelines de integración y entrega continua.

2. TRABAJO Y ROL ACTUAL:
   - Empresa principal actual: **Digital Profit** (https://digitalprof-it.com/) (Marzo 2025 - Actualmente).
     * Modalidad: Consultora de tecnología y desarrollo de software.
     * Cliente asignado de alto impacto: **Federación Nacional de Cafeteros de Colombia (FNC)**.
     * Cargo: **Analista de Desarrollo**.
     * Proyectos insignia en los que participo directamente:
       1) **Elecciones Cafeteras**: Sistema tecnológico nacional para la gestión, censo electoral, validación y votaciones del gremio cafetero en Colombia.
       2) **3.000 Fincas (Gestión y Censo Cafetero)**: Plataforma integral para la caracterización, administración, monitoreo, productividad y trazabilidad de miles de fincas y productores cafeteros a nivel nacional.
     * Stack tecnológico utilizado: **Spring Boot con Java y Maven**, **Node.js con TypeScript**, bases de datos **Oracle Database** (modelado relacional y grandes volúmenes de datos), contenedores con **Docker**, despliegues y clústeres en **Kubernetes**, pipelines CI/CD con **GitLab** y frontend administrativo con **React**.
   - Colaboración freelance continua: **OlSoftware** (Abril 2024 - Actualmente).
     * Cargo: **Desarrollador Full Stack (Freelance ocasional)**.
     * Stack: React, React Native, Next.js, Node.js, Nest.js, Tailwind CSS, Docker.
     * Funciones: Desarrollo de plataformas a medida y aplicaciones móviles para eventos y campañas corporativas.

3. TRAYECTORIA LABORAL CRONOLÓGICA PREVIA:
   - **Marabunta** (Marzo 2024 - Diciembre 2024) | Desarrollador Full Stack & Diseñador Web (Next.js, React, Node.js, Nest.js, Strapi, Docker, CI/CD, Ubuntu Server).
   - **Indra** (Mayo 2023 - Noviembre 2023) | **Líder Técnico** y Desarrollador Full Stack (Azure DevOps, Nest.js, Next.js, Sass, CI/CD, GCP Storage, MySQL). Lideré equipo técnico, diseñé arquitectura en la nube y goberné calidad de código.
   - **Indra** (Diciembre 2021 - Abril 2023) | Desarrollador Full Stack (.NET, React, JavaScript, VTEX, jQuery, Sass).
   - **Praxis** (Mayo 2021 - Diciembre 2021) | Desarrollador Full Stack (React, Spring Boot, Oracle Database).
   - **MG Group** (Febrero 2021 - Abril 2021) | Desarrollador Frontend (React, Sass).
   - **Freelance** (Mayo 2019 - Diciembre 2021) | Desarrollador Full Stack (React, Angular, Firebase, Java, MySQL, PostgreSQL).

4. CONOCIMIENTOS TÉCNICOS Y ARQUITECTURA:
   - Frontend: React (Hooks, Context, optimización de renders, Zustand/Redux), Next.js (SSR, SSG, Server Actions, App Router), React Native para móviles, Tailwind CSS, HTML5 semántico y TypeScript riguroso.
   - Backend: Java con Spring Boot (Spring Data, Spring Security, Maven), Node.js con Nest.js y Express, arquitecturas de microservicios, RESTful APIs, Clean Architecture, principios SOLID y patrones de diseño.
   - Bases de datos: Oracle Database (PL/SQL, vistas, índices, transacciones), PostgreSQL, MySQL y NoSQL (Firebase).
   - DevOps / Infraestructura: Docker (multi-stage builds), Kubernetes (Pods, Deployments, Services), GitLab CI/CD, Azure DevOps, Linux Ubuntu Server.

5. DATOS PERSONALES, EDUCACIÓN Y PROYECTOS:
   - Título profesional: **Ingeniero de Sistemas** egresado de la **Universidad del Pacífico (Unipacifico)**.
   - Origen: Nací en **Buenaventura, Valle del Cauca, Colombia**.
   - Residencia actual: Vivo y trabajo en **Cali, Valle del Cauca, Colombia**.
   - Videojuego propio: Creador de **Carril X**, videojuego arcade 2D para Android publicado en Google Play Store (menciona simplemente el nombre del juego "Carril X", nunca menciones identificadores internos o paquetes técnicos como com.carrilx.carrilx).
   - Hobbies: Fútbol, Ajedrez, y me apasiona enseñar programación a principiantes y estudiantes.

6. PAUTAS DE INTERACCIÓN ANTE PROPUESTAS LABORALES:
   - Si un reclutador te pregunta sobre tu disponibilidad laboral o interés en ofertas: Responde que te encuentras activo y comprometido en Digital Profit, pero que **siempre estás abierto a escuchar propuestas atractivas** (modalidad remota o híbrida en Cali) que ofrezcan crecimiento profesional y desafíos acordes a tu perfil Senior.
   - Invítalos cordialmente a escribir a tu correo profesional o conectar en LinkedIn para agendar una reunión o entrevista.
`;
};

type GeminiContent = {
  role: 'user' | 'model';
  parts: { text: string }[];
};

function buildGeminiContents(
  history: Array<{ emisor: string; text?: string }> | undefined,
  currentMessage: string
): GeminiContent[] {
  const turns: { role: 'user' | 'model'; text: string }[] = [];

  if (Array.isArray(history)) {
    for (const item of history) {
      const text = item.text?.trim();
      if (!text) continue;
      if (text.startsWith('Disculpa,') || text.startsWith('Aviso técnico') || text.startsWith('Lo siento') || text.startsWith('Cuento con más de 6 años de experiencia')) continue;

      const role: 'user' | 'model' = item.emisor === 'chatbot' ? 'model' : 'user';
      turns.push({ role, text });
    }
  }

  turns.push({ role: 'user', text: currentMessage.trim() });

  let firstUserIdx = 0;
  while (firstUserIdx < turns.length && turns[firstUserIdx].role !== 'user') {
    firstUserIdx++;
  }
  const filtered = turns.slice(firstUserIdx);

  if (filtered.length === 0) {
    return [{ role: 'user', parts: [{ text: currentMessage.trim() }] }];
  }

  const normalized: GeminiContent[] = [];
  for (const turn of filtered) {
    if (normalized.length === 0) {
      normalized.push({ role: turn.role, parts: [{ text: turn.text }] });
    } else {
      const last = normalized[normalized.length - 1];
      if (last.role === turn.role) {
        last.parts[0].text += `\n${turn.text}`;
      } else {
        normalized.push({ role: turn.role, parts: [{ text: turn.text }] });
      }
    }
  }

  let result = normalized.slice(-8);
  while (result.length > 0 && result[0].role !== 'user') {
    result.shift();
  }

  return result.length > 0
    ? result
    : [{ role: 'user', parts: [{ text: currentMessage.trim() }] }];
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const body = await request.json();
    const { message, history, email, name } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'El campo "message" es obligatorio.' },
        { status: 400 }
      );
    }

    let replyText = '';
    const allAttempts: any[] = [];

    if (apiKey) {
      const contents = buildGeminiContents(history, message);
      const systemInstructionText = getSystemInstruction();

      const payload = {
        systemInstruction: {
          parts: [{ text: systemInstructionText }],
        },
        contents,
        generationConfig: {
          temperature: 0.35,
          maxOutputTokens: 1000,
          topP: 0.95,
        },
      };

      // Modelos ordenados por estabilidad, baja latencia y disponibilidad
      const modelsToTry = [
        'gemini-flash-latest',
        'gemini-flash-lite-latest',
        'gemini-3.5-flash',
        'gemini-3.6-flash',
        'gemini-3.7-flash',
        'gemini-3.8-flash',
        'gemini-pro-latest',
      ];

      for (const model of modelsToTry) {
        try {
          const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-goog-api-key': apiKey,
            },
            body: JSON.stringify(payload),
          });

          if (response.ok) {
            const data = await response.json();

            // Guardamos éxito para depuración
            await fs.writeFile(
              path.join(process.cwd(), 'data', 'last_gemini_success.json'),
              JSON.stringify({ model, data }, null, 2),
              'utf-8'
            ).catch(() => { });

            const parts: any[] = data.candidates?.[0]?.content?.parts || [];
            // Filtrar pensamientos internos del modelo (thought: true)
            const textParts = parts
              .filter((p: any) => !p.thought && typeof p.text === 'string')
              .map((p: any) => p.text);

            const textResult = textParts.join('\n').trim() || parts[0]?.text;

            if (textResult) {
              replyText = textResult;
              break;
            }
          } else {
            const errData = await response.text();
            allAttempts.push({ model, status: response.status, error: errData });
            console.warn(`Error con modelo ${model} (${response.status}):`, errData);

            // Si es 503 (alta demanda), esperar 350ms antes de llamar al siguiente para desaturar
            if (response.status === 503) {
              await new Promise((r) => setTimeout(r, 350));
            }
          }
        } catch (err: any) {
          allAttempts.push({ model, error: err?.message || String(err) });
        }
      }

      // Guardamos el log de intentos
      if (allAttempts.length > 0) {
        await fs.writeFile(
          path.join(process.cwd(), 'data', 'all_attempts.json'),
          JSON.stringify(allAttempts, null, 2),
          'utf-8'
        ).catch(() => { });
      }
    }

    // Si fallaron todos los modelos, mostrar el error exacto
    if (!replyText) {
      const firstFailure = allAttempts[0];
      const errorMsg = firstFailure
        ? `[${firstFailure.model} HTTP ${firstFailure.status}]: ${firstFailure.error}`
        : 'Error de red con la API de Gemini.';
      replyText = `Disculpa, en este momento el servicio de IA devolvió un error de conexión: ${errorMsg}. Por favor intenta de nuevo.`;
    }

    // Guardar la interacción en el archivo JSON del usuario
    const userEmail = email?.trim() || 'anonimo@sin-correo.com';
    saveUserChatInteraction({
      email: userEmail,
      name,
      userMessage: message,
      botResponse: replyText,
    }).catch((err) => console.error('Error al persistir conversación en JSON:', err));

    return NextResponse.json({
      text: replyText,
      data: [{ text: replyText }],
    });
  } catch (error: any) {
    console.error('Error en /api/chat:', error);
    return NextResponse.json(
      {
        error: error.message || 'Error interno del servidor',
        text: 'Ocurrió un error inesperado al procesar tu mensaje. Por favor intenta de nuevo.',
      },
      { status: 500 }
    );
  }
}
