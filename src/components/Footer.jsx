import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      <div className="pt-5 w-full text-center">
        <div className="relative transition-all duration-500 hover:scale-102 py-5">
          <div className="bg-black p-5 md:p-10 transform skew-y-1 transition-all duration-300 relative overflow-hidden">
            {/* Persona 5 Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-black to-white opacity-20 z-0" />

            {/* Social Buttons */}
            <div className="flex flex-wrap justify-center gap-6 relative z-10 mt-5">
              {/* GitHub */}
              <a
                href="https://github.com/Shikein-Lorelei"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-transparent w-[4rem] h-16 text-white hover:text-[red] hover:bg-transparent hover:rotate-6 font-Persona5hatty tracking-wider transition-all duration-300 px-4 py-2 flex flex-col items-center"
                >
                  <GitHubLogoIcon className=" mb-2 " style={{ height: "20px", width: "20px" }} />
                  <span className="tracking-wider -skew-y-6">GITHUB</span>
                </Button>
              </a>

              {/* Whatsapp */}
              <a
                href="https://wa.me/+6285174116973"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-transparent w-[4rem] h-16 text-white hover:text-[red] hover:bg-transparent hover:rotate-6 font-Persona5hatty tracking-wider transition-all duration-300 px-4 py-2 flex flex-col items-center"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className=" mb-2 " style={{ height: "20px", width: "20px" }} />
                  <span className="tracking-wider -skew-y-6">WHATSAPP</span>
                </Button>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/shikein.desu?igsh=eGZuZ2ZwZGQxajJ0"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-transparent w-[4rem] h-16 text-white hover:text-[red] hover:bg-transparent hover:rotate-6 font-Persona5hatty tracking-wider transition-all duration-300 px-4 py-2 flex flex-col items-center"
                >
                  <InstagramLogoIcon className=" mb-2 " style={{ height: "20px", width: "20px" }} />
                  <span className="tracking-wider -skew-y-6">INSTAGRAM</span>
                </Button>
              </a>

              {/* Discord */}
              <a
                href="https://discord.com/users/912559617995837460"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-transparent w-[4rem] h-16 text-white hover:text-[red] hover:bg-transparent hover:rotate-6 font-Persona5hatty tracking-wider transition-all duration-300 px-4 py-2 flex flex-col items-center"
                >
                  <FontAwesomeIcon icon={faDiscord} className=" mb-2 " style={{ height: "20px", width: "20px" }} />
                  <span className="tracking-wider -skew-y-6">DISCORD</span>
                </Button>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/raditya-nala-argya-wijaya-7b556b347"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-transparent w-[4rem] h-16 text-white hover:text-[red] hover:bg-transparent hover:rotate-6 font-Persona5hatty tracking-wider transition-all duration-300 px-4 py-2 flex flex-col items-center"
                >
                  <LinkedInLogoIcon className=" mb-2 " style={{ height: "20px", width: "20px" }} />
                  <span className="tracking-wider -skew-y-6">LINKEDIN</span>
                </Button>
              </a>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center transform -skew-y-3">
              <p className="text-red-500 font-bold font-[Persona5hatty] tracking-wider text-md">
                Lorelei Project &#169; 2025
              </p>
            </div>

            {/* Garis */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 via-white to-black" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-black via-white to-red-700" />
          </div>
        </div>
      </div>
    </footer>
  );
}
