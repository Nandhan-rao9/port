import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"
import Magnetic from "./Magnetic"
import GitHubPreview from "./GitHubPreview"

const NAME = "Nandhan Rao"

const COMMANDS = [
  { type: "cmd", text: "$ skills --focus" },
  { type: "out", text: "AI • React • C++ • Python • Flask" },
  { type: "cmd", text: "$ echo \"Building real-world systems\"" },
  { type: "cmd", text: "$ contact --phone" },
  { type: "out", text: "+91 9392851715" }
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
    <section className="pt-4 sm:pt-8 md:pt-10 pb-4 sm:pb-6 md:pb-8">
      <div
        className="
          grid gap-6 sm:gap-8 items-start
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
  p-4 sm:p-5 md:p-6 font-mono
  w-full
"
        >
          {/* whoami */}
          <div className="text-sm sm:text-base text-green-400">$ whoami</div>

          {/* Name (typed, bigger) */}
            <div className="text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight mt-1 text-white/95 break-words">
            {typedName}
            <span className="animate-pulse">█</span>
          </div>

          {/* Academic info */}
          

          {/* Commands */}
          <div className="mt-3 sm:mt-4 space-y-1 text-xs sm:text-sm">
            {COMMANDS.slice(0, Math.max(0, step - 1)).map((line, i) => (
              <div key={i} className="break-words">
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
            <div className="text-green-400 animate-pulse mt-1 text-sm">█</div>
          )}
        </motion.div>

        {/* GITHUB PREVIEW — DESKTOP ONLY */}
        <GitHubPreview />

      </div>

      {/* CTA */}
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-8">

        <Magnetic>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white/90 transition"
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
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white/80 transition hover:text-white"
          >
            <span>Resume</span>
            <ExternalLink
              size={14}
              className="transition-transform group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
            />
          </a>
        </Magnetic>

      </div>
      <div className="mt-3 sm:mt-4 md:hidden text-xs sm:text-sm text-white/60">
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
