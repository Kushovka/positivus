import { teamCards } from "../constants";
import linkedIn from "../assets/teamLogos/in.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Team = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });
  return (
    <section className="pt-36 pb-14 bg-white" id="team" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title + description */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-10 mb-20"
        >
          <div className="flex-shrink-0 rounded-lg bg-primary text-black px-1.5 flex items-center justify-center">
            <h2 className="text-3xl lg:text-[40px] font-medium">Team</h2>
          </div>
          <div className="md:w-2/3 flex items-center">
            <p className="text-secondary md:w-1/1 text-lg">
              Meet the skilled and experienced team behind our successful
              digital marketing strategies
            </p>
          </div>
        </motion.div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamCards.map((teamCard, index) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              key={teamCard.id}
              className="bg-white hover:bg-primary rounded-45 border border-b-8 border-secondary hover:border-primary shadow-lg px-9 pt-10 pb-16 cursor-pointer transition-all duration-300"
            >
              <div className="relative">
                {/* top content */}
                <div className="flex flex-col sm:flex-row sm:items-end items-start gap-4 justify-start">
                  <img
                    src={teamCard.imgPath}
                    alt=""
                    className="w-24 h-24"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-xl font-medium">{teamCard.name}</h3>

                    <p className="text-secondary text-lg">{teamCard.prof}</p>
                  </div>
                  <a
                    href="#"
                    className="absolute -top-5 -right-5 xl:top-0 xl:right-0"
                  >
                    <img src={linkedIn} alt="" className="size-9" />
                  </a>
                </div>

                <hr className="border-secondary my-7" />

                {/* bottom content */}
                <div>
                  <p className="text-black">{teamCard.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* btn */}
        <div className="flex justify-center lg:justify-end mt-10 w-full">
          <button className="inline-block px-16 py-5 bg-black text-white font-normal text-xl rounded-xl hover:bg-primary hover:text-black transition-all duration-300">
            See all team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
