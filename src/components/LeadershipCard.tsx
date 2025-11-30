import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'
import data from '../data/site.json'

export default function LeadershipCard() {
  return (
    <section className="section-padding bg-gray/5 dark:bg-navy/50">
      <div className="container px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={fadeUp}
            className="text-3xl md:text-4xl font-display font-semibold text-center mb-16"
          >
            Leadership
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            {data.leadership.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="glass-card p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mint/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-mint" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg leading-relaxed">{item}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}