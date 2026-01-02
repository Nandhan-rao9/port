import { motion } from "framer-motion"

export default function AnimatedCard({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.015
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${className}`}
    >
      {/* light sweep */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -inset-[50%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_40%)]" />
      </div>

      {children}
    </motion.div>
  )
}
