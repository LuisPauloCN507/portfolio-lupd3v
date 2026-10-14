import { ArrowRight, CheckCircle2, Code2, ExternalLink, Layers, Mail, Sparkles, User } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiCss,
  SiGit,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

import { CopyEmailButton } from "@/components/CopyEmailButton";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ScrollReveal } from "@/components/ScrollReveal";

// 1. METADADOS PARA SEO E COMPARTILHAMENTO
export const metadata: Metadata = {
  title: "Luis Paulo | Desenvolvedor Full Stack",
  description: "Portfólio de Luis Paulo, Desenvolvedor Full Stack focado em React, Next.js, TypeScript e evolução para arquiteturas Back-End com Python e Go.",
  keywords: ["Desenvolvedor", "Full Stack", "Front-end", "React", "Next.js", "TypeScript", "Python", "Go"],
};

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
}

// 2. DADOS DOS PROJETOS EM DESTAQUE
const featuredProjects = [
  {
    title: "RadioArch",
    badge: "PROJETO PRINCIPAL",
    description: "Uma experiência imersiva de rádio digital com design retro-futurista.",
    problem: "Facilitar o acesso e a descoberta de estações de rádio globais através de uma interface interativa e nostálgica no navegador.",
    features: [
      "Integração de API RESTful (Global Scanner API) para consumo de dados de sintonia mundial.",
      "Implementação de visualizador de áudio dinâmico em tempo real utilizando Web Audio API.",
      "Gerenciamento de estados complexos (player, sintonia, controle de volume) com React hooks."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Integração de APIs"],
    liveUrl: "https://radioarch.vercel.app/",
    repoUrl: "https://github.com/LuisPauloCN507/radioarch",
    visualText: "RADIOARCH"
  }
];

// 3. CATEGORIZAÇÃO DA TECH STACK
const techCategories = [
  {
    title: "Front-end & UI",
    skills: [
      { name: 'React', icon: <SiReact className="text-[#61DAFB]" size={18} /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-white" size={18} /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" size={18} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" size={18} /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" size={18} /> },
    ]
  },
  {
    title: "Back-end (Em evolução)",
    skills: [
      { name: 'Python', icon: <SiPython className="text-[#3776AB]" size={18} /> },
      { name: 'Go', icon: <SiGo className="text-[#00ADD8]" size={18} /> },
    ]
  },
  {
    title: "Ferramentas & Base",
    skills: [
      { name: 'Git', icon: <SiGit className="text-[#F05032]" size={18} /> },
      { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" size={18} /> },
      { name: 'CSS3', icon: <SiCss className="text-[#1572B6]" size={18} /> },
    ]
  }
];

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch('https://api.github.com/users/LuisPauloCN507/repos?sort=updated&per_page=6', {
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

  const linksDeDeploy: Record<string, string> = {
    'radio-arch': 'https://radioarch.vercel.app/',
    'radioarch': 'https://radioarch.vercel.app/',
  };

  return (
    <main id="inicio" className="relative min-h-screen text-white selection:bg-purple-500/30 selection:text-purple-200 font-sans overflow-hidden">
      
      <ParticleBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 flex flex-col gap-32">
        
        {/* HERO SECTION */}
        <section aria-label="Introdução" className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-12">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm mb-8 backdrop-blur-md">
                <Layers className="text-purple-400" size={14} />
                <span>Full Stack Developer</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                Luis Paulo <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500">Costa</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
                Desenvolvedor Full Stack. Especializado em construir aplicações Front-end de alta performance e em evolução contínua na construção de APIs e arquiteturas Back-end.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
                <a href="#projetos" className="flex items-center gap-2 px-6 py-3 bg-white text-[#020617] rounded-xl font-bold transition-transform duration-300 hover:scale-105 hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  Ver Projetos <ArrowRight size={18} aria-hidden="true" />
                </a>
                
                <a 
                  href="/Curriculo_Dev.pdf" 
                  download="Luis_Paulo_Curriculo.pdf"
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-transform duration-300 hover:scale-105 backdrop-blur-md"
                >
                  Baixar CV
                </a>

                <a href="https://github.com/LuisPauloCN507" aria-label="Acessar meu perfil no GitHub" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-transform duration-300 hover:scale-105 backdrop-blur-md">
                  <FaGithub size={20} aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/luis-paulo-costa-neto-42521a352" aria-label="Acessar meu perfil no LinkedIn" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-transform duration-300 hover:scale-105 backdrop-blur-md">
                  <FaLinkedin size={20} aria-hidden="true" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-700"></div>
              <div className="relative w-56 h-56 md:w-72 md:h-72 bg-[#0f172a] rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
                <Image alt="Fotografia de Luis Paulo Costa Neto" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" height={300} src="https://avatars.githubusercontent.com/u/222956614?v=4" unoptimized width={300} />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* SOBRE MIM */}
        <section id="sobre" aria-label="Sobre Mim" className="scroll-mt-32">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <User className="text-purple-400" size={28} aria-hidden="true" />
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Sobre Mim</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <ScrollReveal className="lg:col-span-3" delay={100}>
              <div className="bg-white/2 border border-white/10 p-8 rounded-3xl backdrop-blur-sm shadow-2xl hover:border-white/20 transition-colors h-full">
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  Olá, chamo-me Luis Paulo. Sou estudante de Análise e Desenvolvimento de Sistemas e atuo como Desenvolvedor Full Stack, com foco na criação de aplicações web completas, escaláveis e de alta performance, unindo interfaces modernas, back-end robusto e boas práticas de desenvolvimento.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  Estou sempre buscando evoluir através da prática e de novas experiências. Gosto de aprender, explorar diferentes formas de resolver problemas e encontrar maneiras de tornar meu trabalho mais produtivo. Também valorizo o trabalho em equipe, a troca de conhecimentos e a oportunidade de crescer junto com outras pessoas.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-2" delay={200}>
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-semibold text-zinc-100 px-2 flex items-center gap-2">
                  <Code2 className="text-blue-400" size={20} aria-hidden="true" /> Tech Stack
                </h3>
                <div className="flex flex-col gap-5">
                  {techCategories.map((category) => (
                    <div key={category.title}>
                      <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 px-2">{category.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((tech) => (
                          <span 
                            key={tech.name} 
                            className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 text-zinc-300 rounded-lg text-sm hover:bg-white/10 hover:border-blue-500/50 transition-all cursor-default backdrop-blur-md shadow-sm"
                          >
                            {tech.icon}
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* PROJETOS ONLINE EM DESTAQUE */}
        <section id="projetos" aria-label="Projetos em Destaque" className="scroll-mt-32">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <Sparkles className="text-fuchsia-400" size={28} aria-hidden="true" />
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Projetos Online</h2>
            </div>
          </ScrollReveal>
          
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={100 + (index * 100)}>
              <article className="mb-12 bg-linear-to-br from-white/5 to-white/1 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-500 group">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold mb-6 w-fit">
                      {project.badge}
                    </div>
                    <h3 className="text-3xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                    
                    <div className="mb-6 space-y-4">
                      <p className="text-zinc-300 leading-relaxed text-sm">
                        <strong className="text-white block mb-1">Visão Geral:</strong>
                        {project.description} {project.problem}
                      </p>
                      
                      <div>
                        <strong className="text-white block mb-2 text-sm">Principais Funcionalidades:</strong>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                              <CheckCircle2 className="text-blue-400 shrink-0 mt-0.5" size={16} />
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-zinc-300">{t}</span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {project.liveUrl && (
                        <a href={project.liveUrl} aria-label={`Acessar demonstração online do projeto ${project.title}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white text-[#020617] rounded-xl font-bold transition-transform duration-300 hover:scale-105 hover:bg-zinc-200">
                          <ExternalLink size={18} aria-hidden="true" /> Acessar Online
                        </a>
                      )}
                      {project.repoUrl && (
                        <a href={project.repoUrl} aria-label={`Ver código fonte do projeto ${project.title}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl font-medium transition-transform duration-300 hover:scale-105 hover:bg-white/10">
                          <FaGithub size={18} aria-hidden="true" /> Código
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* AQUI ESTÁ A CORREÇÃO DO MIN-H-75 (linha ~278) */}
                  <div className="bg-[#0b1120] relative min-h-75 border-l border-white/5 flex items-center justify-center p-8 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <div className="w-full h-full bg-[#020617] rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                       <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] bg-size-[20px_20px] opacity-20 pointer-events-none"></div>
                       <h4 className="text-3xl md:text-4xl font-black tracking-[0.3em] uppercase italic font-mono opacity-80 text-white z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] select-none">
                         {project.visualText}
                       </h4>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}

          {/* LISTA DE REPOSITÓRIOS DO GITHUB */}
          <ScrollReveal delay={200}>
            <h3 className="text-xl font-semibold text-zinc-100 mb-6">Repositórios & Laboratórios</h3>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.length === 0 ? (
              <p className="text-zinc-500 italic">A carregar repositórios do GitHub...</p>
            ) : (
              repos.map((repo, index) => {
                if (repo.name.toLowerCase().includes('radioarch') || repo.name.toLowerCase().includes('radio-arch')) return null;

                const deployUrl = linksDeDeploy[repo.name.toLowerCase()];

                return (
                  <ScrollReveal key={repo.id} delay={index * 100}>
                    <article className="group flex flex-col justify-between bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full">
                      <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-bold text-zinc-100 group-hover:text-purple-400 transition-colors">
                            {repo.name}
                          </h4>
                          <div className="flex items-center gap-3 relative z-10">
                            {deployUrl && (
                              <a href={deployUrl} aria-label={`Acessar deploy do repositório ${repo.name}`} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-colors" title="Acessar">
                                <ExternalLink size={20} aria-hidden="true" />
                              </a>
                            )}
                            <a href={repo.html_url} aria-label={`Ver código do repositório ${repo.name} no GitHub`} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors" title="Ver código">
                              <FaGithub size={20} aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <p className="text-zinc-400 text-sm line-clamp-2">
                          {repo.description || "Repositório laboratorial para estudos e testes de implementação."}
                        </p>
                      </div>
                      {repo.language && (
                        <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                            {repo.language}
                          </span>
                        </div>
                      )}
                    </article>
                  </ScrollReveal>
                );
              })
            )}
          </div>
        </section>

        {/* SECÇÃO: CONTATO */}
        <section id="contato" aria-label="Contato" className="scroll-mt-32 pt-12">
          <ScrollReveal>
            <div className="relative bg-white/2 border border-white/10 rounded-3xl p-8 md:p-12 text-center overflow-hidden flex flex-col items-center justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-purple-500/10 blur-[100px] pointer-events-none"></div>
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-6">
                <Mail size={16} aria-hidden="true" />
                <span>Disponível para oportunidades</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Vamos construir <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">juntos?</span>
              </h2>
              
              <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Estou aberto a conversar sobre novos projetos ou oportunidades de trabalho. Seja para uma vaga como Desenvolvedor ou para trocar ideias sobre arquitetura de software, envie uma mensagem!
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
                <CopyEmailButton />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* FOOTER */}
        <footer className="w-full border-t border-white/10 mt-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Luis Paulo. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Desenvolvido por Luis Paulo
          </p>
        </footer>

      </div>
    </main>
  );
}