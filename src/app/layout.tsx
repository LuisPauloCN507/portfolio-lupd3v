import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css"; // Mantém a importação de CSS como estava

export const metadata: Metadata = {
  title: "Luis Paulo | Desenvolvedor Full-Stack",
  description: "Portfólio de Luis Paulo, Desenvolvedor Full-Stack.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-[#020617] text-white antialiased overflow-x-hidden">
        {/* Adicionar o Cursor AQUI */}
        <CustomCursor/>
        
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}