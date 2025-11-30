import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from '../utils/motion'
import { useReducedMotion } from '../utils/useReducedMotion'
import data from '../data/site.json'

export default function ExperienceTimeline() {
  const reducedMotion = useReducedMotion()
  
  return (
    <section id="experience" className="section-padding bg-gray/5 dark:bg-navy/50">
      <div className="container px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={fadeUp}
            className="text-3xl md:text-4xl font-display font-semibold text-center mb-16"
          >
            Experience
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            {data.experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Animated Timeline line */}
                <motion.div 
                  className="absolute left-0 top-0 w-px bg-violet/30"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
                
                {/* Timeline dot with pulse */}
                <motion.div 
                  className="absolute left-0 top-2 w-3 h-3 bg-violet rounded-full transform -translate-x-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 400 }}
                >
                  {!reducedMotion && (
                    <motion.div
                      className="absolute inset-0 bg-violet rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
                
                <motion.div 
                  className="glass-card p-6"
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  whileHover={reducedMotion ? {} : { 
                    y: -4, 
                    boxShadow: "0 20px 25px -5px rgba(124, 77, 255, 0.1), 0 10px 10px -5px rgba(124, 77, 255, 0.04)" 
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-violet font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray dark:text-gray mt-2 md:mt-0 px-3 py-1 bg-violet/10 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 bg-mint rounded-full mt-2 flex-shrink-0"
                          whileHover={reducedMotion ? {} : { scale: 1.5 }}
                        />
                        <span className="text-gray dark:text-gray">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}