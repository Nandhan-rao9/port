export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 lg:py-32 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold px-4">
        Let’s build something meaningful.
      </h2>

      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted px-4">
        Open to opportunities, collaborations, and challenging problems.
      </p>

      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <a href="mailto:nandhanrao99@gmail.com" className="underline text-sm sm:text-base">
          Email
        </a>
        <a href="https://linkedin.com/in/nandhanrao" className="underline text-sm sm:text-base">
          LinkedIn
        </a>
        <a href="https://github.com/Nandhan-rao9" className="underline text-sm sm:text-base">
          GitHub
        </a>
      </div>
    </section>
  )
}
