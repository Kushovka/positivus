import { useState } from "react";
import { processSteps } from "../constants";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Process = () => {
  const [openWork, setOpenWork] = useState(0);
  const handleToggle = (index) => {
    setOpenWork(openWork === index ? -1 : index);
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });

  return (
    <section className="pt-12 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title + description */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-10 mb-20"
        >
          <div className="flex-shrink-0 rounded-lg bg-primary text-black px-2 flex items-center justify-center">
            <h2 className="text-3xl lg:text-[40px] font-medium">
              Our Working Process{" "}
            </h2>
          </div>
          <div className="md:w-2/3 flex items-center">
            <p className="text-secondary text-lg md:w-1/1">
              Step-by-Step Guide to Achieving <br /> Your Business Goals
            </p>
          </div>
        </motion.div>

        {/* cards */}
        <div>
          {processSteps.map((step, i) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{
                duration: 0.4,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              key={i}
              className={`border border-b-8 border-secondary rounded-45 mb-6 overflow-hidden`}
            >
              <button
                onClick={() => handleToggle(i)}
                className={`w-full text-left px-6 md:px-16 py-7 md:py-10 flex justify-between items-center ${
                  openWork === i
                    ? "bg-primary pb-0 md:py-10 px-6 md:px-16 pt-10"
                    : "bg-tartiary"
                }`}
              >
                <div className="flex items-center ">
                  <span className="text-secondary font-extrabold text-4xl md:text-6xl mr-4 md:mr-6">
                    {step.number}
                  </span>
                  <h3 className="text-[20px] md:text-3xl font-semibold">
                    {step.question}
                  </h3>
                </div>

                <div className="bg-white text-black border border-black p-1.5 rounded-full">
                  {openWork === i ? (
                    <FaMinus className="md:size-7 size-5" />
                  ) : (
                    <FaPlus className="md:size-7 size-5" />
                  )}
                </div>
              </button>
              <AnimatePresence initial={false} mode="wait">
                {openWork === i && (
                  <motion.section
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className=" overflow-hidden"
                  >
                    <motion.div
                      layout
                      className="bg-primary text-secondary px-16 pb-10 pt-7 lg:pt-0"
                    >
                      <hr className="mt-0 mb-7 border-black" />
                      <p>{step.answer}</p>
                    </motion.div>
                  </motion.section>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
