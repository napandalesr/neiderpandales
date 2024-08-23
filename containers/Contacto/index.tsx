import Title from '@/components/title';
import { masterDataES } from '@/utils/masterData';
import { showToast } from '@/utils/showToast';
import Image from 'next/image';
import React, { useState } from 'react';

const Contacto = () => {
  const [loading, setLaoding] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    text: '',
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLaoding(true);
    if(form.name === '' || form.email === ''  || form.text === '') {
      showToast("error", <p>Todos los campos son obligatorios</p>);
    }else {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: form.name, to: form.email, text: form.text }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        showToast("success", <p>Correo enviado con éxito!</p>);
        //alert('Correo enviado con éxito');
      } else {
        showToast("error", <p>{data.message}</p>);
      }
    }
    setLaoding(false);
  };

  return <section id={masterDataES.nav[3].navbar}>
    <Title text='Contacto'/>
    <Image src={'/icons/whatsapp.png'} alt='whatsapp' width={380} height={60}/>
    <Image src={'/icons/call.png'} alt='whatsapp' width={380} height={60}/>
    <Image src={'/icons/email.png'} alt='whatsapp' width={380} height={60}/>
    <section>
      <section className='flex gap-6 w-full h-12 mt-8'>
        <input placeholder='Nombre' type="text" className='border-4 w-1/2 px-2' value={form.name} onChange={e=>setForm({...form, name: e.target.value})}/>
        <input placeholder='Correo' type="email" className='border-4 w-1/2 px-2' value={form.email} onChange={e=>setForm({...form, email: e.target.value})}/>
      </section>
      <textarea placeholder='Descripción' className='border-4 w-full mt-4 h-36 px-2' name="" id="" value={form.text} onChange={e=>setForm({...form, text: e.target.value})}></textarea>
      <section className='w-full flex'>
        <button className='mx-auto border-2 px-6 py-2 mt-2 rounded-3xl bg-custom-primary text-white font-bold' onClick={handleSubmit}>Enviar</button>
      </section>
    </section>
</section>;
}

export default Contacto;