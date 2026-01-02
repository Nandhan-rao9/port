import Cursor from "./components/Cursor"
import ScrollProgress from "./components/ScrollProgress"
import Hero from "./components/Hero"
import FeaturedProjects from "./components/FeaturedProjects"
import ProjectScale from "./components/ProjectScale"
import LeetCode from "./components/LeetCode"
import Hackathons from "./components/Hackathons"
import Leadership from "./components/Leadership"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import QuickNav from "./components/QuickNav"
import SkillsMarquee from "./components/SkillsMarquee"
import Experience from "./components/Experience"


export default function App() {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <QuickNav />

      <main className="px-4 sm:px-6 md:px-10 lg:px-16 space-y-16 sm:space-y-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.04),transparent_40%)]" />
        <Hero />
        
        <SkillsMarquee />
        <FeaturedProjects />
        <Experience />
        <ProjectScale />
        <LeetCode />
        <Hackathons />
        <Leadership />
        <Resume />
        <Contact />
      </main>
    </>
  )
}
