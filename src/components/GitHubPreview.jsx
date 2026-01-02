import { MapPin, Mail, Users } from "lucide-react"

export default function GitHubPreview() {
  return (
    <div className="hidden md:block">
      <div className="rounded-xl border border-white/10 bg-[#0d1117] p-5 w-full max-w-sm">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Nandhan Rao"
            className="w-32 h-32 rounded-full border border-white/10 object-cover"
          />
        </div>

        {/* Name */}
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">Nandhan Rao</h3>
          <p className="text-sm text-white/60">Nandhan-rao9 · he/him</p>
        </div>

        {/* Button */}
        <a
          href="https://github.com/Nandhan-rao9"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-4 block w-full text-center text-sm
            border border-white/15 rounded-md py-1.5
            hover:bg-white/5 transition
          "
        >
          Open GitHub Profile
        </a>

        {/* Info */}
        <div className="mt-4 space-y-2 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <Users size={14} />
            <span>2 followers · 2 following</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Hyderabad, India</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span className="break-all">
              22311a1903@ecm.sreenidhi.edu.in
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
