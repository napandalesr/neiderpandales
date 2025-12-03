"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import MinimizeIconCircle from '../../components/icons/Minimize';
import Chat from '@/components/Chat';
import { useUser } from '@/hooks/useUser';

const Chatbot = () => {
  const [minimize, setMinimize] = useState(false);
  const [register, setRegister] = useState(false);
  const [name, setName] = useState({
    check: false,
    text: ""
  });
  const [email, setEmail] = useState("");
  const { validateUser, createUser, user, loading } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await validateUser(email);
    if (user) {
      setRegister(true);
    } else {
      setName({
        check: true,
        text: ""
      })
    }
  }

  const handelSubmitName = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await createUser(name.text, email);
    if (user) {
      setRegister(true);
      setName({
        check: true,
        text: user.name
      })
    }
  }

  return <section className={`fixed right-12 bottom-4 z-30 rounded-3xl py-2 border bg-custom-secundary transition-all duration-300 ${minimize ? "w-64" : "w-80"}`}>
    <header className='px-4 py-2 text-white w-full flex justify-between items-center'>
      <p className='font-medium flex items-center gap-2 w-48'>
        <Image className='w-10' src={'/Neider1.png'} alt="Neider" width={446} height={440} />
        Hola, soy Neider, un chatbot con IA</p>
      <button onClick={() => setMinimize(prev => !prev)}>
        <MinimizeIconCircle />
      </button>
    </header>
    <section className={`${minimize ? "invisible opacity-0 h-0 duration-300" : "h-auto"} transition-all duration-300`}>
      {
        register ? <>
          <Chat minimize={minimize} id={user?.id ?? ""} />
        </>
          :
          <>
            <form className={`p-4 w-full text-white text-center flex flex-col gap-2 transition-all duration-300 ${minimize ? "invisible opacity-0 h-0" : "h-auto"}`}>
              {
                name.check ? <>
                  <label htmlFor="">Escribe tu nombre</label>
                  <input
                    className='rounded-2xl p-1 w-full text-gray-700'
                    type="text"
                    disabled={minimize}
                    onChange={e => setName(prev => ({ ...prev, text: e.target.value }))}
                    value={name.text} />
                  <button
                    className='rounded-2xl p-1 w-full bg-[#4ca4de] text-white'
                    disabled={name.text.length < 2}
                    onClick={e => {
                      e.preventDefault();
                      handelSubmitName(e);
                    }}>
                    {loading ? "Cargando..." : "Enviar"}
                  </button>
                </>
                  :
                  <>
                    <label htmlFor="">Escribe tu correo</label>
                    <input
                      className='rounded-2xl p-1 w-full text-gray-700'
                      type="email"
                      disabled={minimize}
                      onChange={e => setEmail(e.target.value)}
                      value={email} />
                    <button
                      className='rounded-2xl p-1 w-full bg-[#4ca4de] text-white'
                      disabled={email.length < 5}
                      onClick={e => {
                        e.preventDefault();
                        handleSubmit(e);
                      }}>
                      {
                        loading ? "Cargando..." : "Enviar"
                      }
                    </button>
                  </>
              }
            </form>
          </>
      }
    </section>
  </section>;
}

export default Chatbot;