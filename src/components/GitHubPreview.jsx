import { ExternalLink, Building2 } from "lucide-react"

export default function GitHubPreview() {
  return (
    <div className="hidden md:block">
      <div className="w-full max-w-sm rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5">

        {/* Profile image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Nandhan Rao"
            className="w-28 h-28 rounded-full object-cover border border-white/10"
          />
        </div>

        {/* Name + headline */}
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">Nandhan Rao</h3>
          <p className="text-sm text-white/70">
            AI Research Intern · Alpes.ai
          </p>
        </div>

        {/* Education */}
        <div className="mt-3 text-sm text-white/60 text-center">
          4th Year · Electronics & Computer Engineering<br />
          Sreenidhi Institute of Science and Technology
        </div>

        {/* Company */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70">
          <Building2 size={14} />
          <span>Alpes.ai</span>
        </div>

        {/* CTA */}
        <a
          href="https://linkedin.com/in/nandhanrao"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-5 flex items-center justify-center gap-2
            rounded-md border border-white/15
            py-2 text-sm font-medium
            hover:bg-white/5 transition
          "
        >
          View LinkedIn Profile
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  )
}
