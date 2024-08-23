import nodemailer, {SendMailOptions} from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'napandalesr@gmail.com', // Reemplaza con tu correo
    pass: 'pxyc gnse vuov adhp', // Reemplaza con tu contraseña
  },
});

export const mailOptions: SendMailOptions = {
    from: 'napandalesr@gmail.com',
    to: "napandalesr@gmail.com",
}