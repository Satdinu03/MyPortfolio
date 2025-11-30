import StarfieldCanvas from "./StarfieldCanvas";
import { useReducedMotion } from "../utils/useReducedMotion";

export default function CelestialBackground() {
  const reduced = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1424] to-[#0B1020]" />
      
      {/* Starfield */}
      <StarfieldCanvas reducedMotion={reduced} />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%228%22 height=%228%22><filter id=%22n%22><feTurbulence baseFrequency=%220.7%22 numOctaves=%223%22/></filter><rect width=%228%22 height=%228%22 filter=%22url(%23n)%22/></svg>')",
        }}
      />
    </div>
  );
}