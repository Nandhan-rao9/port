import { featuredProjects } from "../data/projects"
import { motion } from "framer-motion"
import { ExternalLink, Layers } from "lucide-react"
import SectionHeader from "./SectionHeader"
import AnimatedCard from "./AnimatedCard"
import Magnetic from "./Magnetic"
import LivePreview from "./LivePreview"


export default function FeaturedProjects() {
  return (
    <section id="work" className="relative">
      <SectionHeader
  icon={Layers}
  title="Live Projects"
  subtitle="Real, deployed systems"
/>


      <div className="space-y-6 sm:space-y-8 md:space-y-10">
        {featuredProjects.map((p, i) => (
          <a
  key={i}
  href={p.live}
  target="_blank"
  rel="noopener noreferrer"
  className="group block"
>
  <AnimatedCard className="p-4 sm:p-5 md:p-6">
    <div
      className="
        grid gap-4 sm:gap-5 md:gap-6 items-center
        grid-cols-1
        md:grid-cols-[1.2fr_1fr]
      "
    >
      {/* TEXT */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
          {p.name}
        </h3>

        <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-muted">
          {p.desc}
        </p>

        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted">
          {p.tech}
        </p>

        <p className="mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm text-white/70 md:opacity-0 transition group-hover:opacity-100">
          View live project →
        </p>
      </div>

      {/* IMAGE PREVIEW */}
      <div className="rounded-lg border border-white/10 bg-black p-2 order-first md:order-last">
        <img
          src={p.image}
          alt={p.name}
          className="
            w-full
            h-32
            sm:h-40
            md:h-40
            lg:h-44
            object-contain
          "
        />
      </div>
    </div>
  </AnimatedCard>
</a>
        ))}
      </div>
    </section>
  )
}
