import type { Metadata } from "next";
import NetworkStatus from "@/components/NetworkStatus";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Cafecito | Tienda de Café Online",
  description: "Café 100% Colombiano, directo del productor a tu mesa.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Precarga de imágenes y fuentes */}
        <link rel="preload" as="image" href="/images/hero-bg.jpg" />
        <link rel="preload" as="font" href="/fonts/helvetica.woff2" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <NetworkStatus />
      </body>
    </html>
  );
}
