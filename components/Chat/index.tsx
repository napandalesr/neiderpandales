"use client"

import LoadingDots from '@/components/icons/LoadingDots';
import { useChatbot } from '@/hooks/useChatbot';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Chat = ({ minimize }: { minimize: boolean }) => {
  const { sent, loading, messages } = useChatbot();
  const [msj, setMsj] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const sentMsj = async () => {
    await sent(msj, "6198833c-cc89-4b42-95d2-c60ffac0ab29");

    setMsj("");
  }

  const boldMarkdownToStrong = (text: string): string => {
    if (!text) return text;

    // Expresión regular que captura texto entre ** **
    const regex = /\*\*(.*?)\*\*/g;

    return text.replace(regex, (_, content) => `<strong>${content}</strong>`);
  }

  useEffect(() => {
    console.log("messages", messages);
  }, [messages]);

  return <>
    <section className='px-2 bg-white rounded-3xl h-80'>
      <section ref={scrollContainerRef} className='custom-scroll text-xs rounded-2xl h-80 overflow-y-auto flex flex-col p-2 relative'>
        {
          messages.map((item) => <>
            {
              item.emisor == "user" &&
              <div className='w-full flex flex-col items-end '>
                <p className='bg-gray-300 rounded-lg p-2 max-w-44 mb-1'>{item.text}</p>
              </div>
            }
            {
              item.emisor == "chatbot" &&
              <div className='w-full flex'>
                <div className='bg-custom-primary text-white rounded-lg p-2 max-w-44 mb-1'>
                  {
                    item.data && item.data?.length > 0 ?
                      <>
                        {
                          item.data?.map((item) => <>
                            {
                              item.text && <p dangerouslySetInnerHTML={{ __html: boldMarkdownToStrong(item.text) }}></p>
                            }
                            {
                              item.custom?.text && <p dangerouslySetInnerHTML={{ __html: boldMarkdownToStrong(item.custom.text) }}></p>
                            }
                            {
                              item.custom?.title && <p dangerouslySetInnerHTML={{ __html: boldMarkdownToStrong(item.custom.title) }}></p>
                            }
                            {
                              item.custom?.list && <>{item.custom.list.map((item) => <p dangerouslySetInnerHTML={{ __html: boldMarkdownToStrong(item) }}></p>)}</>
                            }
                            {
                              item.custom?.footer && <p>{boldMarkdownToStrong(item.custom.footer)}</p>
                            }
                          </>)
                        }
                      </>
                      : <p>{item.text}</p>
                  }
                </div>
              </div>
            }
          </>)
        }
        {
          loading && <section className='absolute bottom-0 left-8'><LoadingDots /></section>
        }
      </section>

    </section>
    <section className={`m-2 flex gap-2 items-center justify-between ${minimize && "hidden"}`}>
      <textarea
        ref={textareaRef}
        rows={1}
        className={`max-h-16 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-2xl py-1 px-2 w-52 resize-none overflow-hidden ${minimize && "hidden"}`}
        disabled={loading}
        value={msj}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sentMsj();
          }
        }}
        onChange={e => setMsj(e.target.value)} />
      <button
        onClick={sentMsj}
        className={`px-2 flex justify-center items-center bg-white rounded-xl ${minimize && "hidden"}`}
        disabled={loading}>
        <Image className='w-9' src={'/icons/send.png'} alt="Neider" width={256} height={256} />
      </button>
    </section>
    <style jsx>{`
    /* Chrome, Edge, Safari */
    .custom-scroll::-webkit-scrollbar {
      width: 8px;
    }
    .custom-scroll::-webkit-scrollbar-track {
      background: transparent;
      margin-top: 0;
      margin-bottom: 0;
    }
    .custom-scroll::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 4px;
    }
    .custom-scroll::-webkit-scrollbar-button {
      display: none;
      height: 0;
      width: 0;
    }

    /* Firefox */
    .custom-scroll {
      scrollbar-width: thin;
      scrollbar-color: rgba(0,0,0,0.5) transparent;
    }
  `}</style>
  </>;
}

export default Chat;