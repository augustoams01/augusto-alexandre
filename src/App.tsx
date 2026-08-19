import { About } from "./components/About";
import { ContactCTA } from "./components/ContactCTA";
import { Differentials } from "./components/Differentials";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { MidCTA } from "./components/MidCTA";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { TechStack } from "./components/TechStack";
import { Technologies } from "./components/Technologies";
import { Testimonials } from "./components/Testimonials";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Technologies />
        <Projects />
        <Services />
        <Metrics />
        <Process />
        <MidCTA />
        <About />
        <TechStack />
        <Differentials />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
