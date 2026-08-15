import { Code2, ExternalLink, Terminal } from "lucide-react";
import Image from "next/image";
import { FaDatabase, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiGit,
  SiGo,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

// Importamos o nosso novo botão interativo!
import { CopyEmailButton } from "@/components/CopyEmailButton";

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

  const techStack = [
    { name: 'JavaScript', icon: <SiJavascript size={18} className="text-[#F7DF1E]" /> },
    { name: 'TypeScript', icon: <SiTypescript size={18} className="text-[#3178C6]" /> },
    { name: 'React', icon: <SiReact size={18} className="text-[#61DAFB]" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={18} className="text-white" /> },
    { name: 'Node.js', icon: <SiNodedotjs size={18} className="text-[#43a047]" /> },
    { name: 'Python', icon: <SiPython size={18} className="text-[#ffeb3b]" /> },
    { name: 'C', icon: <SiC size={18} className="text-white" /> },
    { name: 'C++', icon: <SiCplusplus size={18} className="text-[#61b2e4]" /> },
    { name: 'Go', icon: <SiGo size={18} className="text-[#00ADD8]" /> },
    { name: 'SQL', icon: <FaDatabase size={18} className="text-zinc-200" /> },
    { name: 'Git', icon: <SiGit size={18} className="text-[#F05032]" /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={18} className="text-[#06B6D4]" /> }
  ];

  const linksDeDeploy: Record<string, string> = {
    'radio-arch': 'https://radio-arch-beige.vercel.app/',
    'radioarch': 'https://radio-arch-beige.vercel.app/',
  };

  return (
    <main id="inicio" className="relative min-h-screen bg-[#020617] text-white selection:bg-indigo-500 selection:text-white font-sans">
      
      {/* BACKGROUND ANIMADO */}
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 rounded-full bg-indigo-600/20 blur-[120px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 rounded-full bg-cyan-600/20 blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-200 h-100 rounded-full bg-blue-900/10 blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 flex flex-col gap-32">
        
        {/* Seção Início (Hero) */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-12 md:mt-24">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm mb-6 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              Disponível para novos projetos
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
              Luis <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">Paulo Costa</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed font-medium">
              Desenvolvedor Front-End especializado em transformar conceitos em interfaces limpas, intuitivas e de alta performance.
            </p>
            
            {/* Links e E-mail */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projetos" className="flex items-center gap-2 px-6 py-3 bg-white text-[#020617] rounded-xl font-bold transition-all hover:scale-105 hover:bg-zinc-200 shadow-xl">
                <Code2 size={20} />
                Ver Projetos
              </a>
              <a href="https://github.com/LuisPauloCN507" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-all hover:scale-105 backdrop-blur-md shadow-lg">
                <FaGithub size={20} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/luis-paulo-costa-neto-42521a352" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-all hover:scale-105 backdrop-blur-md shadow-lg">
                <FaLinkedin size={20} />
                LinkedIn
              </a>
              
              {/* O nosso novo botão de E-mail entra aqui */}
              <CopyEmailButton />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-cyan-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-[#0f172a] rounded-full border-2 border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
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

        {/* Seção Sobre Mim - TERMINAL */}
        <section id="sobre" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="text-cyan-400" size={28} />
            <h2 className="text-3xl font-bold text-white drop-shadow-md">Sobre Mim</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            <div className="bg-[#0D0D0D]/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl relative z-10">
              <div className="bg-[#1A1A1A]/90 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                <span className="ml-2 text-xs text-zinc-500 font-mono">lupd3v@ubuntu: ~/portfolio</span>
              </div>
              
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="flex gap-2">
                  <span className="text-cyan-400 font-bold">┌──(lupd3v㉿ubuntu)-[~/portfolio]</span>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="text-cyan-400 font-bold">└─$</span>
                  <span className="text-zinc-300">cat bio.txt</span>
                </div>
                
                <p className="text-zinc-400">
                  Olá, chamo-me Luis Paulo. Sou estudante de Análise e Desenvolvimento de Sistemas e atuo como desenvolvedor Front-End, criando aplicações web responsivas e eficientes no Windows. Meu objetivo é evoluir continuamente na tecnologia e expandir para o desenvolvimento Full-Stack.
                </p>

                <div className="flex gap-2 mt-6">
                  <span className="text-cyan-400 font-bold">┌──(lupd3v㉿ubuntu)-[~/portfolio]</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-cyan-400 font-bold">└─$</span>
                  <span className="w-2 h-5 bg-cyan-400 animate-pulse inline-block ml-1"></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-zinc-200 drop-shadow-sm">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span 
                    key={tech.name} 
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-zinc-300 rounded-xl text-sm hover:bg-white/10 hover:border-cyan-500/30 hover:scale-105 transition-all cursor-default backdrop-blur-md shadow-md font-medium"
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
        <section id="projetos" className="scroll-mt-32">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Code2 className="text-cyan-400" size={28} />
              <h2 className="text-3xl font-bold text-white drop-shadow-md">Projetos Recentes</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.length === 0 ? (
              <p className="text-zinc-500 italic">Carregando repositórios do GitHub...</p>
            ) : (
              repos.map((repo) => {
                const deployUrl = linksDeDeploy[repo.name.toLowerCase()];

                return (
                  <div key={repo.id} className="group flex flex-col justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-indigo-500/30 transition-all relative overflow-hidden shadow-xl">
                    
                    {deployUrl && (
                      <div className="absolute top-0 right-0 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold px-4 py-1.5 rounded-bl-xl backdrop-blur-md border-b border-l border-white/10">
                        ONLINE
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-4 mt-2">
                        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors">
                          {repo.name}
                        </h3>
                        
                        <div className="flex items-center gap-3 relative z-10">
                          {deployUrl && (
                            <a href={deployUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors shadow-sm">
                              <ExternalLink size={14} />
                              Acessar
                            </a>
                          )}
                          <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors p-1" title="Ver código fonte">
                            <FaGithub size={22} />
                          </a>
                        </div>
                      </div>
                      
                      <p className="text-zinc-400 text-sm line-clamp-3">
                        {repo.description || "Repositório sem descrição cadastrada."}
                      </p>
                    </div>
                    
                    {repo.language && (
                      <div className="mt-6 pt-4 border-t border-white/5">
                        <span className="inline-block px-3 py-1 bg-white/5 text-zinc-300 text-xs font-semibold rounded-full border border-white/5">
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

      </div>
    </main>
  );
}