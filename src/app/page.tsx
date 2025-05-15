import Hero from "../components/Hero";
import Projects from "../components/Project";
import Tools from "../components/Tools";
import SocialLinks from "../components/SocialLinks";
import Certificates from "../components/Certificates";
import "../styles/globals.css"

export default function Home() {
  return (
    <>
      <Hero />
      <Certificates />
      <Tools />
      <Projects />
      <SocialLinks />
    </>
  )
}

