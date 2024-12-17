import LoadingComponent from '@/components/Loading';
import Title from '@/components/title';
import { masterDataES } from '@/utils/masterData';
import { showToast } from '@/utils/showToast';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export const Contacto = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    text: '',
  });
  const classInput = 'border-b-4 border-custom-secundary focus:outline-none focus:border-custom-primary px-2';

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if(form.name === '' || form.email === ''  || form.text === '') {
      showToast("error", <p>Todos los campos son obligatorios</p>);
    }else {
      try {
        const res = await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name: form.name, to: form.email, text: form.text }),
        });
    
        const data = await res.json();
    
        if (res.ok) {
          showToast("success", <p>Solicitud enviada con éxito!</p>);
          setForm({
            name: '',
            email: '',
            text: '',
          });
        } else {
          showToast("error", <p>{data.message}</p>);
        }
      } catch (error) {
        showToast("error", <p>Hubo un error, por favor intente más tarde</p>);
      }
    }
    setLoading(false);
  };

  return <section id={masterDataES.nav[4].navbar}>
    <Title text='Contacto'/>
    <Link className='border-2 p-2 flex w-max max-w-full rounded shadow hover:scale-110 transition ease-in-out' href='https://dm.wa.link/0a0dgs' target='_blank'><Image src={'/icons/whatsapp.png'} alt='whatsapp' width={380} height={60}/></Link>
    <Image src={'/icons/call.png'} alt='whatsapp' width={380} height={60}/>
    <Image src={'/icons/email.png'} alt='email' width={380} height={60}/>
    <section>
      <section className='flex gap-6 w-full h-12 mt-8'>
        <input placeholder='Nombre' type="text" className={`${classInput} w-1/2`} value={form.name} onChange={e=>setForm({...form, name: e.target.value})}/>
        <input placeholder='Correo' type="email" className={`${classInput} w-1/2`} value={form.email} onChange={e=>setForm({...form, email: e.target.value})}/>
      </section>
      <textarea placeholder='Descripción' className={`${classInput} w-full mt-4 h-36`} name="" id="" value={form.text} onChange={e=>setForm({...form, text: e.target.value})}></textarea>
      <section className='w-full flex'>
        <button className='mx-auto border-2 px-6 py-2 mt-2 rounded-3xl bg-custom-primary text-white font-bold' onClick={handleSubmit}>Enviar</button>
      </section>
    </section>
    {
      loading && <LoadingComponent/>
    }
    </section>;
}