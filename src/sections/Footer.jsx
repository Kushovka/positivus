import logoW from "../assets/logoW.png";
import FooterContact from "../components/FooterContact";
import { footerIcons, footerNavs } from "../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <footer className="max-w-7xl pt-16 mx-auto sm:px-6 lg:px-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-secondary rounded-t-45"
      >
        {/* first section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 px-4 sm:px-6 lg:px-16 py-14">
          {/* logo */}
          <div>
            <img src={logoW} alt="" className="h-8 " />
          </div>
          {/* menu */}
          <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8">
            {footerNavs.map((footerNav, index) => (
              <a
                key={index}
                href={footerNav.href}
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                {footerNav.name}
              </a>
            ))}
          </div>

          {/* icons socials */}
          <div className="flex lg:justify-end space-x-6">
            {footerIcons.map((footerIcon, index) => (
              <img
                key={index}
                src={footerIcon.imgPath}
                href={footerIcon.href}
                className="cursor-pointer hover:scale-110 transition-transform duration-500"
              />
            ))}
          </div>
        </div>
        {/* contact */}
        <FooterContact />

        <hr className="my-4 border-white mx-4 sm:px-6 lg:px-16" />

        <d iv className="flex flex-col sm:flex-wrap md:gap-8 text-white px-4 sm:px-6 lg:px-16 py-5">
          <p className="flex items-center justify-center sm:justify-start">© {new Date().getFullYear()} Positivus. All Rights Reserved.</p>
          <p className="underline underline-offset-4 flex items-center justify-center sm:justify-start">
            <a href="#">Privacy Policy</a>
          </p>
        </d>
      </motion.div>
    </footer>
  );
};

export default Footer;
