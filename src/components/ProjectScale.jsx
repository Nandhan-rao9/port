import { Cloud, Brain, Code } from "lucide-react"
import SectionHeader from "./SectionHeader"
import AnimatedCard from "./AnimatedCard"
import { ExternalLink, } from "lucide-react"



export default function ProjectScale() {
  return (
    <section id="scale" className="relative">
      <SectionHeader
  icon={Code}
  title="Project Scale"
  subtitle="Breadth across cloud, AI, and production systems."
/>

      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {[
  {
    icon: Cloud,
    title: "Docker & Cloud",
    desc: "10+ containerized and deployed systems",
    link: "https://github.com/Nandhan-rao9/devops_projects"
  },
  {
    icon: Brain,
    title: "AI & ML",
    desc: "NLP, vision, and anomaly detection projects",
    link: "https://github.com/Nandhan-rao9?tab=repositories&q=&type=&language=Jupyter%20Notebook"
  },
  {
    icon: Code,
    title: "Full Stack",
    desc: "Production-grade web applications",
    link: "https://github.com/Nandhan-rao9?tab=repositories&q=&type=&language=javascript"
  }
].map((item) => {
  const Icon = item.icon
  return (
    <a
  key={item.title}
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className="group block"
>
  <AnimatedCard className="p-4 sm:p-5 md:p-6">
    <div className="flex items-start justify-between">
      <Icon size={18} className="sm:w-5 sm:h-5 md:w-[22px] md:h-[22px] text-white/80 shrink-0"/>
      <ExternalLink
        size={14}
        className="sm:w-4 sm:h-4 text-white/40 transition group-hover:text-white/70 shrink-0"
      />
    </div>

    <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-medium">
      {item.title}
    </h3>

    <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-muted">
      {item.desc}
    </p>

    {/* Hover CTA */}
    <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/70 md:opacity-0 transition group-hover:opacity-100">
      Explore repositories →
    </p>
  </AnimatedCard>
</a>

  )
})}

      </div>
    </section>
  )
}
