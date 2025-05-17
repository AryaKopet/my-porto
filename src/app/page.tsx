import Hero from "../components/Hero";
import Projects from "../components/Project";
import Tools from "../components/Tools";
import Certificates from "../components/Certificates";
import AnimateOnScroll from "../components/AnimateOnScroll";
import "../styles/globals.css";

export default function Home() {
  return (
    <main>
      <section id="home" className="scroll-mt-24">
        <AnimateOnScroll>
          <Hero />
        </AnimateOnScroll>
      </section>

      <section id="certificates" className="scroll-mt-24">
        <AnimateOnScroll delay={0.1}>
          <Certificates />
        </AnimateOnScroll>
      </section>

      <section id="learning" className="scroll-mt-24">
        <AnimateOnScroll delay={0.2}>
          <Tools />
        </AnimateOnScroll>
      </section>

      <section id="projects" className="scroll-mt-24">
        <AnimateOnScroll delay={0.3}>
          <Projects />
        </AnimateOnScroll>
      </section>
    </main>
  )
}