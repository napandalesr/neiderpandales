"use client"

import LoadingDots from '@/components/icons/LoadingDots';
import { useChatbot } from '@/hooks/useChatbot';
import React, { Fragment, useEffect, useRef, useState } from 'react';

interface ChatProps {
  minimize: boolean;
  id: string;
  userEmail?: string;
  userName?: string;
}

const inlineFormatting = (text: string): string => {
  return text
    // Código inline `codigo`
    .replace(/`([^`]+)`/g, '<code class="bg-black/30 text-amber-300 px-1 py-0.5 rounded text-xs font-mono">$1</code>')
    // Negrita + cursiva ***texto***
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="font-bold text-white"><em class="italic">$1</em></strong>')
    // Negrita **texto**
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
    // Cursiva *texto* o _texto_
    .replace(/\*([^*\n]+)\*/g, '<em class="italic text-slate-200">$1</em>')
    .replace(/_([^_\n]+)_/g, '<em class="italic text-slate-200">$1</em>');
};

const formatMarkdown = (text: string): string => {
  if (!text) return '';

  // Limpiar etiquetas <br> o < br /> que puedan venir de datos crudos o respuestas
  const cleanedText = text.replace(/<\s*br\s*\/?>/gi, '\n');
  const lines = cleanedText.split('\n');
  const formatted: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    // Línea horizontal ---
    if (/^---{1,}$/.test(trimmed)) {
      formatted.push('<hr class="border-t border-white/20 my-2" />');
      continue;
    }

    // Encabezados H1, H2, H3
    if (/^###\s+(.*)/.test(trimmed)) {
      const content = trimmed.replace(/^###\s+/, '');
      formatted.push(`<h4 class="font-bold text-sm text-amber-300 mt-2 mb-0.5">${inlineFormatting(content)}</h4>`);
      continue;
    }
    if (/^##\s+(.*)/.test(trimmed)) {
      const content = trimmed.replace(/^##\s+/, '');
      formatted.push(`<h3 class="font-bold text-base text-amber-300 mt-2.5 mb-1">${inlineFormatting(content)}</h3>`);
      continue;
    }
    if (/^#\s+(.*)/.test(trimmed)) {
      const content = trimmed.replace(/^#\s+/, '');
      formatted.push(`<h2 class="font-bold text-lg text-amber-300 mt-3 mb-1">${inlineFormatting(content)}</h2>`);
      continue;
    }

    // Listas / viñetas (* o -)
    if (/^(\*|-)\s+(.*)/.test(trimmed)) {
      const content = trimmed.replace(/^(\*|-)\s+/, '');
      formatted.push(`<div class="flex items-start gap-1.5 my-0.5 ml-1"><span class="text-amber-400 font-bold shrink-0 mt-0.5 leading-none">•</span><span class="flex-1">${inlineFormatting(content)}</span></div>`);
      continue;
    }

    // Listas numeradas (1. 2. etc.)
    if (/^(\d+)\.\s+(.*)/.test(trimmed)) {
      const match = trimmed.match(/^(\d+)\.\s+(.*)/);
      if (match) {
        const num = match[1];
        const content = match[2];
        formatted.push(`<div class="flex items-start gap-1.5 my-0.5 ml-1"><span class="text-amber-400 font-bold shrink-0 text-xs">${num}.</span><span class="flex-1">${inlineFormatting(content)}</span></div>`);
        continue;
      }
    }

    // Líneas vacías (espaciado entre párrafos)
    if (!trimmed) {
      formatted.push('<div class="h-1.5"></div>');
      continue;
    }

    formatted.push(`<p class="my-0.5 leading-relaxed">${inlineFormatting(trimmed)}</p>`);
  }

  return formatted.join('');
};

const Chat = ({ minimize, id, userEmail, userName }: ChatProps) => {
  const { sent, loading, messages } = useChatbot();
  const [msj, setMsj] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Botón flotante para bajar al fondo
  const [showScrollDown, setShowScrollDown] = useState(false);

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [msj]);

  useEffect(() => {
    if (!loading) {
      if (textareaRef.current) textareaRef.current.focus();
    }
  }, [loading]);

  // Enviar mensaje seguro evitando duplicados
  const sentMsj = async () => {
    if (loading || !msj.trim()) return;
    const currentMsj = msj.trim();
    setMsj("");
    await sent(currentMsj, id, userEmail, userName);

    if (textareaRef.current) textareaRef.current.focus();
    scrollToBottom();
  };

  // Detectar cuando el scroll no está en el fondo
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const isAtBottom =
        container.scrollTop + container.clientHeight >= container.scrollHeight - 10;

      setShowScrollDown(scrollTop < container.scrollHeight - container.clientHeight - 120 && !isAtBottom);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return <>
    <section className={`px-2.5 bg-white rounded-3xl transition-all duration-300 relative ${minimize ? "h-0" : "h-[390px] md:h-[440px]"}`}>
      <section
        ref={scrollContainerRef}
        className={`custom-scroll text-xs sm:text-[13px] rounded-2xl overflow-y-auto flex flex-col p-2 relative transition-all duration-300 ${minimize ? "h-0" : "h-[390px] md:h-[440px]"}`}
      >
        {messages.map((item, index) => (
          <Fragment key={index}>
            {item.emisor === "user" && (
              <div className='w-full flex flex-col items-end'>
                <p className='bg-gray-100 text-gray-800 rounded-2xl px-3.5 py-2.5 max-w-[85%] mb-2.5 shadow-sm leading-relaxed border border-gray-200/60 font-medium'>
                  {item.text}
                </p>
              </div>
            )}
            {item.emisor === "chatbot" && (
              <div className='w-full flex'>
                <div className='bg-custom-primary text-white rounded-2xl px-3.5 py-2.5 max-w-[90%] mb-2.5 shadow-sm leading-relaxed'>
                  {item.data && item.data?.length > 0 ? (
                    <>
                      {item.data?.map((d, idx) => (
                        <Fragment key={idx}>
                          {d.text && <div dangerouslySetInnerHTML={{ __html: formatMarkdown(d.text) }} />}
                          {d.custom?.text && <div dangerouslySetInnerHTML={{ __html: formatMarkdown(d.custom.text) }} />}
                          {d.custom?.title && <div dangerouslySetInnerHTML={{ __html: formatMarkdown(d.custom.title) }} />}
                          {d.custom?.list && d.custom.list.map((x, i) => (
                            <div key={i} dangerouslySetInnerHTML={{ __html: formatMarkdown(x) }} />
                          ))}
                          {d.custom?.footer && <div dangerouslySetInnerHTML={{ __html: formatMarkdown(d.custom.footer) }} />}
                        </Fragment>
                      ))}
                    </>
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: formatMarkdown(item.text ?? '') }} />
                  )}
                </div>
              </div>
            )}
          </Fragment>
        ))}

        {loading && (
          <div className='flex items-center gap-2 text-xs text-slate-500 italic p-1.5 ml-2 mb-1'>
            <LoadingDots />
            <span>Neider está pensando la respuesta...</span>
          </div>
        )}

        {/* BOTÓN FLOTANTE */}
        {showScrollDown && !minimize && (
          <button
            onClick={scrollToBottom}
            className="sticky bottom-2 w-min -translate-x-1/2 left-1/2 bg-white shadow-lg border border-gray-300 p-2 rounded-full z-50 hover:scale-105 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="M19 12l-7 7-7-7" />
            </svg>
          </button>
        )}
      </section>
    </section>

    <section
      className={`m-2.5 flex gap-2 items-center justify-between transition-all duration-300 ${minimize ? "invisible opacity-0 h-0" : "h-auto"}`}
    >
      <textarea
        ref={textareaRef}
        rows={1}
        className={`max-h-20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black rounded-2xl py-2 px-3.5 flex-1 resize-none overflow-hidden text-xs sm:text-sm shadow-inner bg-white ${minimize ? "opacity-0 invisible h-0" : "h-auto"
          }`}
        disabled={loading || minimize}
        value={msj}
        placeholder={loading ? "Escribiendo respuesta..." : "Escribe una pregunta para Neider..."}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sentMsj();
          }
        }}
        onChange={(e) => setMsj(e.target.value)}
      />

      <button
        onClick={sentMsj}
        className={`p-2 flex justify-center items-center bg-white rounded-2xl shadow hover:scale-105 transition-all ${minimize ? "opacity-0 invisible h-0" : "h-auto"
          }`}
        disabled={loading || !msj.trim()}
      >
        <img className={`w-8 h-8 object-contain transition-opacity ${loading || !msj.trim() ? "opacity-40" : "opacity-100"}`} src={'/icons/send.png'} alt="icon-send" />
      </button>
    </section>

    <style jsx>{`
      .custom-scroll::-webkit-scrollbar {
        width: 6px;
      }
      .custom-scroll::-webkit-scrollbar-track {
        background: transparent;
      }
      .custom-scroll::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 4px;
      }
      .custom-scroll {
        scrollbar-width: thin;
        scrollbar-color: rgba(0, 0, 0, 0.25) transparent;
      }
    `}</style>
  </>;
};

export default Chat;
