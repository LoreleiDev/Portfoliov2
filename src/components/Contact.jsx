import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import knife from "../assets/p5knife.webp";
import arcana from "../assets/P5arcana.webp";
import sw from "../assets/sw.webp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [activeInput, setActiveInput] = useState(null); // Track the focused input
  const [modalMessage, setModalMessage] = useState(null); // To handle modal message
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setActiveInput(field); // Set active input field
  };

  const handleBlur = () => {
    setActiveInput(null); // Clear active input field on blur
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state

    emailjs
      .send(
        "service_laou1rd",
        "template_hbczqm2",
        formData,
        "SRCRBwurEQ9RQkk4x"
      )
      .then(
        () => {
          setIsLoading(false); // Clear loading state
          setModalMessage("Message sent successfully!");
        },
        () => {
          setIsLoading(false); // Clear loading state
          setModalMessage("Failed to send message. Please try again.");
        }
      );
  };

  const closeModal = () => {
    setModalMessage(null); // Close the modal
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black relative flex items-center justify-center scroll-mt-32"
    >
      {/* Hiasan pinggir pojok */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-red-600" />
      <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-white" />

      {/* Warna background */}
      <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-b from-transparent via-white/10 to-transparent transform skew-x-6 -rotate-45"></div>
      <div className="absolute bottom-0 left-0 w-1/6 h-full bg-gradient-to-b from-transparent via-red-600/10 to-transparent transform -skew-x-6 rotate-45"></div>

      {/* Diagonal lines */}
      <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-20 transform -skew-x-12 " />
      <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20 transform skew-x-12" />

      {/* Contact Form */}
      <div className="relative text-center w-full max-w-md md:max-w-2xl">
        {/* Title */}
        <h2 className="text-4xl font-persona5 text-white mb-6 relative -z-0 py-5">
          <span className="bg-gradient-to-r from-red-600 to-red-700 text-white transform -skew-x-12 px-4 py-2 inline-block">
            CONTACT ME
          </span>
        </h2>
        <img
          src={sw}
          alt="sw"
          className="absolute mx-auto top-24 rounded-lg z-[1] pointer-events-none select-none"
        />
        <div className="relative transition-all duration-500 hover:scale-102 py-16">
          <div className="bg-black shadow-[6px_6px_0px_red] border-2 border-white p-5 md:p-10 transform -skew-y-1 hover:border-red-600 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 w-10 h-15 bg-white transform rotate-45 translate-x-8 -translate-y-8 "></div>

            {/* Active Indicator */}
            {activeInput && (
              <div
                className={`absolute w-4 h-4 bg-[red] transform rotate-45 transition-all duration-300 
      ${
        activeInput === "name"
          ? "xl:top-[20%] xl:left-[5%] lg:top-[20%] lg:left-[5%] md:top-[21%] md:left-[5%] sm:top-[17%] sm:left-[3%] xs:top-[17%] xs:left-[3%] max-[480px]:hidden"
          : ""
      } ${
                  activeInput === "email"
                    ? "xl:top-[39%] xl:left-[5%] lg:top-[39%] lg:left-[5%] md:top-[40%] md:left-[5%] sm:top-[36%] sm:left-[3%] xs:top-[36%] xs:left-[3%] max-[480px]:hidden"
                    : ""
                } ${
                  activeInput === "message"
                    ? "xl:top-[69%] xl:left-[5%] lg:top-[69%] lg:left-[5%] md:top-[69%] md:left-[5%] sm:top-[69%] sm:left-[3%] xs:top-[69%] xs:left-[3%] max-[480px]:hidden"
                    : ""
                }`}
              ></div>
            )}

            {activeInput && (
              <div
                className={`absolute w-4 h-4 bg-[red] transform rotate-45 transition-all duration-300 
      ${
        activeInput === "name"
          ? "xl:top-[9%] xl:right-[5%] lg:top-[9%] lg:right-[5%] md:top-[10%] md:right-[5%] sm:top-[6%] sm:right-[3%] xs:top-[6%] xs:right-[3%] max-[480px]:hidden"
          : ""
      } ${
                  activeInput === "email"
                    ? "xl:top-[28%] xl:right-[5%] lg:top-[28%] lg:right-[5%] md:top-[29%] md:right-[5%] sm:top-[25%] sm:right-[3%] xs:top-[25%] xs:right-[3%] max-[480px]:hidden"
                    : ""
                } ${
                  activeInput === "message"
                    ? "xl:top-[46%] xl:right-[5%] lg:top-[46%] lg:right-[5%] md:top-[47%] md:right-[5%] sm:top-[43%] sm:right-[3%] xs:top-[43%] xs:right-[3%] max-[480px]:hidden"
                    : ""
                }`}
              ></div>
            )}

            {activeInput && (
              <img
                src={knife}
                alt="knife"
                className={`absolute z-30 w-24 h-24 transform transition-all duration-300 pointer-events-none select-none 
      ${
        activeInput === "name"
          ? "xl:top-[1%] xl:right-[1%] lg:top-[1%] lg:right-[1%] md:top-[2%] md:right-[1%] sm:-top-[4%] sm:right-[1%] sm:rotate-12 xs:-top-[4%] xs:right-[1%] xs:rotate-12 max-[480px]:hidden"
          : ""
      } ${
                  activeInput === "email"
                    ? "xl:top-[17%] xl:right-[1%] lg:top-[17%] lg:right-[1%] md:top-[18%] md:right-[1%] sm:top-[11%] sm:right-[1%] xs:top-[11%] xs:right-[1%] max-[480px]:hidden"
                    : ""
                } ${
                  activeInput === "message"
                    ? "xl:top-[40%] xl:right-[1%] lg:top-[40%] lg:right-[1%] md:top-[41%] md:right-[1%] sm:top-[41%] sm:right-[1%] xs:top-[41%] xs:right-[1%] max-[480px]:hidden"
                    : ""
                }`}
              ></img>
            )}

            {activeInput && (
              <img
                src={arcana}
                alt="arcana"
                className={`absolute z-20 w-14 h-24 transform transition-all -rotate-12 duration-300 pointer-events-none select-none 
      ${
        activeInput === "name"
          ? "xl:top-[10%] xl:right-[10%] lg:top-[10%] lg:right-[10%] md:top-[11%] md:right-[10%] sm:top-[10%] sm:right-[15%] xs:top-[10%] xs:right-[15%] max-[480px]:hidden"
          : ""
      } ${
                  activeInput === "email"
                    ? "xl:top-[27%] xl:right-[10%] lg:top-[27%] lg:right-[10%] md:top-[28%] md:right-[10%] sm:top-[27%] sm:right-[14%] xs:top-[27%] xs:right-[14%] max-[480px]:hidden"
                    : ""
                } ${
                  activeInput === "message"
                    ? "xl:top-[50%] xl:right-[10%] lg:top-[50%] lg:right-[10%] md:top-[50%] md:right-[10%] sm:top-[55%] sm:right-[14%] xs:top-[55%] xs:right-[14%] max-[480px]:hidden"
                    : ""
                }`}
              ></img>
            )}

            <div className="transform skew-y-1 relative z-10">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Input Fields */}
                <div className="relative font-Persona5hatty text-md tracking-wider">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    placeholder="Your Name"
                    className="w-full p-3 md:p-5 bg-black border-2 border-white text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                    required
                  />
                </div>

                <div className="relative font-Persona5hatty text-md tracking-wider">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    placeholder="Your Email"
                    className="w-full p-3 md:p-5 bg-black border-2 border-white text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                    required
                  />
                </div>

                <div className="relative font-Persona5hatty text-md tracking-wider">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    placeholder="Your Message"
                    rows="3"
                    className="w-full p-3 md:p-5 bg-black border-2 border-white text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white transform -skew-x-12 px-6 py-2 md:px-8 md:py-3 font-bold font-persona5 text-3xl tracking-wider hover:scale-105 transition-all"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Modal Popup */}
        {modalMessage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-black shadow-[6px_6px_0px_red] border-2 border-white p-8 text-center transform -skew-y-1 hover:border-red-600 transition-all duration-300 relative overflow-hidden max-w-xs">
              <h3 className="text-3xl font-persona5 text-red-600 mb-4">
                Notification
              </h3>
              <p className="text-white font-Persona5hatty tracking-wider text-xl mb-4">
                {modalMessage}
              </p>

              <button
                onClick={closeModal}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white transform -skew-x-12 px-6 py-2 font-bold font-persona5 text-2xl tracking-wider hover:scale-105 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
