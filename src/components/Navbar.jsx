import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const navlinks = [
    { name: "about" },
    { name: "tech" },
    { name: "work" },
    { name: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      scrollTop > 100 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-10 top-0 left-0 px-10 md:px-20 w-full h-[80px] flex items-center justify-between 
       ${scrolled ? "bg-background" : "bg-light text-background"}
      duration-150`}
    >
      <h1 className="z-10 text-text text-xl font-bold uppercase cursor-pointer">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setOpen(false)}
        >
          moncef
        </Link>
      </h1>
      <ul className="md:flex  hidden relative items-center justify-between space-x-[44px]">
        {navlinks.map((link) => (
          <Link
            key={link.name}
            onClick={() => setActive(link.name)}
            to={link.name}
            spy={true}
            smooth={true}
            duration={500}
            className={
              active === link.name
                ? "text-text duration-150 text-base font-normal cursor-pointer capitalize"
                : "text-gray-500 duration-150 text-base font-normal cursor-pointer capitalize"
            }
          >
            {link.name}
          </Link>
        ))}
      </ul>
      {/* mobile menu */}

      <div className="flex md:hidden relative text-text">
        <BiMenuAltRight
          size={40}
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        />
        <AnimatePresence mode="wait" initial={false}>
          {open && (
            <motion.div
              {...framerSidebarBackground}
              className=" py-5     bg-background top-0 right-0 w-full h-screen fixed"
            >
              <div className="flex px-10 w-full items-end justify-end">
                <BiX
                  size={40}
                  className="cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
              <ul className=" relative flex flex-col h-full items-center justify-center space-y-[40px]">
                {navlinks.map((link, indx) => (
                  <Link
                    {...framerText(indx)}
                    key={link.name}
                    onClick={() => {
                      setOpen(false);
                      setActive(link.name);
                    }}
                    to={link.name}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={
                      active === link.name
                        ? "text-text duration-150 text-4xl select-none font-normal cursor-pointer capitalize"
                        : "text-gray-500 duration-150 text-4xl select-none font-normal cursor-pointer capitalize"
                    }
                  >
                    {link.name}
                  </Link>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const framerSidebarBackground = {
  initial: { opacity: 0, x: "100%" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100%", transition: { delay: 0.1 } },
  transition: { duration: 0.2 },
};
const framerText = (delay) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  };
};
export default Navbar;
