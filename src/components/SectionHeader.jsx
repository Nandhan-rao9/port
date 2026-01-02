import { motion } from "framer-motion"

export default function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12 flex items-start gap-4"
    >
      <div className="mt-1 rounded-lg border border-white/10 bg-white/5 p-2">
        <Icon size={20} />
      </div>

      <div>
        <h2 className="text-3xl font-semibold tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-muted max-w-lg">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  )
}
