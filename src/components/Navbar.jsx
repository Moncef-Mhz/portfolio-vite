import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const navlinks = [
    { name: "home" },
    { name: "about" },
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
      className={`fixed z-10 top-0 left-0 px-20 w-full h-[80px] flex items-center justify-between ${
        scrolled ? "bg-background" : "bg-light text-background"
      } duration-150`}
    >
      <h1 className="text-text text-xl font-bold uppercase cursor-pointer">
        moncef.dev
      </h1>
      <ul className="flex items-center justify-between space-x-[44px]">
        {navlinks.map((link) => (
          <li key={link.name}>
            <a href={`#${link.name}`}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
