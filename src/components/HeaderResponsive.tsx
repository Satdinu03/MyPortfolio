import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export default function HeaderResponsive() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg backdrop-blur-md bg-white/5 border-b border-white/10" : "backdrop-blur-md bg-white/5"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="font-display font-bold text-2xl text-white"
          whileHover={{ rotate: 2 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          Dinesh.
        </motion.a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a 
                className="text-white/90 hover:text-mint transition-colors duration-300 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint rounded" 
                href={l.href}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-white/5 backdrop-blur-md"
          >
            <ul className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={handleNavClick}
                    className="block py-3 text-white/90 hover:text-mint transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint rounded"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}