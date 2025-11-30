const services = [
  {title: "Web Development", desc: "Responsive SPA with React + Tailwind"},
  {title: "Backend APIs", desc: "Spring Boot, REST, JPA/MySQL"},
  {title: "Microservices", desc: "Eureka, Gateway, OpenFeign"},
  {title: "Testing", desc: "JUnit, Mockito, Postman"}
];

export default function ServicesGrid() {
  return (
    <section id="services" className="container mx-auto px-4 sm:px-6 py-12">
      <h3 className="text-3xl font-serif">Our <span className="text-neon">Services</span></h3>
      <div className="mt-2 w-16 h-0.5 bg-neon"></div>
      
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(service => (
          <div key={service.title} className="card p-6 hover:shadow-neon transition group">
            <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center mb-4 group-hover:bg-neon/20 transition">
              <div className="w-6 h-6 bg-neon/50 rounded"></div>
            </div>
            <h4 className="text-xl font-semibold">{service.title}</h4>
            <p className="mt-2 text-mute">{service.desc}</p>
            <div className="mt-4">
              <button className="btn-outline text-sm">Explore</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}