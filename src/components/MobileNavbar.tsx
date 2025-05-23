import React from "react";
import { Link, useLocation } from "react-router-dom";
import { quotes } from "@/data/quotes";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Notebook, Dices, Bookmark, PencilLine } from 'lucide-react';

// Helper function to trigger vibration
const triggerVibration = (duration = 50) => {
  // Check if the vibrate API is available
  if (navigator.vibrate) {
    navigator.vibrate(duration);
  }
};

const MobileNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActivePath = (path: string) => {
    // Check if the pathname includes the path (especially for /quote/ paths)
    return location.pathname === path ||
           (path === "/quote/" && location.pathname.includes("/quote/"));
  };

  const goToRandomQuote = () => {
    // Trigger vibration before navigating
    triggerVibration();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    navigate(`/quote/${randomQuote.id}`);
  };

  const handleLinkClick = () => {
    // Trigger vibration on link click
    triggerVibration();
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg rounded-t-xl px-2 py-3 md:hidden z-[1000000]">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <Link
          to="/"
          onClick={handleLinkClick} // Add onClick handler for vibration
          className={cn(
            "flex flex-row items-center justify-center px-3 py-1 rounded-lg transition-all relative",
            isActivePath("/")
              ? "text-black"
              : "text-gray-400 grayscale opacity-70"
          )}
        >
          {/*<span className="text-xl mr-1.5">🌸</span>*/}
          <PencilLine size={20} className="mr-1.5" />

          <span className="text-m font-medium ">Home</span>
        </Link>

        <motion.button
          onClick={goToRandomQuote} // Vibration logic is inside goToRandomQuote
          whileTap={{
            scale: 0.85
          }}
          whileHover={{
            scale: 1.09
          }}
          className={cn(
            "flex flex-row items-center justify-center px-3 py-1 rounded-lg transition-all gap-1.5 relative",
            isActivePath("/quote/")
              ? "text-black"
              : "text-gray-400 grayscale opacity-70"
          )}
        >
          <Dices size={20} className="mr-1.5" />

          <span className="text-m font-medium ">Random</span>
        </motion.button>

        <Link
          to="/bookmarks"
          onClick={handleLinkClick} // Add onClick handler for vibration
          className={cn(
            "flex flex-row items-center justify-center px-3 py-1 rounded-lg transition-all relative",
            isActivePath("/bookmarks")
              ? "text-black"
              : "text-gray-400 grayscale opacity-70"
          )}
        >
          <Bookmark size={20} className="mr-1.5" />

          <span className="text-m font-medium">Saved</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNavbar;
