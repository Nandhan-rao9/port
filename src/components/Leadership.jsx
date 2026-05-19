export default function Leadership() {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10 font-semibold">Leadership</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        <a
          href="https://snist.cloudcommunityclub.tech/"
          target="_blank"
          className="border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 rounded-xl hover:-translate-y-1 transition"
        >
          <h3 className="text-base sm:text-lg md:text-xl font-semibold">President</h3>
          <p className="text-muted mt-1 text-sm sm:text-base">Cloud Community Club</p>
          <p className="text-xs sm:text-sm text-muted mt-2 sm:mt-3">
            Built and scaled a 150+ member tech community through workshops
            and hands-on bootcamps.
          </p>
        </a>

        <div className="border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 rounded-xl">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold">Vice President</h3>
          <p className="text-muted mt-1 text-sm sm:text-base">
            Student Alumni Relationship Cell
          </p>
          <p className="text-xs sm:text-sm text-muted mt-2 sm:mt-3">
            Worked with alumni data and organised 10+ events to create an impact.
          </p>
        </div>
      </div>
    </section>
  )
}
