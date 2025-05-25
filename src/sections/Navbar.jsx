import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { menuItems } from "../constants";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { mc } from "../constants/utils";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenu = (name) => {
    setActiveItem(name);
    setIsOpen(false);
  };

  return (
    <nav
      className={mc(
        "fixed right-0 z-40 max-w-7xl w-full px-4 left-1/2 -translate-x-1/2  transition-all duration-300",
        isScrolled
          ? "py-2 mt-2 bg-primary/60 backdrop-blur-md rounded-3xl shadow-xs"
          : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* logo */}
          <div>
            <a href="#">
              <img src={logo} alt="logo" className="h-8" />
            </a>
          </div>

          {/* right content */}
          <div className="space-x-10 items-center hidden lg:flex ">
            {menuItems.map((item, index) => (
              <a
                onClick={() => handleMenu(item.name)}
                className={mc(
                  "text-black px-2 hover:bg-primary hover:underline underline-offset-4 rounded-sm  transition-all duration-300",
                  activeItem === item.name
                    ? "bg-primary text-black underline rounded-lg"
                    : "",
                  isScrolled ? "hover:bg-primary/60 hover:rounded-lg" : ""
                )}
                href={item.href}
                key={index}
              >
                {item.name}
              </a>
            ))}
            <a
              className={mc(
                "border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-lg transition-all duration-300",
                isScrolled
                  ? "hover:bg-secondary hover:text-white hover:border-primary transition-all duration-300"
                  : ""
              )}
              href="#contact"
            >
              Request a quote
            </a>
          </div>

          {/* mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <IoClose className="size-8" />
              ) : (
                <FiMenu className="size-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* content mobile */}
      <AnimatePresence initial={false} mode="wait">
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.33, ease: "easeOut" }}
            className={mc(
              "lg:hidden bg-white shadow-md rounded-lg",
              isScrolled ? "bg-transparent shadow-none" : ""
            )}
          >
            <div className="px-4 pt-2 pb-3 space-y-3 sm:px-3">
              {menuItems.map((item, index) => (
                <a
                  onClick={() => handleMenu(item.name)}
                  className={`flex flex-col text-black px-2 hover:bg-primary hover:underline underline-offset-4 rounded-sm  transition-all duration-300 
                ${
                  activeItem === item.name
                    ? "bg-primary text-black underline rounded-lg"
                    : ""
                }
                `}
                  href={item.href}
                  key={index}
                >
                  {item.name}
                </a>
              ))}
              <a
                className="flex flex-col border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-lg transition-all duration-300"
                href="#contact"
              >
                Request a quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
