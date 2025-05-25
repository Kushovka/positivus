import ctaImg from "../assets/CTA.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CTA = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  return (
    <section className="relative py-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-[1216px] mx-auto bg-tartiary rounded-45 sm:pt-16 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-16"
      >
        {/* left content */}
        <div className="md:w-1/2 text-center sm:text-left mb-8 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-secondary">
            Let’s make things happen
          </h1>
          <div className="md:w-4/5">
            <p className="text-black text-normal text-lg my-6">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
          </div>
          <button className="inline-block px-8 py-5 bg-black text-white font-normal text-xl rounded-2xl hover:bg-primary hover:text-black transition-all duration-300">
            Get your free proposal
          </button>
        </div>
        {/* right content */}
        <div className=" md:w-1/2 flex sm:hidden md:flex justify-center items-center relative">
          <img
            src={ctaImg}
            alt="cta image"
            className="md:absolute md:-top-52 md:bottom-0"
            style={{ transform: "scale(1.05)" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
