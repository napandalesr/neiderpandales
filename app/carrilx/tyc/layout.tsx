import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad - Carril X",
  description:
    "Política de Privacidad y Términos y Condiciones del videojuego móvil Carril X (com.carrilx.carrilx). Cumplimiento con GDPR, CCPA y Google Play.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function CarrilxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

