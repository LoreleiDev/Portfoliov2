import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Cross1Icon, GitHubLogoIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function GalleryCard({
  title,
  description,
  imageUrl,
  projectUrl,
  repoUrl,
  onProjectClick,
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div className="relative group">
      {/* Kartu */}
      <div
        className="bg-black shadow-[4px_4px_0px_red] border-2 border-white p-6 transform -skew-y-1 hover:border-red-600 transition-all duration-300 relative overflow-hidden cursor-pointer"
        onClick={toggleModal}
      >
        <div className="transform skew-y-1 relative z-10">
          {/* Bagian gambar */}
          <div className="relative mb-6 overflow-hidden">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={title || "Placeholder Image"}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay merah */}
            <div className="absolute inset-0 bg-red-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          {/* Bagian judul */}
          <div className="flex items-center gap-3 mb-4">
            <div>
              <h3 className="text-2xl font-Persona5hatty text-white uppercase tracking-wider">
                {title}
              </h3>
              <div className="w-full h-1 bg-gradient-to-r from-red-600 to-transparent mt-1"></div>
            </div>
          </div>
          {/* Deskripsi */}
          <p className="text-gray-300 italic text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
          {/* Garis aksen bawah */}
          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1 h-1 bg-gradient-to-r from-red-600 to-transparent"></div>
            <div className="w-3 h-3 bg-red-600 transform rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 top-16">
          <div className="bg-black shadow-[4px_4px_0px_red] border-2 border-white p-6 transform -skew-y-1 relative overflow-auto max-w-lg w-full max-h-screen">
            <div className="transform skew-y-1 relative z-10">
              {/* Header modal */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-Persona5hatty text-white uppercase tracking-wider">
                  {title}
                </h3>
                <Button
                  className="text-white bg-transparent hover:text-red-600 hover:bg-transparent "
                  onClick={toggleModal}
                >
                  <Cross2Icon style={{ width: "30px", height: "30px" }} />
                </Button>
              </div>
              {/* Gambar modal */}
              <div className="relative mb-6 overflow-hidden group">
                <img
                  src={imageUrl || "/placeholder.svg"}
                  alt={title || "Placeholder Image"}
                  className="w-full h-40 object-cover transition-transform duration-500"
                />
                {/* Overlay gradien */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
              {/* Deskripsi modal */}
              <p className="text-gray-300 italic text-sm leading-relaxed mb-4">
                {description}
              </p>
              {/* Tombol aksi */}
              <div className="flex justify-end gap-4">
                <Button
                  className="bg-black text-white p-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-200 transform hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation(); // Cegah modal tertutup
                    window.open(repoUrl, "_blank");
                  }}
                >
                  <GitHubLogoIcon className="w-5 h-5" />
                </Button>
                <Button
                  className="bg-black text-white p-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-200 transform hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation(); // Cegah efek event lain di luar tombol
                    if (projectUrl === "#modal") {
                      onProjectClick(
                        `"${title}" tidak memiliki tautan proyek.`
                      );
                    } else {
                      window.open(projectUrl, "_blank");
                    }
                  }}
                >
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
