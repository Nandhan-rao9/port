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

      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        {hackathons.map((h, i) => (
          <AnimatedCard key={i} className="p-4 md:p-6">
            <div
              className="
                flex items-start justify-between gap-4
                md:flex-col md:items-start
              "
            >
              {/* IMAGE */}
              <div className="shrink-0 md:w-full md:mb-4">
                <div
                  className="
                    rounded-md border border-white/10 bg-black
                    p-1
                    md:rounded-lg md:p-2
                  "
                >
                  <img
                    src={h.image}
                    alt={h.name}
                    className="
                      w-20 h-20 object-contain
                      md:w-full md:h-44
                    "
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="flex-1 md:flex-none">
                <h3 className="text-sm font-semibold md:text-lg tracking-tight">
                  {h.name}
                </h3>

                <p className="mt-0.5 text-xs md:text-sm text-muted">
                  {h.position}
                </p>

                <div className="mt-2 md:mt-4 flex gap-3">
                  <a
                    href={h.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition"
                  >
                    <Linkedin size={18} className="md:w-[18px] md:h-[18px]" />

                  </a>
                  <a
                    href={h.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition"
                  >
                    <Github size={18} className="md:w-[18px] md:h-[18px]" />

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
