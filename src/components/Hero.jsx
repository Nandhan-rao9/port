import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"
import Magnetic from "./Magnetic"
import GitHubPreview from "./GitHubPreview"

const NAME = "Nandhan Rao"

const COMMANDS = [
  { type: "cmd", text: "$ skills --focus" },
  { type: "out", text: "AI • React • C++ • Python • Flask" },
  { type: "cmd", text: "$ echo \"Building real-world systems\"" }
]

export default function Hero() {
  const [typedName, setTypedName] = useState("")
  const [step, setStep] = useState(0)

  // Smooth name typing
  useEffect(() => {
    if (typedName.length < NAME.length) {
      const t = setTimeout(() => {
        setTypedName(NAME.slice(0, typedName.length + 1))
      }, 110)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => setStep(1), 400)
      return () => clearTimeout(t)
    }
  }, [typedName])

  // Command sequence typing
  useEffect(() => {
    if (step > 0 && step <= COMMANDS.length) {
      const t = setTimeout(() => {
        setStep(s => s + 1)
      }, 420)
      return () => clearTimeout(t)
    }
  }, [step])

  return (
    <section className="md:pt-10 md:pb-8">
      <div
        className="
          grid gap-8 items-start
          grid-cols-1
          md:grid-cols-[1.15fr_0.85fr]
        "
      >
        {/* TERMINAL */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="
  rounded-xl border border-white/10 bg-black/70 backdrop-blur
  p-4 md:p-5 font-mono
  max-w-full sm:max-w-lg md:max-w-xl
"
        >
          {/* whoami */}
          <div className="text-green-400">$ whoami</div>

          {/* Name (typed, bigger) */}
            <div className="text-xl md:text-3xl font-semibold tracking-tight mt-1 text-white/95">
            {typedName}
            <span className="animate-pulse">█</span>
          </div>

          {/* Academic info */}
          

          {/* Commands */}
          <div className="mt-4 space-y-1 text-sm">
            {COMMANDS.slice(0, Math.max(0, step - 1)).map((line, i) => (
              <div key={i}>
                {line.type === "cmd" ? (
                  <span className="text-green-400">{line.text}</span>
                ) : (
                  <span className="text-white/80">{line.text}</span>
                )}
              </div>
            ))}
          </div>

          {/* Cursor */}
          {step <= COMMANDS.length && (
            <div className="text-green-400 animate-pulse mt-1">█</div>
          )}
        </motion.div>

        {/* GITHUB PREVIEW — DESKTOP ONLY */}
        <GitHubPreview />

      </div>

      {/* CTA */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-8">

        <Magnetic>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/90 transition"
          >
            <span>View work</span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </Magnetic>

        <Magnetic>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
          >
            <span>Resume</span>
            <ExternalLink
              size={14}
              className="transition-transform group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
            />
          </a>
        </Magnetic>

      </div>
      <div className="mt-4 md:hidden text-sm text-white/60">
  <a
    href="https://github.com/Nandhan-rao9"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 hover:text-white transition"
  >
    View GitHub profile →
  </a>
</div>

    </section>
  )
}
