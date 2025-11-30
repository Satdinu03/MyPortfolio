const projects = [
  {name: "Digital Bookstore", tags: ["Spring Boot", "Eureka", "Gateway", "React"]},
  {name: "Admin Portal", tags: ["React", "Tailwind", "Routing"]},
  {name: "API Suite", tags: ["OpenFeign", "JUnit", "Postman"]},
  {name: "Review System", tags: ["MySQL", "JPA", "CRUD"]}
];

export default function ProjectsGrid() {
  return (
    <section id="portfolio" className="container mx-auto px-4 sm:px-6 py-12">
      <h3 className="text-3xl font-serif">Latest <span className="text-neon">Projects</span></h3>
      <div className="mt-2 w-16 h-0.5 bg-neon"></div>
      
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map(project => (
          <div key={project.name} className="card p-4 hover:shadow-neon transition group cursor-pointer">
            <div className="h-32 rounded-xl bg-charcoal3 mb-4 flex items-center justify-center group-hover:bg-charcoal3/80 transition">
              <div className="w-8 h-8 border-2 border-neon/30 rounded group-hover:border-neon/60 transition"></div>
            </div>
            <h4 className="text-lg font-semibold group-hover:text-neon transition">{project.name}</h4>
            <p className="mt-1 text-mute text-sm">{project.tags.join(", ")}</p>
            <div className="mt-3 flex items-center text-neon text-sm">
              <span>View Project</span>
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}