import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

interface HeaderLightProps {
  darkMode: boolean
  setDarkMode: (dark: boolean) => void
}

export default function HeaderLight({ darkMode, setDarkMode }: HeaderLightProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      } bg-white/70 backdrop-blur-xl border-b border-slate-200/60 dark:bg-slate-900/60 dark:border-slate-700/60`}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="font-display font-semibold text-xl text-slate-900 dark:text-slate-100"
          whileHover={{ rotate: 2 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          DV
        </motion.a>
        
        <ul className="hidden md:flex items-center space-x-8 relative">
          {links.map((link) => (
            <li key={link.href} className="relative group">
              <a
                href={link.href}
                className="text-slate-800 dark:text-slate-100 transition-colors hover:text-[#7C4DFF] py-2 relative"
                onClick={() => setActiveSection(link.href)}
              >
                {link.label}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] bg-[#7C4DFF] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  animate={{ scaleX: activeSection === link.href ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{ width: "100%" }}
                />
              </a>
            </li>
          ))}
        </ul>
        
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </nav>
    </header>
  );
}