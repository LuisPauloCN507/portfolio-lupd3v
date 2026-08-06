import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Nome */}
        <Link href="/" className="text-xl font-bold text-zinc-100 hover:text-blue-500 transition-colors">
          Lupd3v<span className="text-blue-500">.</span>
        </Link>
        
        {/* Navegação Desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <Link href="#inicio" className="hover:text-zinc-100 transition-colors">Início</Link>
          <Link href="#sobre" className="hover:text-zinc-100 transition-colors">Sobre Mim</Link>
          <Link href="#projetos" className="hover:text-zinc-100 transition-colors">Projetos</Link>
          <Link href="#contato" className="hover:text-zinc-100 transition-colors">Contato</Link>
        </nav>
      </div>
    </header>
  );
}