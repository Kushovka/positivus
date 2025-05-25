import { testimonialCards } from "../constants";
import quote from "../assets/testimonial.png";
import arrowBack from "../assets/ArrowBack.png";
import arrowNext from "../assets/ArrowNext.png";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsShow, setItemsShow] = useState(1);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 786) {
        setItemsShow(3);
      } else {
        setItemsShow(1);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsShow;
      return nextIndex >= testimonialCards.length ? 0 : nextIndex;
    });
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => {
      const prev = prevIndex - itemsShow;
      return prev < 0
        ? (Math.ceil(testimonialCards.length / itemsShow) - 1) * itemsShow
        : prev;
    });
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <section className="pt-12 pb-8 bg-white" id="testimonials" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* title + description */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-10 mb-14"
        >
          <div className="flex-shrink-0 rounded-lg bg-primary text-black px-1.5 flex items-center justify-center">
            <h2 className="text-3xl lg:text-[40px] font-medium">Testimonials</h2>
          </div>
          <div className="md:w-2/3 flex items-center">
            <p className="text-secondary md:w-1/1 text-lg">
              Hear from Our Satisfied Clients: Read Our Testimonials to Learn
              More about Our Digital Marketing Services
            </p>
          </div>
        </motion.div>

        {/* teatimonials */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative mb-12"
        >
          {/* slide */}
          <AnimatePresence mode="wait">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto overflow-hidden">
              {testimonialCards
                .slice(currentIndex, currentIndex + itemsShow)
                .map((testimonial, index) => (
                  <motion.div
                    key={testimonial.index || testimonial.name}
                    initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                    transition={{ duration: 0.5 }}
                    className="w-full relative py-5 md:max-w-md px-8"
                  >
                    <div className="absolute top-0 left-8 right-0 z-30">
                      <img src={quote} alt="" className="size-20" />
                    </div>
                    <div className="bg-white hover:bg-primary rounded-2xl border border-black hover:border-primary pt-20 pb-24 px-8 cursor-pointer transition-all duration-300">
                      <p className="text-base mb-4">{testimonial.text}</p>
                      <p className="text-lg font-medium">{testimonial.name}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </AnimatePresence>
          {/* navigation */}
          <div className="absolute mt-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-5 z-10">
            <button onClick={handlePrev}>
              <img src={arrowBack} alt="" />
            </button>

            <div className="flex space-x-6">
              {[...Array(Math.ceil(testimonialCards.length / itemsShow))].map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => handleClick(index * itemsShow)}
                    className={`w-2 h-2 rounded-full ${
                      currentIndex === index * itemsShow
                        ? "bg-black"
                        : "bg-gray-500"
                    }`}
                  />
                )
              )}
            </div>
            <button onClick={handleNext}>
              <img src={arrowNext} alt="" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
