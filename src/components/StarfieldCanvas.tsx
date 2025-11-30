import { useEffect, useRef } from "react";

type Star = { 
  x: number; 
  y: number; 
  r: number; 
  baseAlpha: number; 
  phase: number; 
  layer: number 
};

export default function StarfieldCanvas({ reducedMotion }: { reducedMotion: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const count = reducedMotion ? 60 : (window.innerWidth < 768 ? 100 : 140);
      starsRef.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.6,
        baseAlpha: Math.random() * 0.6 + 0.3,
        phase: Math.random() * Math.PI * 2,
        layer: Math.random() < 0.3 ? 2 : 1,
      }));
    };

    let scrollY = window.scrollY;
    const onScroll = () => (scrollY = window.scrollY);

    const render = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const s of starsRef.current) {
        const twinkle = reducedMotion 
          ? s.baseAlpha 
          : s.baseAlpha * (0.7 + 0.3 * Math.sin(t / 800 + s.phase));
        
        const driftX = reducedMotion ? 0 : (scrollY * (s.layer === 2 ? 0.008 : 0.004));
        const driftY = reducedMotion ? 0 : (scrollY * (s.layer === 2 ? 0.004 : 0.002));
        
        ctx.globalAlpha = twinkle;
        ctx.fillStyle = s.r > 1.5 ? "#BBD0FF" : "#ffffff";
        ctx.beginPath();
        ctx.arc(s.x - driftX, s.y - driftY, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      
      rafRef.current = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ opacity: 0.9 }}
      aria-hidden
    />
  );
}