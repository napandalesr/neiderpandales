import { transporter, mailOptions } from '@/utils/nodemailer';
import { NextResponse } from 'next/server';


const buildHTML = (name : string, email : string, message : string) : string => {
  return `<h1>PQRS</h1>
          <p><strong>Nombre: </strong>${name}</p>
          <p><strong>Correo: </strong>${email}</p>
          <p><strong>Mensaje: </strong>${message}</p>`;
}
 
export async function POST(request: Request, res: Response) {
  const data = await request.json()
  if (data.name === undefined || data.to === undefined || data.text === undefined) {
    return new Response('Todos los datos son obligatorios!', {
      status: 400,
    })
  }
  try {
    const sentMessageInfo = await transporter.sendMail({
        ...mailOptions,
        subject: "PQRS Web Neider Andres Pandales",
        html: buildHTML(data.name, data.to, data.text),
    });
    return NextResponse.json({message: sentMessageInfo});

  } catch (error : any) {
      return new Response(error.message, {
        status: 400,
      })
  }
}