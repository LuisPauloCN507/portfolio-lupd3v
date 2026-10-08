"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Verifica se é um dispositivo sem rato (touchscreen)
    if (window.matchMedia("(pointer: coarse)").matches) {
      // Escondemos a div diretamente via DOM para evitar o erro de re-renderização do React
      if (cursorRef.current) {
        cursorRef.current.style.display = "none";
      }
      return; // Pára a execução aqui, não adicionando eventos pesados de rato no mobile
    }

    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest("a") || target.closest("button");
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-9999 rounded-full bg-white mix-blend-difference transition-[width,height] duration-300 ease-out flex items-center justify-center ${
        isHovering ? "w-20 h-20" : "w-5 h-5"
      }`}
    />
  );
}