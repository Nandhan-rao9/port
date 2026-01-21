import SectionHeader from "./SectionHeader"
import { Flame } from "lucide-react"
import AnimatedCard from "./AnimatedCard"

export default function LeetCode() {
  return (
    <section>
      <SectionHeader
        icon={Flame}
        title="Problem Solving"
        subtitle="Consistency and performance on LeetCode."
      />

      <AnimatedCard className="p-6">
        {/* Heatmap */}
        <div className="overflow-x-auto">
  <img
    src="https://leetcard.jacoblin.cool/Nandhan_Rao?theme=dark&font=JetBrains%20Mono&ext=heatmap"
    alt="LeetCode stats"
    className="mx-auto max-w-[700px] rounded-lg opacity-90"
  />
</div>


        <div className="mt-6 flex justify-between items-center">
          <p className="text-muted text-sm">
            500+ problems solved · Global rating - Top 9%
          </p>

          <a
            href="https://leetcode.com/u/Nandhan_Rao/"
            target="_blank"
            className="underline"
          >
            View Profile →
          </a>
        </div>
      </AnimatedCard>
    </section>
  )
}
