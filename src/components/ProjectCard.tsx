import { motion } from 'framer-motion'
import { fadeUp, springPop } from '../utils/motion'
import { useReducedMotion } from '../utils/useReducedMotion'

interface Project {
  name: string
  summary: string
  highlights: string[]
  tags: string[]
}

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const reducedMotion = useReducedMotion()
  
  return (
    <motion.div
      variants={fadeUp}
      whileHover={reducedMotion ? {} : { y: -8, scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className="glass-card p-6 cursor-pointer group overflow-hidden"
      onClick={onClick}
    >
      <motion.div 
        className="h-40 bg-gradient-to-br from-violet/20 to-mint/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden"
        whileHover={reducedMotion ? {} : { backgroundPosition: "10px 10px" }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 bg-violet/30 rounded-lg flex items-center justify-center relative z-10">
          <svg className="w-8 h-8 text-violet" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
          </svg>
        </div>
        {!reducedMotion && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        )}
      </motion.div>
      
      <h3 className="text-xl font-semibold mb-3 group-hover:text-violet transition-colors">
        {project.name}
      </h3>
      
      <p className="text-gray dark:text-gray mb-4 line-clamp-3">
        {project.summary}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag, index) => (
          <motion.span
            key={tag}
            variants={springPop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={reducedMotion ? {} : { scale: 1.05, boxShadow: "0 0 20px rgba(124, 77, 255, 0.3)" }}
            className="px-2 py-1 text-xs bg-violet/10 text-violet rounded-full cursor-pointer"
          >
            {tag}
          </motion.span>
        ))}
        {project.tags.length > 3 && (
          <span className="px-2 py-1 text-xs bg-gray/10 text-gray rounded-full">
            +{project.tags.length - 3} more
          </span>
        )}
      </div>
    </motion.div>
  )
}