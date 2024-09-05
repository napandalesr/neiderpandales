import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Whatsapp from "@/components/whatsapp";
import ToastProvider from "@/components/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neider Pandales",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="bg-[url('/images/fondo.jpg')] bg-no-repeat bg-cover relative xl:h-screen">
        <Whatsapp/>
        <ToastProvider>
          {children}
        </ToastProvider>
        </main>
      </body>
    </html>
  );
}
