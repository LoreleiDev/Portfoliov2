import { ArrowBigUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function BackTop() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      const { top, bottom } = homeSection.getBoundingClientRect();
      setShowButton(bottom < 0 || top > window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showButton && (
      <button
        onClick={() =>
          document.getElementById("home").scrollIntoView({ behavior: "smooth" })
        }
        className="fixed bottom-4 right-4 px-2 py-2 z-50 bg-transparent text-white font-bold text-lg transform -skew-x-12 transition-all duration-200 border-2 border-red-600 shadow-lg hover:bg-red-600 hover:shadow-2xl hover:shadow-red-600/50 hover:scale-105 active:scale-95 overflow-hidden"
      >
        <ArrowBigUp className="w-8 h-8"/>
      </button>
    )
  );
}
