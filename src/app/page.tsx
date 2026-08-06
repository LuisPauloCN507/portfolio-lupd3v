import { Code2, ExternalLink, Send, Terminal } from "lucide-react";
import Image from "next/image";
import { FaDatabase, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiGit,
  SiGo,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
}

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch('https://api.github.com/users/LuisPauloCN507/repos?sort=updated&per_page=4', {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Erro ao buscar repositórios:", error);
    return [];
  }
}

export default async function Home() {
  const repos = await getRepos();

  // Tech Stack
  const techStack = [
    { name: 'JavaScript', icon: <SiJavascript size={18} className="text-[#F7DF1E]" /> },
    { name: 'TypeScript', icon: <SiTypescript size={18} className="text-[#3178C6]" /> },
    { name: 'React', icon: <SiReact size={18} className="text-[#61DAFB]" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={18} className="text-zinc-100" /> },
    { name: 'Node.js', icon: <SiNodedotjs size={18} className="text-[#339933]" /> },
    { name: 'Python', icon: <SiPython size={18} className="text-[#3776AB]" /> },
    { name: 'C', icon: <SiC size={18} className="text-[#A8B9CC]" /> },
    { name: 'C++', icon: <SiCplusplus size={18} className="text-[#00599C]" /> },
    { name: 'Go', icon: <SiGo size={18} className="text-[#00ADD8]" /> },
    { name: 'SQL', icon: <FaDatabase size={18} className="text-zinc-400" /> },
    { name: 'Linux', icon: <SiLinux size={18} className="text-[#FCC624]" /> },
    { name: 'Git', icon: <SiGit size={18} className="text-[#F05032]" /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={18} className="text-[#06B6D4]" /> }
  ];

  // Mapeamento de projetos que estão online
  const linksDeDeploy: Record<string, string> = {
    'radio-arch': 'https://radio-arch-beige.vercel.app/',
    'radioarch': 'https://radio-arch-beige.vercel.app/',
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-32">
      
      {/* Seção Início (Hero) */}
      <section id="inicio" className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-12 md:mt-24">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-blue-900/50 text-zinc-400 text-sm mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Online
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Luis <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">Paulo Costa</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
            Desenvolvedor Front-End especializado em transformar conceitos em interfaces limpas, intuitivas e de alta performance.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#projetos" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all hover:scale-105">
              <Code2 size={20} />
              Ver Projetos
            </a>
            <a href="https://github.com/LuisPauloCN507" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-black/50 hover:bg-zinc-900 border border-blue-900/30 text-zinc-300 rounded-lg font-medium transition-all hover:scale-105 backdrop-blur-sm">
              <FaGithub size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/luis-paulo-costa-neto-42521a352" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-black/50 hover:bg-zinc-900 border border-blue-900/30 text-zinc-300 rounded-lg font-medium transition-all hover:scale-105 backdrop-blur-sm">
              <FaLinkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Foto do Perfil do GitHub */}
        <div className="relative">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-600 rounded-full blur-md opacity-75"></div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 bg-black rounded-full border-2 border-blue-900 flex items-center justify-center overflow-hidden">
            <Image 
              src="https://avatars.githubusercontent.com/u/222956614?s=400&u=feb8083682d1eed1748cf0a2cc025858b3b6d39a&v=4" 
              alt="Luis Paulo Costa" 
              width={256}
              height={256}
              unoptimized
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Seção Sobre Mim */}
      <section id="sobre" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="text-blue-500" size={28} />
          <h2 className="text-3xl font-bold text-blue-500">Sobre Mim</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Janela de Terminal Estilo Zsh */}
          <div className="bg-[#0D0D0D]/90 backdrop-blur-md border border-blue-900/30 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <div className="bg-[#1A1A1A]/90 px-4 py-3 flex items-center gap-2 border-b border-zinc-800/50">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              <span className="ml-2 text-xs text-zinc-500 font-mono">lupd3v@ubuntu: ~/portfolio</span>
            </div>
            
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="flex gap-2">
                <span className="text-blue-500 font-bold">┌──(lupd3v㉿ubuntu)-[~/portfolio]</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="text-blue-500 font-bold">└─$</span>
                <span className="text-zinc-300">cat bio.txt</span>
              </div>
              
              <p className="text-zinc-400">
                Olá, chamo-me Luis Paulo. Sou estudante de Análise e Desenvolvimento de Sistemas e atuo como desenvolvedor Front-End, criando aplicações web responsivas e eficientes no Windows. Meu objetivo é evoluir continuamente na tecnologia e expandir para o desenvolvimento Full-Stack.
              </p>

              <div className="flex gap-2 mt-6">
                <span className="text-blue-500 font-bold">┌──(lupd3v㉿ubuntu)-[~/portfolio]</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-500 font-bold">└─$</span>
                <span className="w-2 h-5 bg-blue-500 animate-pulse inline-block ml-1"></span>
              </div>
            </div>
          </div>

          {/* Grid de Habilidades */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-blue-400">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span 
                  key={tech.name} 
                  className="flex items-center gap-2 px-4 py-2 bg-blue-950/20 border border-blue-900/30 text-zinc-300 rounded-lg text-sm hover:border-blue-500/50 hover:bg-blue-900/40 transition-colors cursor-default backdrop-blur-sm"
                >
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção Projetos */}
      <section id="projetos" className="scroll-mt-24">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Code2 className="text-blue-500" size={28} />
            <h2 className="text-3xl font-bold text-blue-500">Projetos Recentes</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.length === 0 ? (
            <p className="text-zinc-500 italic">Carregando repositórios do GitHub...</p>
          ) : (
            repos.map((repo) => {
              const deployUrl = linksDeDeploy[repo.name.toLowerCase()];

              return (
                <div key={repo.id} className="group flex flex-col justify-between bg-black/40 backdrop-blur-md border border-blue-900/30 rounded-xl p-6 hover:border-blue-500/50 hover:bg-blue-950/20 transition-all relative overflow-hidden">
                  
                  {deployUrl && (
                    <div className="absolute top-0 right-0 bg-blue-600/20 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-bl-lg border-b border-l border-blue-900/30">
                      DEPLOYED
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4 mt-2">
                      <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                        {repo.name}
                      </h3>
                      
                      <div className="flex items-center gap-3">
                        {deployUrl && (
                          <a href={deployUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 px-2 py-1 rounded-md border border-blue-900/30 hover:bg-blue-500/20">
                            <ExternalLink size={14} />
                            Acessar site
                          </a>
                        )}
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors" title="Ver código fonte">
                          <FaGithub size={20} />
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-zinc-400 text-sm line-clamp-3">
                      {repo.description || "Repositório sem descrição cadastrada."}
                    </p>
                  </div>
                  
                  {repo.language && (
                    <div className="mt-6 pt-4 border-t border-blue-900/30">
                      <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full">
                        {repo.language}
                      </span>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Seção Contato com Formspree Ativo */}
      <section id="contato" className="scroll-mt-24 mb-24">
        <div className="relative bg-linear-to-br from-black to-blue-950/20 border border-blue-900/30 rounded-2xl p-8 md:p-12 text-center overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <h2 className="relative z-10 text-3xl font-bold text-blue-500 mb-4">Vamos construir algo juntos?</h2>
          <p className="relative z-10 text-zinc-400 max-w-2xl mx-auto mb-8">
            Preencha o formulário abaixo para trocarmos uma ideia sobre tecnologia, projetos ou novas oportunidades.
          </p>
          
          <form 
            action="https://formspree.io/f/xdaqkgpw" 
            method="POST"
            className="relative z-10 flex flex-col gap-4 max-w-md mx-auto text-left"
          >
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-zinc-400 mb-1">Nome</label>
              <input 
                type="text" 
                id="nome"
                name="nome"
                className="w-full px-4 py-3 bg-black/50 border border-blue-900/30 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors" 
                placeholder="Seu nome" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">E-mail</label>
              <input 
                type="email" 
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-black/50 border border-blue-900/30 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors" 
                placeholder="seu@email.com" 
                required 
              />
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-zinc-400 mb-1">Mensagem</label>
              <textarea 
                id="mensagem"
                name="mensagem"
                rows={4} 
                className="w-full px-4 py-3 bg-black/50 border border-blue-900/30 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none" 
                placeholder="Como posso te ajudar?" 
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full inline-flex justify-center items-center gap-2 px-8 py-4 mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              <Send size={20} />
              Enviar Mensagem
            </button>
          </form>

        </div>
      </section>

    </div>
  );
}