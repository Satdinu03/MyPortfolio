import { motion } from 'framer-motion'

interface MarqueeDividerProps {
  items: string[]
  className?: string
}

export default function MarqueeDivider({ items, className = "" }: MarqueeDividerProps) {
  const duplicatedItems = [...items, ...items] // Duplicate for seamless loop

  return (
    <div className={`overflow-hidden py-4 ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["-0%", "-50%"] }}
        transition={{
          duration: 24,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="mx-8 text-sm text-gray/60 dark:text-gray font-medium"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}