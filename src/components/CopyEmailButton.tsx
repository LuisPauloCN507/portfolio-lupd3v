"use client";

import { useState } from "react";
import { SiGmail } from "react-icons/si";
import { Check } from "lucide-react";

export function CopyEmailButton() {
  const [copiado, setCopiado] = useState(false);
  
  // SUBSTITUI PELO TEU E-MAIL VERDADEIRO AQUI:
  const email = "luispaulocn.d3v507@gmail.com"; 

  const copiarEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiado(true);
    // Volta ao texto original ao fim de 2 segundos
    setTimeout(() => setCopiado(false), 2000); 
  };

  return (
    <button 
      onClick={copiarEmail}
      className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-all hover:scale-105 backdrop-blur-md shadow-lg"
      title="Copiar endereço de e-mail"
    >
      {copiado ? (
        <Check size={20} className="text-green-400" />
      ) : (
        <SiGmail size={20} className="text-[#EA4335]" />
      )}
      <span className={copiado ? "text-green-400" : "text-zinc-200"}>
        {copiado ? "E-mail copiado!" : "Gmail"}
      </span>
    </button>
  );
}