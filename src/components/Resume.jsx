import Magnetic from "./Magnetic"


export default function Resume() {
  return (
    <section id="resume">
      <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Resume</h2>
        <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-muted max-w-xl">
          A concise overview of my experience, projects, and impact.
        </p>

        <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
  <a
    href="/resume.pdf"
    target="_blank"
    className="text-center rounded-full border border-white/20 px-4 sm:px-5 py-2 text-sm sm:text-base transition hover:bg-white/10"
  >
    View Resume
  </a>

          <a
            href="/resume.pdf"
            download
            className="text-center rounded-full border border-white/20 px-4 sm:px-5 py-2 text-sm sm:text-base transition hover:bg-white/10"
          >
            Download
          </a>
        </div>
      </div>
    </section>
  )
}
