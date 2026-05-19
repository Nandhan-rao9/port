import { motion } from "framer-motion"

export default function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex items-start gap-3 sm:gap-4"
    >
      <div className="mt-0.5 sm:mt-1 rounded-lg border border-white/10 bg-white/5 p-1.5 sm:p-2">
        <Icon size={18} className="sm:w-5 sm:h-5" />
      </div>

      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-muted max-w-lg">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  )
}
