"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function ProfileBackground() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }
  
  return (
    <div 
      className="fixed inset-0 z-0 overflow-hidden"
      style={{ 
        height: '100dvh' // Aplicamos dvh aquí, al contenedor principal
      }}
    >
      <div className="absolute -inset-10">
        <Image
          src="/background.png"
          alt="Background"
          fill
          sizes="100vw"// Esto es para responsividad, no establece dimensiones
          priority
          className="object-cover opacity-80"
          style={{ 
            objectPosition: 'center center',
            transform: 'scale(1.1)'
          }}
        />
      </div>
    </div>
  );
}