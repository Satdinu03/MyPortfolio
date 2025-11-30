export default function Header() {
  const links = ["Home", "About", "Services", "Portfolio", "Contact"];
  
  return (
    <header className="sticky top-0 z-50 bg-charcoal2/80 backdrop-blur border-b border-white/5">
      <nav className="container mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <span className="font-semibold text-neon">Portfolio.</span>
        <ul className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-ink/80 hover:text-neon transition">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-primary">
          Contact
        </a>
      </nav>
    </header>
  );
}