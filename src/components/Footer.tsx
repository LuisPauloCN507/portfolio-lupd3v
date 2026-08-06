export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-zinc-950 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Luis Paulo (Lupd3v). Todos os direitos reservados.</p>
        
        <div className="flex gap-6 font-medium">
          <a 
            href="https://github.com/LuisPauloCN507" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="#contato" 
            className="hover:text-blue-400 transition-colors"
          >
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}