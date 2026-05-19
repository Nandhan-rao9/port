import { Linkedin, Github, Trophy } from "lucide-react"
import SectionHeader from "./SectionHeader"
import AnimatedCard from "./AnimatedCard"
import { hackathons } from "../data/hackathons"

export default function Hackathons() {
  return (
    <section id="hackathons">
      <SectionHeader
        icon={Trophy}
        title="Hackathon Wins"
        subtitle="Competitive problem solving with real outcomes."
      />

      <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {hackathons.map((h, i) => (
          <AnimatedCard key={i} className="p-4 sm:p-5 md:p-6">
            <div
              className="
                flex items-start gap-3 sm:gap-4
                sm:flex-col
              "
            >
              {/* IMAGE */}
              <div className="shrink-0 sm:w-full sm:mb-2 md:mb-4">
                <div
                  className="
                    rounded-md border border-white/10 bg-black
                    p-1 sm:p-1.5 md:p-2
                  "
                >
                  <img
                    src={h.image}
                    alt={h.name}
                    className="
                      w-16 h-16 sm:w-full sm:h-32 md:h-40 lg:h-44
                      object-contain
                    "
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold tracking-tight">
                  {h.name}
                </h3>

                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-muted">
                  {h.position}
                </p>

                <div className="mt-2 sm:mt-3 md:mt-4 flex gap-3">
                  <a
                    href={h.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition"
                  >
                    <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />

                  </a>
                  <a
                    href={h.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition"
                  >
                    <Github size={16} className="sm:w-[18px] sm:h-[18px]" />

                  </a>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  )
}
