import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import gifSplash from "../assets/finishjoker.gif"; 
import slashImage from "../assets/slash.png"; 

export default function Load({ onFinish }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showGif, setShowGif] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showSlashImage, setShowSlashImage] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    let percentage = 0;
    const interval = setInterval(() => {
      percentage += 1;
      setProgress(percentage);

      if (percentage >= 100) {
        clearInterval(interval);

        // Delay sebelum tampil slash
        setTimeout(() => {
          setShowSlashImage(true);

          // Delay untuk menyembunyikan slash dan tampilkan GIF
          setTimeout(() => {
            setShowSlashImage(false);
            setShowGif(true);

            // Setelah GIF selesai, tampilkan welcome
            setTimeout(() => {
              setShowGif(false);
              setShowWelcome(true);

              // Setelah welcome, selesai
              setTimeout(() => {
                setVisible(false);
                document.body.classList.remove("overflow-hidden");
                if (onFinish) onFinish();
              }, 2000);
            }, 3000);
          }, 2000); // Durasi animasi slash
        }, 1000); // Delay setelah 100%
      }
    }, 65); // puluhan per 1 detik 

    return () => {
      clearInterval(interval);
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            y: "100%",
            transition: { duration: 0.1, ease: "easeInOut" },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Animasi Slash */}
          {showSlashImage && (
            <motion.img
              src={slashImage}
              alt="Persona Slash"
              className="absolute right-0 w-full max-w-none h-auto z-[70]"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          )}

          {/* Welcome Screen */}
          {showWelcome ? (
            <motion.div
              className="w-full h-full flex items-center justify-center bg-black flex-col"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                y: "100%",
                transition: { duration: 0.1, ease: "easeInOut" },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-white text-4xl md:text-6xl font-Persona5hatty text-center px-4">
                WELCOME TO THE
              </h1>
              <h1 className="text-white text-4xl md:text-6xl font-persona5 text-center px-4">
                PALACE
              </h1>
            </motion.div>
          ) : showGif ? (
            <>
              <motion.div className="absolute top-0 left-0 w-full h-[60px] md:h-[80px] bg-black z-[60]" />
              <motion.div className="absolute bottom-0 left-0 w-full h-[60px] md:h-[80px] bg-black z-[60]" />

              <motion.div
                className="w-full h-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  y: "100%",
                  transition: { duration: 0.1, ease: "easeInOut" },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src={gifSplash}
                  alt="Persona Slash"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </>
          ) : (
            <>
              {/* RED SLASH */}
              <motion.div
                className="absolute w-[160%] h-[70%] bg-red-600"
                style={{
                  clipPath: `polygon(0% 0%, 100% 5%, 95% 100%, 0% 95%)`,
                  boxShadow: "0 0 20px rgba(0,0,0,0.5)",
                }}
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                exit={{
                  y: "100%",
                  transition: { duration: 0.1, ease: "easeInOut" },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* TEXT */}
              <motion.h1
                className="z-10 text-white text-4xl md:text-5xl font-persona5 text-center px-4"
                style={{
                  transform: "skew(-10deg)",
                  textShadow: "2px 2px 0px #000",
                }}
                initial={{ scale: 0.6, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{
                  scale: 0.8,
                  opacity: 0,
                  y: -50,
                  transition: { duration: 0.5 },
                }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                TAKE YOUR TIME...
              </motion.h1>

              {/* Loading Bar */}
              <div className="z-10 mt-6 flex items-center gap-2 px-4 w-full justify-center">
                <motion.div
                  className="relative w-[90vw] max-w-sm h-5 md:h-6 bg-black rounded-[4px] border-4 border-white shadow-[0_0_0_2px_#ff0000] overflow-hidden"
                  style={{ transform: "skewX(-15deg)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.3 }}
                >
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-white"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                </motion.div>

                <motion.span
                  className="text-white text-2xl md:text-3xl font-bold w-[50px] text-right font-persona5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  {progress}%
                </motion.span>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
