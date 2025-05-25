import CaseStudies from "./sections/caseStudies";
import Contact from "./sections/Contact";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Process from "./sections/Process";
import Services from "./sections/Services";
import Team from "./sections/Team";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <CTA />
      <CaseStudies />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
