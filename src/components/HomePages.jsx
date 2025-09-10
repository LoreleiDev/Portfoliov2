import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, ExternalLink, GithubIcon } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import photo from "../assets/Foto.webp";

export default function Home() {
  const handleClick = () => {
    window.open(
      "https://github.com/loreleidev?tab=repositories",
      "_blank"
    );
  };
  const Certificate = () => {
    window.open(
      "https://drive.google.com/drive/folders/150u0qK9sBfgHwiRqgQ72nJTr2q2cVA2m",
      "_blank"
    );
  };
  const CV = () => {
    window.open(
      "https://drive.google.com/drive/folders/15-_OmPQYaLhiVzxYO3-GinjBgIKNVdHu",
      "_blank"
    );
  };
  return (
    <section
      id="home"
      className="min-h-screen bg-black relative flex items-center justify-center scroll-mt-32 pt-[50px] pb-5"
    >
      {/* Background geometric elements */}
      <div className="absolute inset-0 ">
        {/* Red geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-red-600 transform rotate-45 opacity-20"
          animate={{ rotate: [45, 90, 45] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-24 h-24 bg-red-500 transform rotate-12 opacity-30"
          animate={{ rotate: [12, 57, 12] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 bg-white transform -rotate-45 opacity-10"
          animate={{ rotate: [-45, 0, -45] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Diagonal lines */}
        <div className="absolute top-0 left-80 w-1 h-full bg-gradient-to-b from-red-600 to-transparent opacity-30 transform -skew-x-12" />
        <div className="absolute top-0 right-80 w-1 h-full bg-gradient-to-b from-white to-transparent opacity-20 transform skew-x-12" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between min-h-screen py-12 md:py-0">
          <div className="md:w-3/5 lg:w-3/5 xl:w-2/3">
            {/* header bar */}
            <motion.div
              className="mb-8 flex items-center space-x-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>

            {/* Mobile photo - only visible on small screens */}
            <motion.div
              className="flex justify-center md:hidden mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.0 }}
            >
              <div className="relative">
                <div className="relative w-48 h-60 transform -skew-y-3">
                  <div className="absolute inset-0 bg-red-600 transform skew-y-2 shadow-[8px_8px_0px_black]" />
                  <div className="absolute inset-1 bg-black transform skew-y-1 border-2 border-white">
                    <img
                      src={photo || "/placeholder.svg"}
                      alt="foto gweh"
                      className="w-full h-full object-cover transform -skew-y-1 pointer-events-none select-none"
                    />
                  </div>
                </div>
                {/* Mobile decorative elements */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-white transform rotate-45" />
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-600 transform rotate-45" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-red-600 transform rotate-45" />
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-white transform rotate-45" />
              </div>
            </motion.div>

            {/* Main text section */}
            <motion.div
              className="space-y-6 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Main title */}
              <div className="relative">
                <h1 className="text-3xl max-[480px]:text-[20px] xs:text-md sm:text-md md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-wider relative z-10">
                  <span className="inline-block font-Persona5hatty transform -skew-x-6 bg-red-600 px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 shadow-[4px_4px_0px_white] sm:shadow-[6px_6px_0px_white] lg:shadow-[8px_8px_0px_white] border-2 border-white">
                    RADITYA NALA ARGYA WIJAYA
                  </span>
                  <br />
                  <span className="inline-block font-persona5 transform skew-x-3 bg-black xs:px-2 xs:py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 mt-2 sm:mt-3 lg:mt-4 shadow-[4px_4px_0px_white] sm:shadow-[6px_6px_0px_white] lg:shadow-[8px_8px_0px_white] border-2 border-white whitespace-nowrap min-w-[200px]">
                    <TypeAnimation
                      sequence={[
                        "WEB PROGRAMMER",
                        2000,
                        "FRONTEND DEV",
                        2000,
                        "JUNIOR PROGRAMMER",
                        2000,
                      ]}
                      speed={50}
                      repeat={Number.POSITIVE_INFINITY}
                      wrapper="span"
                      cursor={true}
                    />
                  </span>
                </h1>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-2 sm:-top-3 lg:-top-4 -right-2 sm:-right-3 lg:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-red-600 transform rotate-45"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>

              {/* Subtitle */}
              <motion.div
                className="relative bg-black border-l-4 border-red-600 pl-4 sm:pl-6 py-3 sm:py-4 max-w-full lg:max-w-2xl"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-white transform rotate-45 -translate-x-1 -translate-y-1" />
                <p className="text-lg xs:text-2xl sm:text-2xl lg:text-3xl xl:text-4xl max-[480px]:text-3xl text-white leading-relaxed italic">
                  I'm a{" "}
                  <span className="text-red-500 font-bold font-Persona5hatty tracking-wider">
                    JUNIOR WEB PROGRAMMER
                  </span>{" "}
                  <br />
                  and student from{" "}
                  <span className="text-red-500 font-bold font-Persona5hatty tracking-wider">
                    SMKN 2 SURABAYA
                  </span>{" "}
                  <br />
                  —
                  <br />
                  <span className="text-red-500 font-persona5">
                    "Nothing can come of nothing."
                  </span>
                </p>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-600 transform rotate-45 translate-x-1 translate-y-1" />
              </motion.div>

              {/* Action buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Button
                  asChild
                  onClick={CV}
                  className="group bg-red-600 hover:bg-red-700 text-white px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4 transform skew-x-[-12deg] shadow-[4px_4px_0px_white] sm:shadow-[6px_6px_0px_white] border-2 border-black transition-all duration-300 hover:shadow-[6px_6px_0px_white] sm:hover:shadow-[8px_8px_0px_white] hover:translate-x-[-2px] hover:translate-y-[-2px] cursor-pointer"
                >
                  <a className="flex items-center justify-center space-x-2 transform skew-x-[12deg] text-sm sm:text-base">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-Persona5hatty tracking-wider text-xl">
                      View My CV
                    </span>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                <Button
                  asChild
                  onClick={Certificate}
                  className="group bg-black hover:bg-gray-900 text-white px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4 transform skew-x-[12deg] shadow-[4px_4px_0px_white] sm:shadow-[6px_6px_0px_white] border-2 border-white transition-all duration-300 hover:shadow-[6px_6px_0px_white] sm:hover:shadow-[8px_8px_0px_white] hover:translate-x-[-2px] hover:translate-y-[-2px] cursor-pointer"
                >
                  <a className="flex items-center justify-center space-x-2 transform skew-x-[12deg] text-sm sm:text-base">
                    <span className="font-Persona5hatty tracking-wider text-xl">
                      View Certificate
                    </span>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
              {/* Mobile GitHub button */}
              <div className="flex justify-center md:hidden mt-4">
                <Button
                  onClick={handleClick}
                  className="relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white  font-bold text-xs sm:text-sm tracking-wider px-6 py-3 transform transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 border-2 border-red-500 clip-path-polygon uppercase group overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    SEE MY GITHUB
                    <GithubIcon className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>

                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                  {/* Sharp edge highlight */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Photo section */}
          <motion.div
            className="hidden md:flex justify-end lg:w-2/5 xl:w-1/3 lg:pl-8 xl:pl-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            <div className="relative">
              {/* Main photo container */}
              <div className="relative w-56 h-72 md:w-60 md:h-76 lg:w-64 lg:h-80 xl:w-72 xl:h-96 transform -skew-y-1 ">
                <div className="absolute inset-0 bg-red-600 transform skew-y-1 shadow-[8px_8px_0px_black] " />
                <div className="absolute inset-1 bg-black transform skew-y-1 border-2 border-white ">
                  <img
                    src={photo || "/placeholder.svg"}
                    alt="foto gweh"
                    className="w-full h-full object-cover transform -skew-y-1 pointer-events-none select-none"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-white transform rotate-45" />
              <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-red-600 transform rotate-45" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-red-600 transform rotate-45" />
              <div className="absolute -bottom-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-white transform rotate-45" />

              {/* Floating accent shapes */}
              <motion.div
                className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-4 h-4 sm:w-6 sm:h-6 bg-red-600 transform rotate-45"
                animate={{ rotate: [45, 90, 45], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-white transform rotate-45"
                animate={{ rotate: [45, 0, 45], scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />

              {/* github */}
              <motion.div
                className="absolute -bottom-8 hidden md:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <Button
                  onClick={handleClick}
                  className="
                  relative
                  bg-gradient-to-r from-red-600 to-red-700
                hover:from-red-700 hover:to-red-800
                text-white
                  font-Persona5hatty
                  text-xs sm:text-sm
                  tracking-wider
                  px-6 py-3
                  transform
                  transition-all
                  duration-200
                  hover:scale-105
                  hover:shadow-lg
                hover:shadow-red-500/25
                  clip-path-polygon
                  uppercase
                  group
                  overflow-hidden
                  "
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    SEE MY GITHUB
                    <GithubIcon className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>

                  {/* Animated background effect */}
                  <div
                    className="
          absolute inset-0 
          bg-gradient-to-r from-yellow-400 to-red-500 
          opacity-0 
          group-hover:opacity-20 
          transition-opacity 
          duration-300
        "
                  />

                  {/* Sharp edge highlight */}
                  <div
                    className="
          absolute top-0 left-0 
          w-full h-0.5 
          bg-gradient-to-r from-transparent via-white to-transparent 
          opacity-60
        "
                  />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <div className="w-12 h-1 bg-red-600 transform skew-x-[-12deg]" />
        <div className="w-2 h-2 bg-white transform rotate-45" />
        <div className="w-12 h-1 bg-white transform skew-x-[12deg]" />
      </motion.div>
      <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-red-600" />

      <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-white" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4  border-white" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4  border-red-600" />
    </section>
  );
}
