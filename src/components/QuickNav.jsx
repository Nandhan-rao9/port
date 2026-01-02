import { motion } from "framer-motion"
import { Code2, Trophy, Layers, FileText, Mail } from "lucide-react"

const items = [
  { icon: Code2, href: "#work", label: "Work" },
  { icon: Layers, href: "#scale", label: "Scale" },
  { icon: Trophy, href: "#hackathons", label: "Wins" },
  { icon: FileText, href: "#resume", label: "Resume" },
  { icon: Mail, href: "#contact", label: "Contact" }
]

export default function QuickNav() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex"
    >
      {items.map((item) => {
        const Icon = item.icon
        return (
          <a
            key={item.href}
            href={item.href}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur transition hover:scale-110"
          >
            <Icon size={16} />
            <span className="pointer-events-none absolute right-12 whitespace-nowrap rounded bg-black px-2 py-1 text-xs opacity-0 transition group-hover:opacity-100">
              {item.label}
            </span>
          </a>
        )
      })}
    </motion.div>
  )
}
