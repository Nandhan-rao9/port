import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"

export default function LivePreview({ url }) {
  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlocked(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative rounded-lg border border-white/10 bg-black overflow-hidden">
      {!blocked ? (
        <iframe
          src={url}
          title="Live preview"
          className="h-40 md:h-36 w-full pointer-events-none scale-[0.9] origin-top-left"
        />
      ) : (
        <div className="h-40 md:h-36 flex flex-col items-center justify-center text-center px-4">
          <p className="text-sm text-white/70">
            Live preview not supported
          </p>
          <p className="text-xs text-muted mt-1">
            Click to open project
          </p>
        </div>
      )}

      {/* Overlay CTA */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-end justify-end p-2"
      >
        <span className="inline-flex items-center gap-1 text-xs bg-black/70 backdrop-blur px-2 py-1 rounded">
          Open live <ExternalLink size={12} />
        </span>
      </a>
    </div>
  )
}
