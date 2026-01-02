import { Briefcase, ExternalLink } from "lucide-react"

export default function Experience() {
  return (
    <section className="mt-5">
      <div className="max-w-4xl" >
        <div className="flex items-start gap-4">
          <div className="mt-1 text-white/70">
            <Briefcase size={20} />
          </div>

          <div>
            <h3 className="text-lg font-medium">
              AI Research Intern ·{" "}
              <a
                href="https://www.alpes.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/90 hover:underline"
              >
                Alpes.ai
                <ExternalLink size={14} />
              </a>
            </h3>

          </div>
        </div>
      </div>
    </section>
  )
}
