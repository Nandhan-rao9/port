export default function Leadership() {
  return (
    <section>
      <h2 className="text-3xl mb-10">Leadership</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <a
          href="https://snist.cloudcommunityclub.tech/"
          target="_blank"
          className="border border-zinc-800 p-6 rounded-xl hover:-translate-y-1 transition"
        >
          <h3 className="text-xl">President</h3>
          <p className="text-muted mt-1">Cloud Community Club</p>
          <p className="text-sm text-muted mt-3">
            Built and scaled a 150+ member tech community through workshops
            and hands-on bootcamps.
          </p>
        </a>

        <div className="border border-zinc-800 p-6 rounded-xl">
          <h3 className="text-xl">Vice President</h3>
          <p className="text-muted mt-1">
            Student Alumni Relationship Cell
          </p>
          <p className="text-sm text-muted mt-3">
            Automated alumni platforms and organized large-scale industry
            interactions.
          </p>
        </div>
      </div>
    </section>
  )
}
