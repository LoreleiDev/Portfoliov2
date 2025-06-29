import { useState } from "react";
import {
  Code,
  Database,
  Globe,
  Server,
  ChevronRight,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import run from "../assets/morganarun.webp";
import html5 from "../assets/icons/html.webp";
import css3 from "../assets/icons/css.webp";
import js from "../assets/icons/js.webp";
import react from "../assets/icons/react.webp";
import tailwind from "../assets/icons/tailwind.webp";
import bootstrap from "../assets/icons/bootstrap5.webp";
import laravel from "../assets/icons/laravel.webp";
import vite from "../assets/icons/vite.webp";
import express from "../assets/icons/express.webp";
import filament from "../assets/icons/filament.webp";
import vscode from "../assets/icons/vscode.webp";
import railway from "../assets/icons/railway.webp";
import nodejs from "../assets/icons/nodejs.webp";
import mysql from "../assets/icons/mysql.webp";
import mongodb from "../assets/icons/mongodb.webp";
import vercel from "../assets/icons/vercel.webp";
import git from "../assets/icons/git.webp";
import php from "../assets/icons/php.webp";
import github from "../assets/icons/github.webp";

export default function About() {
  const techStacks = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      technologies: [
        {
          name: "HTML",
          logo: html5,
          color: "text-orange-500",
          url: "https://www.w3schools.com/html/",
        },
        {
          name: "CSS",
          logo: css3,
          color: "text-cyan-500",
          url: "https://www.w3schools.com/css/",
        },
        {
          name: "JavaScript",
          logo: js,
          color: "text-yellow-500",
          url: "https://www.w3schools.com/js/",
        },
        {
          name: "React",
          logo: react,
          color: "text-blue-400",
          url: "https://www.w3schools.com/react/",
        },
        {
          name: "Tailwind CSS",
          logo: tailwind,
          color: "text-cyan-400",
          url: "https://v3.tailwindcss.com/docs/installation",
        },
        {
          name: "Bootstrap",
          logo: bootstrap,
          color: "text-[#860afb]",
          url: "https://www.w3schools.com/bootstrap/",
        },
        {
          name: "Vite",
          logo: vite,
          color: "text-[#860afb]",
          url: "https://vite.dev/guide/",
        },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      technologies: [
        {
          name: "Node.js",
          logo: nodejs,
          color: "text-green-500",
          url: "https://nodejs.org/docs/latest/api/",
        },
        {
          name: "Express",
          logo: express,
          color: "text-gray-300",
          url: "https://expressjs.com/en/starter/installing.html",
        },
        {
          name: "Laravel",
          logo: laravel,
          color: "text-red-500",
          url: "https://laravel.com/docs/11.x",
        },
        {
          name: "Filament",
          logo: filament,
          color: "text-orange-500",
          url: "https://filamentphp.com/docs",
        },
        {
          name: "MongoDB",
          logo: mongodb,
          color: "text-green-500",
          url: "https://www.mongodb.com/docs/",
        },
        {
          name: "MySQL",
          logo: mysql,
          color: "text-red-500",
          url: "https://dev.mysql.com/doc/",
        },
        {
          name: "PHP",
          logo: php,
          color: "text-blue-500",
          url: "https://www.php.net/docs.php",
        },
      ],
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      technologies: [
        {
          name: "MongoDB",
          logo: mongodb,
          color: "text-green-500",
          url: "https://www.mongodb.com/docs/",
        },
        {
          name: "MySQL",
          logo: mysql,
          color: "text-red-500",
          url: "https://dev.mysql.com/doc/",
        },
      ],
    },
    {
      category: "Tools",
      icon: <Code className="w-6 h-6" />,
      technologies: [
        {
          name: "Git",
          logo: git,
          color: "text-orange-500",
          url: "https://git-scm.com/",
        },
        {
          name: "GitHub",
          logo: github,
          color: "text-white",
          url: "https://github.com/",
        },
        {
          name: "Vercel",
          logo: vercel,
          color: "text-white",
          url: "https://vercel.com/",
        },
        {
          name: "Railway",
          logo: railway,
          color: "text-white",
          url: "https://railway.com/",
        },
        {
          name: "VS Code",
          logo: vscode,
          color: "text-blue-400",
          url: "https://code.visualstudio.com/",
        },
      ],
    },
  ];

  const [selectedStack] = useState(null);
  const [showAllOut, setShowAllOut] = useState(false);
  const [showGif, setShowGif] = useState(false);

  // logika button all out
  const triggerAllOut = () => {
    setShowAllOut(true);

    // Setelah x detik tampilkan GIF
    setTimeout(() => {
      setShowAllOut(false);
      setShowGif(true);

      // Setelah x detik, hilangkan GIF dan scroll ke contact
      setTimeout(() => {
        setShowGif(false);
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 2000); // durasi gif loading
    }, 1500); // durasi all-out attack
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white relative scroll-mt-32"
    >
      {/* Background geometric elements */}
      <div className="absolute inset-0 ">
        {/* Red geometric shapes */}
        <motion.div
          className="absolute top-10 right-20 w-32 h-32 bg-red-600 transform rotate-45 opacity-20"
          animate={{ rotate: [45, 90, 45] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-red-600 transform rotate-45 opacity-20"
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
          className="absolute bottom-20 right-16 w-24 h-24 bg-red-500 transform rotate-12 opacity-30"
          animate={{ rotate: [12, 57, 12] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 bg-white transform rotate-12 opacity-10"
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
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-white transform -rotate-45 opacity-10"
          animate={{ rotate: [-45, 0, -45] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
      {/* hiasan paling bawah */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <div className="w-12 h-1 bg-red-600 transform skew-x-[-12deg]" />
        <div className="w-2 h-2 bg-white transform rotate-45" />
        <div className="w-12 h-1 bg-white transform skew-x-[12deg]" />
      </motion.div>
      {/* hiasan pinggir pojok */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-4  border-red-600" />
      <div className="absolute top-0 right-0 w-16 h-16 border-r-4  border-white" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4  border-white" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4  border-red-600" />
      <div className="absolute inset-0">
        {/* warna background */}
        <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-b from-transparent via-white/10 to-transparent transform -skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-1/6 h-full bg-gradient-to-b from-transparent via-red-600/10 to-transparent transform skew-x-12"></div>
        {/* hiasan garis tangga */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-2 bg-red-600 transform skew-y-12"
              style={{
                top: `${i * 5}%`,
                left: `${i * 2}%`,
                width: "100px",
              }}
            />
          ))}
        </div>
        {/* hiasan garis merah */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-2 bg-white transform -skew-y-12"
              style={{
                top: `${i * 5}%`,
                right: `${i * 2}%`,
                width: "100px",
              }}
            />
          ))}
        </div>
      </div>
      {/* Diagonal lines */}
      <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-20 transform skew-x-12 " />
      <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20 transform -skew-x-12" />
      {/* show allout */}
      {showAllOut && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-red-600/90 animate-pulse">
          <div className="text-center">
            <h1 className="text-7xl font-black text-white transform -skew-x-12 animate-bounce">
              ALL-OUT
            </h1>
            <h2 className="text-6xl font-black text-yellow-300 transform skew-x-12">
              ATTACK!
            </h2>
          </div>
        </div>
      )}
      {/* show gif */}
      {showGif && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#d20000]">
          <img
            src={run}
            alt="Loading Animation"
            className="w-full h-full object-contain"
          />
          <motion.div className="absolute top-0 left-0 w-full h-[60px] md:h-[80px] bg-black z-[60]" />
          <motion.div className="absolute bottom-0 left-0 w-full h-[60px] md:h-[80px] bg-black z-[60]" />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="relative inline-block">
            <div className="absolute -inset-4"></div>
            <h1 className="relative text-6xl md:text-8xl mb-4 transform -skew-x-6">
              <span className="inline-block font-persona5 text-red-600 transform -skew-x-6 bg-red-600/20 px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 shadow-[4px_4px_0px_red] sm:shadow-[6px_6px_0px_red] lg:shadow-[8px_8px_0px_red] border-2 border-[red]">
                ABOUT ME
              </span>
            </h1>
          </div>
          {/* quotes */}
          <div className="mt-12 relative">
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 p-1 transform -skew-x-6">
              <div className="bg-black p-6 transform skew-x-6">
                <p className="text-xl md:text-2xl font-bold font-Persona5hatty tracking-wider text-red-600 transform -skew-x-6 whitespace-nowrap min-w-[200px]">
                  <TypeAnimation
                    sequence={[
                      '"Nothing can come of nothing."',
                      10000,
                      '"To be or not to be."',
                      10000,
                      '"No one can escape time."',
                      10000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    wrapper="span"
                    cursor={false}
                  />
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-600"></div>
            </div>
          </div>
          {/* nama dan about */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-red-600/30 to-transparent border-l-4 border-red-600 p-8 transform -skew-x-2 relative">
              <div className="absolute top-0 left-0 w-8 h-8 bg-red-600 transform rotate-45 -translate-x-4 -translate-y-4"></div>
              <div className="transform skew-x-2">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-200 italic">
                  Nama saya adalah{" "}
                  <span className="text-red-600 font-bold font-Persona5hatty tracking-wider">
                    RADITYA NALA ARGYA WIJAYA
                  </span>{" "}
                  , saya adalah siswa dari SMKN 2 SURABAYA, Jurusan Rekayasa Perangkat Lunak. Saya adalah orang yang tertarik dalam bidang Web Programming. Saya sudah dapat menggunakan beberapa Bahasa Pemrograman Seperti Javascript dan PHP.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-red-600 transform rotate-45 translate-x-3 translate-y-3"></div>
            </div>
          </div>
        </div>
        {/* list techstack */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-red-600 flex items-center justify-center transform rotate-45">
              <Star className="w-6 h-6 text-white transform -rotate-45" />
            </div>
            <h2 className="text-4xl font-persona5 text-white uppercase tracking-wider">
              Tech Stack
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-red-600 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-5">
            {techStacks.map((stack, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-500 ${
                  selectedStack === index ? "scale-105 z-10" : "hover:scale-102"
                }`}
              >
                <div className="relative">
                  <div className="bg-black shadow-[4px_4px_0px_red] border-2 border-white p-5 transform -skew-y-1 hover:border-red-600 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-10 h-15 bg-white hover:bg-red transform rotate-45 translate-x-8 -translate-y-8"></div>

                    <div className="transform skew-y-1 relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 transform -skew-x-12 relative">
                          <div className="transform skew-x-12">
                            {stack.icon}
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-800 transform rotate-45"></div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-persona5 text-white uppercase tracking-wider">
                            {stack.category}
                          </h3>
                          <div className="w-full h-1 bg-gradient-to-r from-red-600 to-transparent mt-1"></div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {stack.technologies.map((tech, techIndex) => (
                          <a
                            key={techIndex}
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-4 p-2 transition-all duration-300 transform hover:translate-x-2 hover:bg-red-600/10 ${
                              selectedStack === index
                                ? "translate-x-2 bg-red-600/20"
                                : "text-gray-300 hover:text-white"
                            }`}
                          >
                            <span
                              className="text-sm font-bold relative"
                              style={{
                                filter:
                                  "drop-shadow(2px 2px 0px #dc2626) drop-shadow(4px 4px 8px rgba(0,0,0,0.8))",
                              }}
                            >
                              {typeof tech.logo === "string" ? (
                                <img
                                  src={tech.logo || "/placeholder.svg"}
                                  alt={tech.name}
                                  className="w-20 h-20 flex items-center justify-center relative z-10 pointer-events-none select-none"
                                  style={{
                                    filter: "contrast(1.1) saturate(1.2)",
                                  }}
                                />
                              ) : (
                                <div
                                  className="relative z-10"
                                  style={{
                                    filter: "contrast(1.1) saturate(1.2)",
                                  }}
                                >
                                  {tech.logo}
                                </div>
                              )}
                            </span>

                            <span
                              className={`font-bold font-Persona5hatty text-2xl tracking-wider transition-colors duration-200 ${tech.color} hover:brightness-125`}
                            >
                              {tech.name}
                            </span>

                            <ChevronRight className="w-4 h-4 text-red-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center gap-2">
                        <div className="flex-1 h-1 bg-gradient-to-r from-red-600 to-transparent"></div>
                        <div className="w-3 h-3 bg-red-600 transform rotate-45"></div>
                      </div>
                    </div>
                  </div>

                  {selectedStack === index && (
                    <div className="absolute -inset-2 border-2 border-red-500 animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <button
            onClick={triggerAllOut}
            className="group relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform -skew-x-12 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300"></div>
            <div className="relative bg-[black] m-1 p-6 transform skew-x-12 group-hover:bg-gray-900 transition-all duration-300">
              <span className="text-2xl max-[480px]:text-lg font-black uppercase tracking-wider text-white transform -skew-x-12 inline-block font-persona5">
                → Contact Me ←
              </span>
            </div>
          </button>
        </div>
      </div>

      <div className="absolute top-20 right-20 w-6 h-6 bg-red-600 transform rotate-45 animate-pulse"></div>
      <div className="absolute top-40 right-40 w-4 h-4 border-2 border-red-600 transform rotate-45 animate-bounce"></div>
      <div className="absolute bottom-32 left-16 w-8 h-8 bg-gradient-to-r from-red-600 to-red-700 transform rotate-45"></div>
      <div className="absolute top-1/2 right-8 w-3 h-20 bg-gradient-to-b from-red-600 to-transparent transform -skew-x-12"></div>
    </section>
  );
}
