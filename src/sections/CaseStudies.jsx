import { caseStudies } from "../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CaseStudies = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <section className="pt-24 pb-24 bg-white" id="use-cases" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title + description */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-10 mb-20"
        >
          <div className="flex-shrink-0 rounded-lg bg-primary text-black px-2 flex items-center justify-center">
            <h2 className=" text-3xl lg:text-[40px] font-medium">Case Studies</h2>
          </div>
          <div className="md:w-2/3 flex items-center">
            <p className="text-secondary md:w-4/4 text-lg ">
              Explore Real-Life Examples of Our Proven Digital Marketing Success
              through Our Case Studies
            </p>
          </div>
        </motion.div>

        {/* card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-secondary text-white p-16 rounded-45"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 relative gap-0 sm:gap-6 ">
            {caseStudies.map((study, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3,
                  ease: "easeInOut",
                }}
                key={index}
                className="p-4"
              >
                <div className="relative">
                  <p className="mb-4">{study.description}</p>

                  <a
                    href="#"
                    className="text-primary flex items-center hover:underline pb-6 sm:pb-0"
                  >
                    <span>Learn more</span>
                    <img src={study.imgPath} alt="" className="size-8" />
                  </a>
                  {(index + 1) % 3 !== 0 && (
                    <span className="hidden md:block absolute top-0 -right-6 h-full w-px bg-white" />
                  )}
                  {(index + 1) % 3 !== 0 && (
                    <span className="sm:hidden block absolute bottom-0 left-0 w-full h-px bg-white" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
