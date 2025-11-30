import { useEffect, useRef } from "react";

export default function SunIcon({
  reducedMotion,
  size = 320
}: { reducedMotion: boolean; size?: number }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current || reducedMotion) return;
    
    const onScroll = () => {
      const y = window.scrollY;
      wrapperRef.current!.style.transform = `translateY(${-(y * 0.02)}px)`;
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  return (
    <div ref={wrapperRef} style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <radialGradient id="sunCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD372" />
            <stop offset="60%" stopColor="#FDB813" />
            <stop offset="100%" stopColor="#F8A602" />
          </radialGradient>
        </defs>
        
        <g className={reducedMotion ? "" : "animate-spin"} style={{ transformOrigin: "100px 100px", animationDuration: "12s" }}>
          {/* Rays */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 360) / 12;
            const rad = (angle * Math.PI) / 180;
            const x1 = 100 + Math.cos(rad) * 58;
            const y1 = 100 + Math.sin(rad) * 58;
            const x2 = 100 + Math.cos(rad) * 85;
            const y2 = 100 + Math.sin(rad) * 85;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#FFC857"
                strokeWidth={3}
                strokeLinecap="round"
                opacity={0.35}
              />
            );
          })}
        </g>
        
        {/* Sun core */}
        <circle cx="100" cy="100" r="45" fill="url(#sunCore)" />
      </svg>
    </div>
  );
}