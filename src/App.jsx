import { useState } from "react";
import Navbar from "./components/Navbar";
import Load from "./components/Load";
import Home from "./components/HomePages"
import About from "./components/AboutPages"
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Features";
import BackTop from "./components/BackTop";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="min-h-screen w-full bg-black text-white">
        {!isLoading && <Load onFinish={() => setIsLoading(true)} />}

        {isLoading && (
          <>
            <Navbar />
            <Home />
            <About />
            <Gallery />
            <Contact />
            <Footer />
            <Features />
          </>
        )}
        <BackTop />
      </div>
    </>
  );
}
