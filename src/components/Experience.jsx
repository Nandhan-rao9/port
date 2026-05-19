import { Briefcase, ExternalLink } from "lucide-react"

export default function Experience() {
  return (
    <section>
      <div className="max-w-4xl" >
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="mt-0.5 sm:mt-1 text-white/70 shrink-0">
            <Briefcase size={18} className="sm:w-5 sm:h-5" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-medium">
              AI Research Intern ·{" "}
              <a
                href="https://www.alpes.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/90 hover:underline break-words"
              >
                Alpes.ai
                <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px] shrink-0" />
              </a>
            </h3>

          </div>
        </div>
      </div>
    </section>
  )
}
