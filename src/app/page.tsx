import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Timeline from "@/components/Timeline";
import SkillsMap from "@/components/SkillsMap";
import ResearchAwards from "@/components/ResearchAwards";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";

export default function Home() {
  return (
    <>
      <Preloader />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main>
        {/* Hero animates on load; the rest reveal one section at a time on scroll */}
        <Hero />
        <SectionReveal>
          <SelectedWork />
        </SectionReveal>
        <SectionReveal>
          <Timeline />
        </SectionReveal>
        <SectionReveal>
          <SkillsMap />
        </SectionReveal>
        <SectionReveal>
          <ResearchAwards />
        </SectionReveal>
        <SectionReveal>
          <About />
        </SectionReveal>
        <SectionReveal>
          <Contact />
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
