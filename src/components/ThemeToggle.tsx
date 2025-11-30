import { motion } from 'framer-motion'

interface ThemeToggleProps {
  darkMode: boolean
  setDarkMode: (dark: boolean) => void
}

export default function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-12 h-6 bg-gray/30 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-violet/40"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        className="w-4 h-4 bg-violet rounded-full shadow-md"
        animate={{
          x: darkMode ? 24 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <span className="sr-only">
        {darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </motion.button>
  )
}