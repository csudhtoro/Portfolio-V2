import About from "@/Components/about";
import Intro from "@/Components/intro";
import Projects from "@/Components/projects";
import SectionDivider from "@/Components/section-divider";
import Skills from "@/Components/skills";
import Experience from "@/Components/experience";
import Contact from "@/Components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
