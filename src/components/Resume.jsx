import Magnetic from "./Magnetic"


export default function Resume() {
  return (
    <section id="resume">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-3xl font-semibold">Resume</h2>
        <p className="mt-2 text-muted max-w-xl">
          A concise overview of my experience, projects, and impact.
        </p>

        <div className="mt-6 flex gap-6">
  <a
    href="/resume.pdf"
    target="_blank"
    className="rounded-full border border-white/20 px-5 py-2 transition hover:bg-white/10"
  >
    View Resume
  </a>

          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-white/20 px-5 py-2 transition hover:bg-white/10"
          >
            Download
          </a>
        </div>
      </div>
    </section>
  )
}
