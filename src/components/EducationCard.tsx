import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'
import data from '../data/site.json'

export default function EducationCard() {
  return (
    <section className="section-padding bg-offwhite dark:bg-navy">
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
            Education
          </motion.h2>
          
          <div className="max-w-2xl mx-auto">
            {data.education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 bg-violet/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-violet" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-gray dark:text-gray mb-2">{edu.years}</p>
                <div className="inline-flex items-center px-4 py-2 bg-mint/10 text-mint rounded-full">
                  <span className="font-semibold">CGPA: {edu.cgpa}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}