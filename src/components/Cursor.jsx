import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = e => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <motion.div
      animate={{ x: pos.x - 10, y: pos.y - 10 }}
      className="fixed top-0 left-0 w-5 h-5 rounded-full bg-white opacity-20 pointer-events-none z-50"
    />
  )
}
