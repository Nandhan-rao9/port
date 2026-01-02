import { motion } from "framer-motion"
import { skills } from "../data/skills"

export default function SkillsMarquee() {
  return (
    <section>
      <div className="overflow-hidden border-y border-white/10 py-6">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={i}
              className="text-sm text-white/80 px-4 py-1 rounded-full border border-white/10 bg-white/5"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
