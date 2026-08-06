'use client';

import { useEffect, useRef } from 'react';

export function DataBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Define o tamanho exato da tela
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Caracteres da animação
    const characters = '0101010101LUPD3V{}[]<>/\\*&^%$#@!ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      // Cria o fundo preto de forma nativa no canvas para evitar telas brancas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Cor dos dados em Azul
      ctx.fillStyle = '#3b82f6'; 
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none"
    />
  );
}