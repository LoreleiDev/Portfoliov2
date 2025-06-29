import { useState, useRef, useEffect } from "react";
import { Play, Pause, X, CalendarIcon } from "lucide-react";
import { LayersIcon } from "@radix-ui/react-icons";
import musicSrc from "../assets/music/Joy.ogg";
import thumbImage from '../assets/mask.webp';

export default function Features() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [currentTime, setCurrentTime] = useState(new Date());

  const audioRef = useRef(null);
  const dropdownRef = useRef(null);
  const isTogglingRef = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume; // Update volume
    }
  }, [volume]);

  const toggleMusic = async () => {
    if (isTogglingRef.current) return;

    isTogglingRef.current = true;

    try {
      if (audioRef.current.paused) {
        await audioRef.current.play();
        setIsMusicPlaying(true);
      } else {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      }
    } finally {
      isTogglingRef.current = false;
    }
  };

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
    setIsDropdownOpen(false);
  };

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const date = currentTime.getDate().toString().padStart(2, "0");
  const month = currentTime
    .toLocaleDateString("en-US", { month: "short" })
    .toUpperCase();
  const day = currentTime
    .toLocaleDateString("en-US", { weekday: "short" })
    .toUpperCase();
  const year = currentTime.getFullYear();

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={musicSrc} type="audio/mpeg" />
      </audio>

      <div className="fixed top-56 right-4 z-50" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="bg-red-700 text-white font-bold text-lg transform px-3 py-3 -skew-x-12 transition-all duration-200 border-2 border-red-600 shadow-lg hover:bg-red-600  hover:scale-105 active:scale-95 relative overflow-hidden"
        >
          <span className="transform skew-x-12 block">
            <LayersIcon className="w-6 h-6" />
          </span>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 w-64 bg-black border-2 border-red-600 transform -skew-x-6">
            <button
              onClick={toggleCalendar}
              className="w-full px-6 py-4 text-left text-white font-bold hover:bg-red-600 transition-colors duration-200 border-b border-red-600/30 flex items-center gap-3 transform -skew-x-5"
            >
              <CalendarIcon className="w-5 h-5" />
              <span>CALENDAR</span>
              <span className="ml-auto text-sm text-red-400">
                {isCalendarVisible ? "ON" : "OFF"}
              </span>
            </button>

            <button
              onClick={toggleMusic}
              className="w-full px-6 py-4 text-left text-white font-bold hover:bg-red-600 transition-colors duration-200 flex items-center gap-3 transform -skew-x-5"
            >
              <div
                className={`transition-transform duration-200 ${
                  isMusicPlaying ? "animate-pulse" : ""
                }`}
              >
                {isMusicPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </div>
              <span>BACKGROUND MUSIC</span>
              <span className="ml-auto text-sm text-red-400">
                {isMusicPlaying ? "ON" : "OFF"}
              </span>
            </button>

            <div className="px-6 py-4 text-white">
              <label htmlFor="volume" className="block text-sm mb-2">
                Volume
              </label>
              <div className="relative">
      {/* Background Track */}
      <div className="absolute inset-0 h-[6px] bg-gradient-to-r from-black/95 to-red-600 rounded-md pointer-events-none"></div>
      
      {/* Input Slider */}
      <input
        id="volume"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="relative w-full pb-5 h-6 appearance-none bg-transparent z-10 cursor-pointer 
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 
          [&::-webkit-slider-thumb]:rounded-full"
        style={{
          '--thumb-image': `url(${thumbImage})`, // Menggunakan gambar impor
        }}
      />
      <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            background-image: var(--thumb-image);
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            appearance: none;
          }
        `}
      </style>
    </div>
            </div>
          </div>
        )}
      </div>

      {isCalendarVisible && (
        <div className="fixed top-72 right-4 z-40">
          <div className="bg-black border-2 border-red-600 shadow-xl w-48 font-mono relative">
            <div className="bg-red-600 text-black px-3 py-1 text-xs font-bold flex justify-between items-center">
              <span>TIME & DATE</span>
              <button
                onClick={() => setIsCalendarVisible(false)}
                className="text-black hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3">
              <div className="text-center mb-3">
                <div className="text-2xl font-bold text-white">
                  {hours}:{minutes}
                </div>
                <div className="text-xs text-gray-400">
                  {day}, {month} {date}, {year}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1 text-center text-xs">
                <div className="border border-red-600 p-1">
                  <div className="text-red-600 font-bold">DAY</div>
                  <div className="text-white">{day}</div>
                </div>
                <div className="bg-red-600 text-black p-1">
                  <div className="font-bold">DATE</div>
                  <div className="font-bold">{date}</div>
                </div>
                <div className="border border-white p-1">
                  <div className="text-red-600 font-bold">YEAR</div>
                  <div className="text-white text-xs">{year}</div>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-white"></div>
          </div>
        </div>
      )}
    </>
  );
}
