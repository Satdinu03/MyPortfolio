import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight } from "../utils/motion";
import { useMagnetic } from "../utils/useMagnetic";
import { useReducedMotion } from "../utils/useReducedMotion";

function MagneticButton({ href, children }: { href: string, children: React.ReactNode }) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(6);
  const reducedMotion = useReducedMotion();
  
  if (reducedMotion) {
    return <a href={href} className="btn-secondary">{children}</a>
  }
  
  return (
    <a
      ref={ref as any}
      href={href}
      className="btn-secondary will-change-transform transition-all duration-300"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  )
}

export default function AboutPreview() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Smaller Hex Image */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-full bg-mint/15 blur-lg" />
                
                {/* Hexagon frame */}
                <div 
                  className="relative w-full h-full bg-gradient-to-br from-mint/20 to-violet/20 p-1"
                  style={{
                    clipPath: "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)"
                  }}
                >
                  <div 
                    className="w-full h-full bg-navy overflow-hidden"
                    style={{
                      clipPath: "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)"
                    }}
                  >
                    <img
                      src="https://copilot.microsoft.com/images/uploaded/Media-removebg-preview.png"
                      alt="Dinesh V G"
                      className="w-full h-full object-cover object-center scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right: About Content */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideInRight}
            className="text-center lg:text-left"
          >
            <motion.h2 
              variants={fadeUp}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-6"
            >
              <span className="text-mint">About</span> Me
            </motion.h2>
            
            <motion.p 
              variants={fadeUp}
              className="text-lg text-white/90 leading-relaxed mb-8 max-w-lg"
            >
              Passionate about creating efficient, scalable solutions with modern technologies. 
              I specialize in full-stack development with a focus on clean architecture and user experience.
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <MagneticButton href="#about">
                Read More
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}