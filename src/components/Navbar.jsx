import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "motion/react";
import logoImage from "../assets/LP-removebg-preview.webp";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "GALLERY", href: "#gallery" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
  const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
  const handleScroll = () => {
    const scrollPos = window.scrollY + window.innerHeight / 3;

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          const newHash = `#${id}`;
          if (activeHash !== newHash) {
            setActiveHash(newHash);
            window.history.replaceState(null, "", newHash);
          }
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // inisialisasi awal

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [activeHash]);


  const handleNavClick = (href) => {
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
  setActiveHash(href); // langsung update agar nav active juga klik langsung
  setOpen(false); // tutup menu mobile
};

  return (
    <nav className="z-50 bg-[#000000] text-white text-2xl font-bold font-persona5 fixed top-0 w-full">
      {/* scroll indicator */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 75,
          left: 0,
          right: 0,
          height: 3,
          originX: 0,
          backgroundColor: "#e60012",
        }}
      />
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 80,
          left: 0,
          right: 0,
          height: 2,
          originX: 1,
          backgroundColor: "white",
        }}
      />
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <img
          src={logoImage}
          alt="Lorelei Project Logo"
          className="h-12 md:h-14 transition duration-300 hover:filter hover:brightness-0 hover:invert"
        />

        <button
          className="md:hidden relative w-8 h-8 z-50 right-5"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`absolute h-1 w-full bg-red-600 rounded transition-all duration-300 ease-in-out ${
              open ? "rotate-45 top-3.5" : "top-1"
            }`}
          />
          <span
            className={`absolute h-1 w-full bg-red-600 rounded transition-all duration-300 ease-in-out ${
              open ? "opacity-0" : "top-3.5"
            }`}
          />
          <span
            className={`absolute h-1 w-full bg-red-600 rounded transition-all duration-300 ease-in-out ${
              open ? "-rotate-45 top-3.5" : "top-6"
            }`}
          />
        </button>

        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.2, x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative hover:text-red-500 after:block after:h-[3px] after:bg-red-600 after:transition-transform after:origin-left after:duration-300 ${
                  activeHash === link.href
                    ? "text-red-500 after:scale-x-100"
                    : "text-white after:scale-x-0"
                }`}
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.4 }}
            className="md:hidden fixed top-24 right-4 "
          >
            <ul className="relative w-72 h-[300px]">
              {navLinks.map((link, i) => {
                const positions = [
                  { top: "-90px", right: "90px", rotate: -11 },
                  { top: "-40px", right: "80px", rotate: -9 },
                  { top: "6px", right: "40px", rotate: -6 },
                  { top: "54px", right: "1px", rotate: -4 },
                ];
                const { top, right, rotate } = positions[i % positions.length];
                const bg = i % 2 === 0 ? "bg-black" : "bg-black";

                return (
                  <motion.li
                    key={i}
                    whileHover={{ scale: 1.05, x: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute"
                    style={{ top, right }}
                  >
                    <div
                      className={`text-[#ffffff] font-extrabold text-lg px-4 py-2 shadow-[4px_4px_0px_white] border-4 border-[red] ${bg}`}
                      style={{
                        transform: `rotate(${rotate}deg) skewX(20deg)`,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className={`block ${
                          activeHash === link.href
                            ? "border-b-4 border-white pb-1 text-[red] "
                            : ""
                        }`}
                        style={{ transform: "skewX(-20deg)" }}
                      >
                        {link.name}
                      </a>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
