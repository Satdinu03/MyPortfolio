import { motion } from "framer-motion";
import { fadeUp, staggerContainer, slideX } from "../utils/motion";
import { useReducedMotion } from "../utils/useReducedMotion";
import data from "../data/site.json";

export default function SkillsCloud() {
  const groups = Object.entries(data.skills);
  const reducedMotion = useReducedMotion();

  return (
    <section id="skills" className="section-padding bg-gray/5 dark:bg-navy/50">
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
            Skills & Technologies
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {groups.map(([group, items], groupIndex) => (
              <motion.div key={group} variants={fadeUp}>
                <div className="relative mb-4">
                  <motion.div
                    className="absolute left-0 top-0 h-full w-1 bg-violet rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.1, duration: 0.6 }}
                  />
                  <h3 className="text-lg font-semibold pl-4 text-violet capitalize">
                    {group}
                  </h3>
                </div>
                <div className="space-y-3">
                  {(items as string[]).map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: (groupIndex * 0.1) + (i * 0.05), 
                        type: "spring", 
                        stiffness: 280, 
                        damping: 20 
                      }}
                      whileHover={reducedMotion ? {} : { 
                        x: 8, 
                        scale: 1.02,
                        boxShadow: "0 4px 12px rgba(46, 230, 166, 0.15)"
                      }}
                      className="flex items-center space-x-3 p-3 glass-card rounded-lg cursor-default relative overflow-hidden group"
                    >
                      <motion.div 
                        className="w-2 h-2 bg-mint rounded-full"
                        whileHover={reducedMotion ? {} : { scale: 1.5 }}
                      />
                      <span className="font-medium relative z-10">{skill}</span>
                      
                      {/* Ripple effect */}
                      {!reducedMotion && (
                        <motion.div
                          className="absolute inset-0 bg-mint/5 rounded-lg"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}