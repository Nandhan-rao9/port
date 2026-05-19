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

      <AnimatedCard className="p-4 sm:p-5 md:p-6">
        {/* Heatmap */}
        <div className="overflow-x-auto -mx-2 sm:mx-0">
  <img
    src="https://leetcard.jacoblin.cool/Nandhan_Rao?theme=dark&font=JetBrains%20Mono&ext=heatmap"
    alt="LeetCode stats"
    className="mx-auto max-w-full sm:max-w-[700px] rounded-lg opacity-90 min-w-[320px]"
  />
</div>


        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-between sm:items-center">
          <p className="text-muted text-xs sm:text-sm">
            500+ problems solved · Global rating - Top 9%
          </p>

          <a
            href="https://leetcode.com/u/Nandhan_Rao/"
            target="_blank"
            className="underline text-sm whitespace-nowrap"
          >
            View Profile →
          </a>
        </div>
      </AnimatedCard>
    </section>
  )
}
