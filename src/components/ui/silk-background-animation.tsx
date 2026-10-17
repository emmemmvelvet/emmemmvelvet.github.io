'use client';

import React, { useEffect, useRef, useState } from 'react';

export const Component = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const speed = 0.02;
    const scale = 2;
    const noiseIntensity = 0.8;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simple noise function
    const noise = (x: number, y: number) => {
      const G = 2.71828;
      const rx = G * Math.sin(G * x);
      const ry = G * Math.sin(G * y);
      return (rx * ry * (1 + x)) % 1;
    };

    const animate = () => {
      const { width, height } = canvas;
      if (width === 0 || height === 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#111311');
      gradient.addColorStop(0.5, '#202421');
      gradient.addColorStop(1, '#151715');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Create silk-like pattern with sub-sampling for silky performance
      const step = 3;
      const wStep = Math.floor(width / step);
      const hStep = Math.floor(height / step);
      const imageData = ctx.createImageData(wStep, hStep);
      const data = imageData.data;

      for (let x = 0; x < wStep; x++) {
        for (let y = 0; y < hStep; y++) {
          const u = (x / wStep) * scale;
          const v = (y / hStep) * scale;
          
          const tOffset = speed * time;
          const tex_x = u;
          const tex_y = v + 0.03 * Math.sin(8.0 * tex_x - tOffset);

          const pattern = 0.6 + 0.4 * Math.sin(
            5.0 * (tex_x + tex_y + 
              Math.cos(3.0 * tex_x + 5.0 * tex_y) + 
              0.02 * tOffset) +
            Math.sin(20.0 * (tex_x + tex_y - 0.1 * tOffset))
          );

          const rnd = noise(x, y);
          const intensity = Math.max(0, pattern - (rnd / 15.0) * noiseIntensity);
          
          // Refined warm champagne-slate velvet sheen color
          const r = Math.floor(115 * intensity);
          const g = Math.floor(108 * intensity);
          const b = Math.floor(100 * intensity);
          const a = 230;

          const index = (y * wStep + x) * 4;
          if (index < data.length) {
            data[index] = r;
            data[index + 1] = g;
            data[index + 2] = b;
            data[index + 3] = a;
          }
        }
      }

      // Draw the computed texture scaled up smoothly
      const offscreen = document.createElement('canvas');
      offscreen.width = wStep;
      offscreen.height = hStep;
      const offCtx = offscreen.getContext('2d');
      if (offCtx) {
        offCtx.putImageData(imageData, 0, 0);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'medium';
        ctx.drawImage(offscreen, 0, 0, width, height);
      }

      // Add subtle overlay for depth
      const overlayGradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) / 1.5
      );
      overlayGradient.addColorStop(0, 'rgba(18, 20, 18, 0.2)');
      overlayGradient.addColorStop(1, 'rgba(10, 12, 10, 0.7)');
      
      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, width, height);

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0e100e]">
      {/* Animated Silk Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="text-center px-6 max-w-4xl">
          <div className={`transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] text-[#C39953] font-medium mb-4">
              Est. 1995 · Panipat, India
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[-0.04em] leading-none text-[#FBF9F5] font-serif">
              velvet & weave
            </h1>
            <p className="mt-6 text-sm sm:text-base md:text-lg font-light tracking-[0.25em] uppercase text-[#D4CDBC]/80">
              Chenille <span className="mx-2 text-[#C39953]">•</span> Holland <span className="mx-2 text-[#C39953]">•</span> Mosha <span className="mx-2 text-[#C39953]">•</span> Jacquard
            </p>
          </div>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 z-30 text-[11px] font-mono tracking-widest uppercase text-[#D4CDBC]/60">
        EMM EMM VELVET
      </div>
      <div className="absolute top-8 right-8 z-30 text-[11px] font-mono tracking-widest uppercase text-[#C39953]/80">
        SANOLI ROAD · PANIPAT
      </div>
    </div>
  );
};

export default Component;
