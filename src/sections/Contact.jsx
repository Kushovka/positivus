import contact from "../assets/contact.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <section className="pt-24 pb-20 bg-white" id="contact" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title + description */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-10 mb-20"
        >
          <div className="flex-shrink-0 rounded-lg bg-primary text-black px-1.5 flex items-center justify-center">
            <h2 className="text-3xl lg:text-[40px] font-medium">Contact Us</h2>
          </div>
          <div className="md:w-2/3 flex items-center">
            <p className="text-secondary md:w-1/1">
              Connect with Us: Let's Discuss Your Digital Marketing Needs
            </p>
          </div>
        </motion.div>

        {/* contact */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between bg-tartiary rounded-45 p-4 md:p-8"
        >
          <div className="w-full md:w-1/2 p-4">
            <form className="space-y-4">
              {/* radio */}
              <div className="flex flex-col md:flex-row md:space-x-4 items-start justify-start">
                {/* label1 */}
                <label className="flex items-center cursor-pointer">
                  <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center mr-2">
                    <input
                      type="radio"
                      name="contact-type"
                      className="peer hidden"
                      value="hi"
                    />
                    <div className="w-3 h-3 rounded-full flex items-center justify-center  bg-primary scale-0 peer-checked:scale-100 transition-transform duration-300" />
                  </div>
                  Say Hi
                </label>

                {/* label2 */}
                <label className="flex items-center mt-2 md:mt-0 cursor-pointer">
                  <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center mr-2">
                    <input
                      type="radio"
                      name="contact-type"
                      className="peer hidden"
                      value="quote"
                    />
                    <div className="w-3 h-3 rounded-full bg-primary flex items-center justify-center  scale-0 peer-checked:scale-100 transition-transform duration-300" />
                  </div>
                  Get a Quote
                </label>
              </div>

              {/* name */}
              <div className="pt-10">
                <label className="block text-base font-normal"> Name </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-2 py-2.5 px-4 block w-full rounded-2xl focus:outline-none focus:ring focus:ring-primary border border-black"
                  placeholder="Name"
                />
              </div>

              {/* email */}
              <div className="pt-6">
                <label className="block text-base font-normal"> Email* </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-2 py-2.5 px-4 block w-full rounded-2xl focus:outline-none focus:ring focus:ring-primary border border-black"
                  placeholder="Email"
                />
              </div>

              {/* message */}
              <div className="pt-6">
                <label className="block text-base font-normal">
                  {" "}
                  Message*{" "}
                </label>

                <textarea
                  rows="6"
                  name="message"
                  id="message"
                  className="mt-2 py-2.5 px-4 block w-full rounded-2xl focus:outline-none focus:ring focus:ring-primary border border-black"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="flex items-center justify-center pt-10">
                <button
                  type="submit"
                  className="inline-block px-6 py-3 md:px-10 bg-black text-white text-xl font-normal rounded-2xl hover:bg-primary hover:text-black transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* img  */}
          <div className="relative md:flex justify-end items-center md:w-3/4 md:-m-8 overflow-hidden">
            <img
              src={contact}
              alt=""
              className="md:absolute md:block hidden top-20 bottom-0 md:-right-60 -right-64 w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
