import { servicesData } from "../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });

  return (
    <section className="pt-20 pb-10 bg-white" id="services" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title + description */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-10 mb-20"
        >
          <div className="flex-shrink-0 rounded-lg bg-primary text-black px-2 flex items-center justify-center ">
            <h2 className="text-3xl lg:text-[40px] font-medium">Services</h2>
          </div>
          <div className="lg:w-2/3 flex items-center">
            <p className="text-secondary lg:w-2/3">
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:
            </p>
          </div>
        </motion.div>

        {/* card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {servicesData.map((service, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{
                duration: 0.3,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              key={service.id}
              className={`flex flex-col sm:flex-row md:justify-between md:items-center gap-6 p-6 rounded-45 border border-b-8 border-[#191A23] cursor-pointer ${service.backgroundColor} ${service.textColor}`}
            >
              <div className="md:w-4/5 flex flex-col h-full justify-between">
                <div className="flex flex-col items-start -space-y-2">
                  <span
                    className={`inline-block text-xl font-semibold mb-2 rounded-md ${service.foregroundColor}`}
                  >
                    {service.title1}
                  </span>
                  <span
                    className={`inline-block text-xl font-semibold mb-2 rounded-md ${service.foregroundColor}`}
                  >
                    {service.title2}
                  </span>
                </div>
                <a
                  href="#"
                  className={`flex items-center gap-4 py-2 rounded-md my-2`}
                >
                  <img
                    src={service.imgLink}
                    alt="linkIcon"
                    className="size-7 rounded-full"
                  />
                  <span className={`text-lg font-medium ${service.linkColor}`}>
                    Learn more
                  </span>
                </a>
              </div>

              {/* img */}
              <div className="md:w-1/2 order-first md:order-last">
                <img
                  src={service.imgPath}
                  alt=""
                  className="w-full object-cover rounded-md mb-4"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
