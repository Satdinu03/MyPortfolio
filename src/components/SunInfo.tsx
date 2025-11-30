import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../utils/useReducedMotion";
import data from "../data/site.json";

type SunInfoProps = {
  size?: number;
  tags?: string[];
  showCenter?: boolean;
};

export default function SunInfo({
  size = 280,
  tags = ["Spring Boot", "React", "MySQL", "Git", "Docker"],
  showCenter = true
}: SunInfoProps) {
  const reduced = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!wrapperRef.current || reduced) return;
    const onScroll = () => {
      const y = window.scrollY;
      wrapperRef.current!.style.transform = `translateY(${-(y * 0.02)}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  const radiusCore = 45;
  const coreCx = 100, coreCy = 100;
  const circleTextRadius = 68;
  const tagsText = tags.join(" · ");

  return (
    <div
      ref={wrapperRef}
      className="select-none pointer-events-auto cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setHover((h) => !h)}
      style={{ width: size, height: size }}
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        initial={false}
        animate={{ scale: hover ? 1.04 : 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
      >
        <defs>
          <radialGradient id="sunCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD372" />
            <stop offset="60%" stopColor="#FDB813" />
            <stop offset="100%" stopColor="#F8A602" />
          </radialGradient>
          <path id="ringPath"
            d={`M ${coreCx} ${coreCy}
               m -${circleTextRadius}, 0
               a ${circleTextRadius},${circleTextRadius} 0 1,1 ${circleTextRadius*2},0
               a ${circleTextRadius},${circleTextRadius} 0 1,1 -${circleTextRadius*2},0`}
          />
        </defs>

        {/* Rays */}
        <g className={reduced ? "" : "animate-spin"} style={{ transformOrigin: "100px 100px", animationDuration: "12s" }}>
          {[...Array(12)].map((_, i) => {
            const angle = (i * 360) / 12;
            const rad = (angle * Math.PI) / 180;
            const x1 = coreCx + Math.cos(rad) * 58;
            const y1 = coreCy + Math.sin(rad) * 58;
            const x2 = coreCx + Math.cos(rad) * 85;
            const y2 = coreCy + Math.sin(rad) * 85;
            return (
              <motion.line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#FFC857" strokeWidth={3} strokeLinecap="round"
                style={{ opacity: 0.35 }}
                animate={{ opacity: hover ? 0.55 : 0.35 }}
                transition={{ duration: 0.2 }}
              />
            );
          })}
        </g>

        {/* Sun core */}
        <circle cx={coreCx} cy={coreCy} r={radiusCore} fill="url(#sunCore)" />

        {/* Center content */}
        {showCenter && (
          <>
            <text
              x={coreCx} y={coreCy - 4}
              textAnchor="middle"
              className="font-semibold"
              style={{
                fill: "#1F2937",
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: 10
              }}
            >
              {data.name}
            </text>
            <text
              x={coreCx} y={coreCy + 10}
              textAnchor="middle"
              style={{
                fill: "#374151",
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: 8
              }}
            >
              {data.title}
            </text>
          </>
        )}

        {/* Circular text path */}
        <text
          style={{
            fill: "#3B4252",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: 7,
            letterSpacing: "0.02em"
          }}
        >
          <textPath href="#ringPath">
            {`${tagsText} · ${tagsText}`}
          </textPath>
        </text>

        {/* Info badge on hover */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <rect x={coreCx + 12} y={coreCy - 34} rx="6" ry="6" width="68" height="28"
            fill="#FFFFFF" opacity="0.9" />
          <text x={coreCx + 16} y={coreCy - 16}
            style={{ fill: "#111827", fontSize: 8, fontFamily: "Inter, sans-serif" }}>
            CGPA: 8.5 · Cognizant
          </text>
        </motion.g>
      </motion.svg>
    </div>
  );
}