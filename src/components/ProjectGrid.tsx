import { motion } from 'framer-motion'
import { useState } from 'react'
import { fadeUp, staggerContainer } from '../utils/motion'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import MarqueeDivider from './MarqueeDivider'
import data from '../data/site.json'

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<typeof data.projects[0] | null>(null)
  
  const allTags = data.projects.flatMap(p => p.tags)
  const uniqueTags = [...new Set(allTags)]

  return (
    <section id="projects" className="section-padding bg-offwhite dark:bg-navy">
      <div className="container px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={fadeUp}
            className="text-3xl md:text-4xl font-display font-semibold text-center mb-8"
          >
            Featured Projects
          </motion.h2>
          
          <MarqueeDivider items={uniqueTags} className="mb-16" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}