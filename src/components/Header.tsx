import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="#inicio" className="text-white font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
          LuisPaulo<span className="text-cyan-400">CN507</span>
        </Link>
        
        {/* Navegação */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-300">
          <a href="#inicio" className="hover:text-cyan-400 transition-colors">Início</a>
          <a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre Mim</a>
          <a href="#projetos" className="hover:text-cyan-400 transition-colors">Projetos</a>
        </nav>

        {/* Menu Mobile */}
        <nav className="flex md:hidden gap-4 text-xs font-medium text-zinc-300">
          <a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre</a>
          <a href="#projetos" className="hover:text-cyan-400 transition-colors">Projetos</a>
        </nav>

      </div>
    </header>
  );
}