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

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
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
  <AnimatedCard className="p-4 md:p-6">
    <div className="flex items-start justify-between">
      <Icon size={18} className="md:w-[22px] md:h-[22px] text-white/80"/>
      <ExternalLink
        size={16}
        className="text-white/40 transition group-hover:text-white/70"
      />
    </div>

    <h3 className="mt-4 md:text-lg font-medium">
      {item.title}
    </h3>

    <p className="mt-1 text-xs md:text-sm text-muted">
      {item.desc}
    </p>

    {/* Hover CTA */}
    <p className="mt-4 text-sm text-white/70 opacity-0 transition group-hover:opacity-100 md:hidden">
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
