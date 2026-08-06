import { DataBackground } from "@/components/DataBackground";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Paulo | Front-End Developer",
  description: "Portfólio de Luis Paulo Costa Neto, Desenvolvedor Front-End.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth bg-black">
      <body className={`${inter.className} text-zinc-50 antialiased min-h-screen relative`}>
        
        {/* Camada 1: O Fundo Fixo com os Dados (Protegido atrás com z-0) */}
        <div className="fixed inset-0 z-0">
          <DataBackground />
        </div>

        {/* Camada 2: Todo o Conteúdo do Site (Forçado para a frente com z-10) */}
        <div className="relative z-10 flex flex-col min-h-screen bg-transparent">
          
          {/* Header */}
          <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-blue-900/50 z-50">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
              <a href="#inicio" className="text-xl font-bold text-zinc-100 tracking-tighter">
                Lup<span className="text-blue-500">d3v</span>
              </a>
              <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
                <a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre Mim</a>
                <a href="#projetos" className="hover:text-blue-400 transition-colors">Projetos</a>
                <a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a>
              </nav>
            </div>
          </header>

          {/* Main (onde entra a page.tsx) */}
          <main className="grow pt-16">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-blue-900/30 py-8 mt-12 text-center text-zinc-500 text-sm bg-black/80 backdrop-blur-sm">
            <p>© {new Date().getFullYear()} Luis Paulo Costa Neto.</p>
            <p className="mt-2">Desenvolvido com Next.js e Tailwind CSS.</p>
          </footer>
          
        </div>
      </body>
    </html>
  );
}