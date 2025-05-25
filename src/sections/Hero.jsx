import heroImg from "../assets/heroImg.png";
import LogoCarousel from "../components/LogoCarousel";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <section className="bg-white pt-12" id="about" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-28">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* left content */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-2/1 ">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-secondary">
                Navigating the digital landscape for success
              </h1>
              <div className="md:w-2/3">
                <p className="text-black text-xl my-9">
                  Our digital marketing agency helps businesses grow and succeed
                  online through a range of services including SEO, PPC, social
                  media marketing, <br /> and content creation.
                </p>
              </div>
              <button className="inline-block px-9 py-5 bg-black text-white font-normal text-xl rounded-2xl hover:bg-primary hover:text-black transition-all duration-300">
                Book a consultation
              </button>
            </div>
          </motion.div>

          {/* right content */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 order-first md:order-last"
          >
            <img src={heroImg} alt="" className="w-full h-auto rounded-md" />
          </motion.div>
        </div>
        {/* banner logo */}
        <LogoCarousel />
      </div>
    </section>
  );
};

export default Hero;
