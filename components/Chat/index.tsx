"use client"

import LoadingDots from '@/components/icons/LoadingDots';
import { useChatbot } from '@/hooks/useChatbot';
import React, { Fragment, useEffect, useRef, useState } from 'react';

const Chat = ({ minimize, id }: { minimize: boolean, id: string }) => {
  const { sent, loading, messages } = useChatbot();
  const [msj, setMsj] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // NUEVO: mostrar botón flotante
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
  }, [messages]);

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

  // ✔ NUEVO: Enviar mensaje + focus + scroll abajo
  const sentMsj = async () => {
    await sent(msj, id);
    setMsj("");

    if (textareaRef.current) textareaRef.current.focus();
    scrollToBottom();
  };

  const boldMarkdownToStrong = (text: string): string => {
    if (!text) return text;
    const regex = /\*\*(.*?)\*\*/g;
    return text.replace(regex, (_, content) => `<strong>${content}</strong>`);
  };

  // ✔ NUEVO: detectar cuando aparece el botón flotante
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const isAtBottom =
        container.scrollTop + container.clientHeight >= container.scrollHeight - 10;

      // ✔ mostrar si subió más de 120px y no está abajo
      setShowScrollDown(scrollTop < container.scrollHeight - container.clientHeight - 120 && !isAtBottom);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return <>
    <section className={`px-2 bg-white rounded-3xl transition-all duration-300 relative ${minimize ? "h-0" : "h-80"}`}>
      <section
        ref={scrollContainerRef}
        className={`custom-scroll text-xs rounded-2xl overflow-y-auto flex flex-col p-2 relative transition-all duration-300 ${minimize ? "h-0" : "h-80"}`}
      >
        {messages.map((item, index) => (
          <Fragment key={index}>
            {item.emisor === "user" && (
              <div className='w-full flex flex-col items-end '>
                <p className='bg-gray-300 rounded-lg p-2 max-w-44 mb-1'>{item.text}</p>
              </div>
            )}
            {item.emisor === "chatbot" && (
              <div className='w-full flex'>
                <div className='bg-custom-primary text-white rounded-lg p-2 max-w-56 mb-1'>
                  {item.data && item.data?.length > 0 ? (
                    <>
                      {item.data?.map((d, idx) => (
                        <Fragment key={idx}>
                          {d.text && <p dangerouslySetInnerHTML={{ __html: boldMarkdownToStrong(d.text) }} />}
                          {d.custom?.text && <p dangerouslySetInnerHTML={{ __html: boldMarkdownToStrong(d.custom.text) }} />}
                          {d.custom?.title && <p dangerouslySetInnerHTML={{ __html: boldMarkdownToStrong(d.custom.title) }} />}
                          {d.custom?.list && d.custom.list.map((x, i) => (
                            <p key={i} dangerouslySetInnerHTML={{ __html: boldMarkdownToStrong(x) }} />
                          ))}
                          {d.custom?.footer && <p>{boldMarkdownToStrong(d.custom.footer)}</p>}
                        </Fragment>
                      ))}
                    </>
                  ) : (
                    <p>{item.text}</p>
                  )}
                </div>
              </div>
            )}
          </Fragment>
        ))}

        {loading && (
          <section className='absolute bottom-0 left-8'>
            <LoadingDots />
          </section>
        )}

        {/* ✔ NUEVO: BOTÓN FLOTANTE (SVG INCLUIDO) */}
        {showScrollDown && !minimize && (
          <button
            onClick={scrollToBottom}
            className="sticky bottom-2 w-min -translate-x-1/2 left-1/2 bg-white shadow-lg border border-gray-300 p-2 rounded-full z-50 hover:scale-105 transition"
          >
            {/* SVG flecha hacia abajo */}
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
      className={`m-2 flex gap-2 items-center justify-between transition-all duration-300 ${minimize ? "invisible opacity-0 h-0" : "h-auto"}`}
    >
      <textarea
        ref={textareaRef}
        rows={1}
        className={`max-h-16 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black rounded-2xl py-1 px-2 w-72 resize-none overflow-hidden ${minimize ? "opacity-0 invisible h-0" : "h-auto"
          }`}
        disabled={loading || minimize}
        value={msj}
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
        className={`px-2 flex justify-center items-center bg-white rounded-xl ${minimize ? "opacity-0 invisible h-0" : "h-auto"
          }`}
        disabled={loading}
      >
        <img className='w-9' src={'/icons/send.png'} alt="icon-send" />
      </button>
    </section>

    <style jsx>{`
      .custom-scroll::-webkit-scrollbar {
        width: 8px;
      }
      .custom-scroll::-webkit-scrollbar-track {
        background: transparent;
      }
      .custom-scroll::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 4px;
      }
      .custom-scroll {
        scrollbar-width: thin;
        scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
      }
    `}</style>
  </>;
};

export default Chat;
