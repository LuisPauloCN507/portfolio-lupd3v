import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luis Paulo | Front-End Developer",
  description: "Portfólio de Luis Paulo, Desenvolvedor Front-End.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* AQUI: Adicionei o overflow-x-hidden ao body para esconder apenas a barra horizontal globalmente */}
      <body className="bg-[#020617] text-white antialiased overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}