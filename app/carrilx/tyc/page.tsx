"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CarrilxPrivacyPolicy() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation back */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-sm font-medium text-slate-300 hover:text-white border border-slate-700/60 shadow-md backdrop-blur-md transition-all duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver al portafolio
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Documento Vigente
          </span>
        </div>

        {/* Hero Card */}
        <header className="rounded-3xl bg-slate-900/90 border border-slate-700/70 p-6 sm:p-10 shadow-2xl backdrop-blur-lg mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-44 h-44 bg-gradient-to-br from-amber-500/20 to-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md">
              Carril X
            </span>
            <span className="text-xs font-medium text-slate-400 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700/50">
              Videojuego Móvil Arcade 2D
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Política de Privacidad de Carril X
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Esta Política de Privacidad describe cómo <strong className="text-white">Carril X</strong> recopila, utiliza y protege la información al utilizar el juego móvil disponible en Google Play Store. Cumplimos con los requisitos del Reglamento General de Protección de Datos (GDPR), la Ley de Privacidad del Consumidor de California (CCPA) y las Directrices de Datos de Usuario de Google Play.
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800">
            <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/50">
              <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1 font-semibold">
                ID de la aplicación
              </span>
              <div className="flex items-center justify-between gap-2">
                <code className="text-xs sm:text-sm font-mono text-amber-400 font-bold truncate">
                  com.carrilx.carrilx
                </code>
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard("com.carrilx.carrilx", "appId")
                  }
                  className="text-slate-400 hover:text-white transition-colors"
                  title="Copiar ID"
                >
                  {copiedField === "appId" ? (
                    <span className="text-xs text-emerald-400 font-sans">
                      ✓ Copiado
                    </span>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/50">
              <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1 font-semibold">
                Última actualización
              </span>
              <p className="text-xs sm:text-sm font-semibold text-white">
                4 de noviembre de 2026
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/50">
              <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1 font-semibold">
                Contacto de soporte
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href="mailto:soporte.carrilx@gmail.com"
                  className="text-xs sm:text-sm font-medium text-sky-400 hover:underline truncate"
                >
                  soporte.carrilx@gmail.com
                </a>
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard("soporte.carrilx@gmail.com", "email")
                  }
                  className="text-slate-400 hover:text-white transition-colors"
                  title="Copiar correo"
                >
                  {copiedField === "email" ? (
                    <span className="text-xs text-emerald-400 font-sans">
                      ✓ Copiado
                    </span>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="space-y-6">
          {/* 1. Resumen General */}
          <section className="rounded-3xl bg-slate-900/85 border border-slate-800 p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-sm border border-amber-500/30">
                1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Resumen General
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              <strong className="text-white">Carril X</strong> es un videojuego arcade 2D para dispositivos móviles.{" "}
              <strong className="text-amber-300 bg-amber-500/10 px-1 py-0.5 rounded">
                No solicitamos cuentas de usuario, no requerimos registro y no almacenamos información de identificación personal
              </strong>{" "}
              (como nombres reales, contraseñas, correos electrónicos o números de teléfono) en servidores privados propios.
            </p>
          </section>

          {/* 2. Datos que se Tratan */}
          <section className="rounded-3xl bg-slate-900/85 border border-slate-800 p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-sm border border-amber-500/30">
                2
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Datos que se Tratan en la Aplicación
              </h2>
            </div>

            <div className="space-y-6">
              {/* A */}
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-amber-400 font-bold">A.</span> Almacenamiento Local en su Dispositivo
                </h3>
                <p className="text-slate-300 text-sm mb-3">
                  El progreso de su juego se guarda de manera 100% local en la memoria de su teléfono (
                  <code className="text-amber-300 bg-slate-900 px-1.5 py-0.5 rounded font-mono text-xs">
                    user://progreso.save
                  </code>
                  ). Esta información comprende:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">▸</span>
                    <span>Nivel actual alcanzado y récord de puntuación.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">▸</span>
                    <span>Monedas virtuales acumuladas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">▸</span>
                    <span>Vehículos desbloqueados en el garaje y auto seleccionado.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">▸</span>
                    <span>Preferencias de configuración (audio, música y modo de control táctil).</span>
                  </li>
                </ul>
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>
                    <strong>Nota de Privacidad:</strong> Estos datos nunca salen de su dispositivo hacia ningún servidor externo gestionado por el desarrollador.
                  </span>
                </div>
              </div>

              {/* B */}
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-amber-400 font-bold">B.</span> Datos Recopilados por Servicios de Terceros (Publicidad)
                </h3>
                <p className="text-slate-300 text-sm mb-3">
                  El juego utiliza <strong className="text-white">Google AdMob</strong> para financiar su desarrollo y ofrecer una experiencia gratuita. Google AdMob puede recopilar y procesar automáticamente los siguientes datos técnicos mediante su SDK oficial:
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1">•</span>
                    <div>
                      <strong className="text-slate-100">Identificador de publicidad móvil:</strong> Google Advertising ID (GAID / AAID).
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1">•</span>
                    <div>
                      <strong className="text-slate-100">Información técnica del dispositivo:</strong> Modelo del dispositivo, versión del sistema operativo Android, idioma y operador.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1">•</span>
                    <div>
                      <strong className="text-slate-100">Ubicación geográfica aproximada:</strong> Derivada de la dirección IP (con el fin de suministrar anuncios relevantes para su región).
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1">•</span>
                    <div>
                      <strong className="text-slate-100">Métricas de interacción con los anuncios:</strong> Frecuencia de visualización de anuncios, interacción con anuncios recompensados (obtención de vidas extra o monedas) y reportes de diagnóstico/fallos.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Proveedores Terceros */}
          <section className="rounded-3xl bg-slate-900/85 border border-slate-800 p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-sm border border-amber-500/30">
                3
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Proveedores de Servicios Terceros
              </h2>
            </div>
            <p className="text-slate-300 text-sm mb-5">
              Para fines de transparencia requerida por Google Play:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-700/70">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/90 text-slate-200 border-b border-slate-700/80 uppercase text-xs tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4 font-semibold">Proveedor</th>
                    <th className="py-3.5 px-4 font-semibold">Propósito</th>
                    <th className="py-3.5 px-4 font-semibold">Enlace a su Política</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900/50">
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-white whitespace-nowrap">
                      Google Play Services
                    </td>
                    <td className="py-4 px-4 text-slate-300">
                      Servicios del sistema operativo, autenticación e integridad
                    </td>
                    <td className="py-4 px-4">
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-medium underline"
                      >
                        Google Privacy Policy
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-white whitespace-nowrap">
                      Google AdMob
                    </td>
                    <td className="py-4 px-4 text-slate-300">
                      Servicio de anuncios intersticiales, de apertura y recompensados
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-col gap-1">
                        <a
                          href="https://policies.google.com/technologies/ads"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-medium underline"
                        >
                          Políticas de Anuncios de Google
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <a
                          href="https://policies.google.com/privacy/partners"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-medium underline"
                        >
                          Términos de Partners
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Finalidad del Tratamiento */}
          <section className="rounded-3xl bg-slate-900/85 border border-slate-800 p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-sm border border-amber-500/30">
                4
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Finalidad del Tratamiento
              </h2>
            </div>
            <p className="text-slate-300 text-sm mb-4">
              Los datos se procesan con los siguientes objetivos:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Permitir la continuidad del juego (guardado y carga de partidas y récords).",
                "Servir anuncios publicitarios apropiados y no invasivos.",
                "Permitir recompensar al usuario con vidas o monedas cuando visualiza voluntariamente un anuncio de video.",
                "Detectar fallos técnicos, proteger la integridad del software y prevenir fraudes publicitarios.",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-slate-200 leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Privacidad de Menores */}
          <section className="rounded-3xl bg-slate-900/85 border border-slate-800 p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-sm border border-amber-500/30">
                5
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Privacidad de Menores (COPPA / GDPR-K)
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              <strong className="text-white">Carril X</strong> es un juego diseñado para todo público. No recopilamos conscientemente datos de identificación personal de niños menores de 13 años (o menores de 16 en la Unión Europea). Los anuncios servidos a través de Google AdMob se gestionan conforme a las normativas de contenido familiar y estándares de Google Play.
            </p>
          </section>

          {/* 6. Control y Eliminación de Datos */}
          <section className="rounded-3xl bg-slate-900/85 border border-slate-800 p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-sm border border-amber-500/30">
                6
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Control y Eliminación de Datos
              </h2>
            </div>
            <p className="text-slate-300 text-sm mb-4">
              El usuario dispone de control completo sobre sus datos:
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <h3 className="font-semibold text-white text-sm sm:text-base mb-1">
                  • Eliminar datos del juego:
                </h3>
                <p className="text-slate-300 text-sm">
                  Puede borrar de inmediato todo su progreso, monedas y récords simplemente desinstalando el juego o ingresando a{" "}
                  <em className="text-amber-300 not-italic font-medium">
                    Ajustes de Android &gt; Aplicaciones &gt; Carril X &gt; Almacenamiento &gt; Borrar datos
                  </em>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <h3 className="font-semibold text-white text-sm sm:text-base mb-1">
                  • Restablecer el ID de Publicidad:
                </h3>
                <p className="text-slate-300 text-sm">
                  Puede restablecer o eliminar su Identificador de Publicidad ingresando en su dispositivo a{" "}
                  <em className="text-amber-300 not-italic font-medium">
                    Ajustes &gt; Google &gt; Anuncios &gt; Restablecer / Eliminar ID de publicidad
                  </em>.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Seguridad */}
          <section className="rounded-3xl bg-slate-900/85 border border-slate-800 p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-sm border border-amber-500/30">
                7
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Seguridad
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              La comunicación con los servicios publicitarios de Google se realiza exclusivamente mediante protocolos cifrados bajo el estándar <strong className="text-white">HTTPS (SSL/TLS)</strong>.
            </p>
          </section>

          {/* 8. Modificaciones a esta Política */}
          <section className="rounded-3xl bg-slate-900/85 border border-slate-800 p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-sm border border-amber-500/30">
                8
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Modificaciones a esta Política
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Nos reservamos el derecho de actualizar esta Política de Privacidad cuando sea necesario para cumplir con normativas legales o directrices de Google Play. Cualquier cambio será publicado de forma inmediata en esta misma URL.
            </p>
          </section>

          {/* 9. Contacto */}
          <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/40 p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500 text-slate-950 font-black text-sm">
                9
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Contacto
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base mb-6">
              Si tiene cualquier duda sobre esta política o el tratamiento de datos en <strong className="text-white">Carril X</strong>, por favor contáctenos a:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                    Correo Electrónico
                  </span>
                  <a
                    href="mailto:soporte.carrilx@gmail.com"
                    className="text-amber-400 hover:text-amber-300 font-bold text-base break-all transition-colors"
                  >
                    soporte.carrilx@gmail.com
                  </a>
                </div>
                <div className="mt-4">
                  <a
                    href="mailto:soporte.carrilx@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200"
                  >
                    Enviar correo
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                  Aplicación
                </span>
                <p className="text-white font-bold text-base mb-1">
                  Carril X
                </p>
                <code className="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded inline-block">
                  com.carrilx.carrilx
                </code>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-10 pt-6 border-t border-slate-800/80 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Carril X. Todos los derechos reservados.</p>
          <p className="mt-1 text-slate-400">
            Desarrollado y publicado por Neider Pandales.
          </p>
        </footer>
      </div>
    </div>
  );
}

