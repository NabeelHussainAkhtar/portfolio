import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";
import { FiCoffee } from "react-icons/fi";
import GlassIcons from "./GlassIcons/GlassIcons";

const Footer = ({ onCoffeeClick }) => {
  const items = [
    { icon: <VscHome size={18} />, label: "Home", onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={18} />, label: "About Me", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive size={18} />, label: "Projects", onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <div className="mt-32 pb-8 flex flex-col items-center relative z-10">
      {/* Adaptive flex container */}
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-6">
        
        {/* Title - topmost on mobile */}
        <div className="flex items-center gap-3 order-1 md:order-none">
          <img src="/assets/logo1.png" alt="Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-2xl font-bold">
            Portfolio
          </h1>
        </div>

        {/* Social icons - centered on mobile */}
        <div className="flex gap-4 order-2 md:order-none items-center">
          <GlassIcons 
            items={[
              { icon: <i className="ri-github-fill"></i>, label: "GitHub", link: "https://github.com/NabeelHussainAkhtar", color: "blue" },
              { icon: <i className="ri-instagram-line"></i>, label: "Instagram", link: "https://instagram.com/nabeel_hussain2k02", color: "purple" },
              { icon: <i className="ri-mail-fill"></i>, label: "Email", link: "mailto:nabeelhussainakhtar@gmail.com", color: "red" }
            ]}
          />
          
          <button 
            onClick={onCoffeeClick}
            className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/50 text-amber-500 p-2 px-4 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 font-semibold text-sm h-fit self-center"
          >
            <FiCoffee size={18} />
            <span>Buy me a coffee</span>
          </button>
        </div>

        {/* Dock - bottom-most on mobile */}
        <div className="order-3 md:order-none mt-15 md:mt-0  md:mb-0">
          <Dock 
            items={items}
            panelHeight={30}
            baseItemSize={60}
            magnification={100}
          />
        </div>

      </div>
    </div>
  );
};

export default Footer;
