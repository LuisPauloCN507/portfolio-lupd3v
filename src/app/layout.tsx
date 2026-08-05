import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configurando a fonte Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Paulo | Full-Stack Developer",
  description: "Portfólio de Luis Paulo, Desenvolvedor Full-Stack focado no ecossistema JavaScript e TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}