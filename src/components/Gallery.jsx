import GalleryCard from "../components/GalleryCard";
import { motion } from "motion/react";
import portfolio from "../assets/projects/portfoliov1.webp";
import portfolio2 from "../assets/projects/portfoliov2.webp";
import musicplayer from "../assets/projects/MusicPlayer.webp";
import ecommerce from "../assets/projects/e-commerce.webp";
import laravelcrud from "../assets/projects/Laravel-CRUD.webp";
import construct from "../assets/projects/Construct3.webp";
import { useState } from "react";

export default function Gallery() {
  const [modalMessage, setModalMessage] = useState(null);

  const projects = [
    {
      title: "Portfolio Website V1",
      description: "Saya membuat Portfolio Website pertama saya menggunakan Bootstrap5.",
      imageUrl: portfolio,
      projectUrl: "https://shikein-lorelei.github.io/Portfolio/",
      repoUrl: "https://github.com/Shikein-Lorelei/Portfolio",
    },
    {
      title: "Portfolio Website V2",
      description: "Saya meng-Upgrade Portfolio saya jadi memakai Reactjs dan Tailwindcss. Saya terinspirasi dari design UI Game Persona 5, dan saya mengimplementasikannya untuk tampilan UI web Portfolio saya yang kedua ini.",
      imageUrl: portfolio2,
      projectUrl: "#modal",
      repoUrl: "https://github.com/Shikein-Lorelei/Portfoliov2",
    },
    {
      title: "Laravel CRUD",
      description: "Saya membuat CRUD dari Web Portfolio pertama saya. Saya membuatnya menggunakan Laravel 11 dan Filament.",
      imageUrl: laravelcrud,
      projectUrl: "#modal",
      repoUrl: "https://github.com/Shikein-Lorelei/Portfolio-Laravel",
    },
    {
      title: "Game Berbasis Web Construct3",
      description: "Saya membuat beberapa game sederhana dengan menggunakan Construct3.",
      imageUrl: construct,
      projectUrl: "#modal",
      repoUrl: "https://github.com/Shikein-Lorelei/Construct-Game",
    },
    {
      title: "E-Commerce",
      description: "Saya Membuat Website E-Commerce Menggunakan PHP dan SQL. Sebenarnya ini adalah tugas akhir saya di pertengahan kelas 11. Dan saya ikut andil sebagai Front-end.",
      imageUrl: ecommerce,
      projectUrl: "#modal",
      repoUrl: "https://github.com/Shikein-Lorelei/Immersive.",
    },
    {
      title: "Music Player",
      description:
        "Saya membuat Music Player sederhana menggunakan React sebagai Front-end dan MongoDB, Express sebagai Back-end. Web saya yang satu ini juga memiliki fitur CRUD untuk mengupload lagu yang ada di memori.",
      imageUrl: musicplayer,
      projectUrl: "#modal",
      repoUrl: "https://github.com/Shikein-Lorelei/LoreleiMusic",
    },
  ];

  const handleProjectClick = (project) => {
    if (project.projectUrl === "#modal") {
      setModalMessage(`"${project.title}" tidak memiliki tautan proyek.`);
    } else {
      window.open(project.projectUrl, "_blank");
    }
  };

  const closeModal = () => {
    setModalMessage(null);
  };

  return (
    <section
      id="gallery"
      className="min-h-screen bg-black relative flex items-center justify-center scroll-mt-32"
    >
      {/* Hiasan pinggir pojok */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-red-600" />
      <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-white" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-white" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-red-600" />
      {/* Warna background */}
      <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-b from-transparent via-white/10 to-transparent transform skew-x-6 rotate-45"></div>
      <div className="absolute bottom-0 left-0 w-1/6 h-full bg-gradient-to-b from-transparent via-red-600/10 to-transparent transform -skew-x-6 -rotate-45"></div>
      {/* Hiasan paling bawah */}
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
      {/* Diagonal lines */}
      <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-20 transform skew-x-12 " />
      <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20 transform -skew-x-12" />
      {/* Background geometric elements */}
      <div className="absolute inset-0 ">
        {/* Red geometric shapes */}
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

      <div className="relative z-10 container mx-auto px-6 py-28 text-center">
        {/* header */}
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 mb-16"></div>
            <h1 className="relative text-6xl md:text-8xl mb-4 transform -skew-x-6">
              <span className="inline-block font-persona5 text-red-600 transform -skew-x-6 bg-red-600/20 px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 shadow-[4px_4px_0px_red] sm:shadow-[6px_6px_0px_red] lg:shadow-[8px_8px_0px_red] border-2 border-[red]">
                GALLERY
              </span>
            </h1>
          </div>
          <div className="relative z-10 container mx-auto px-6 py-2 text-center"></div>
          <div className="block mx-auto bg-gradient-to-r from-red-600 to-red-700 p-1 transform -skew-x-6">
            <div className="bg-black p-6 transform skew-x-6 items-center">
              <p className="text-xl md:text-2xl font-bold font-Persona5hatty tracking-wider text-red-600 transform -skew-x-6 break-words min-w-[200px]">
                "Each line of code tells a story of creativity and problem-solving. Discover the artistry behind the algorithms."
              </p>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-600"></div>
            </div>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
            {projects.map((project, index) => (
              <GalleryCard
                key={index}
                title={project.title}
                category={project.category}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                repoUrl={project.repoUrl}
                onProjectClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {modalMessage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-black shadow-[6px_6px_0px_red] border-2 border-white p-8 text-center transform -skew-y-1 hover:border-red-600 transition-all duration-300 relative overflow-hidden max-w-xs">
            <h3 className="text-3xl font-persona5 text-red-600 mb-4">Notification</h3>
            <p className="text-white font-Persona5hatty tracking-wider text-xl mb-4">{modalMessage}</p>
            <button
              onClick={closeModal}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white transform -skew-x-12 px-6 py-2 font-bold font-persona5 text-2xl tracking-wider hover:scale-105 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
