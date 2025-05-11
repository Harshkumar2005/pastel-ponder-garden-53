import React from "react";
import { Link, useLocation } from "react-router-dom";
import { quotes } from "@/data/quotes";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
const MobileNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActivePath = (path: string) => {
    return location.pathname === path;
  };
  const goToRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    navigate(`/quote/${randomQuote.id}`);
  };
  return <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg rounded-t-xl px-2 py-1.5 md:hidden z-100 z-[1000000] ">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <Link to="/" className={cn("flex flex-col items-center justify-center px-3 py-1 rounded-lg transition-all", isActivePath("/") ? "text-black" : "text-gray-400 grayscale opacity-70")}>
          <span className="text-xl">🌸</span>
        </Link>
        
        <motion.button onClick={goToRandomQuote} whileTap={{
        scale: 0.95
      }} whileHover={{
        scale: 1.03
      }} className="flex flex-row items-center justify-center px-3 py-1 rounded-lg transition-colors gap-1">
          <span className="text-xl">🎲</span>
          <span className="text-sm font-medium">Random</span>
        </motion.button>
        
        <Link to="/bookmarks" className={cn("flex flex-col items-center justify-center px-3 py-1 rounded-lg transition-all", isActivePath("/bookmarks") ? "text-black" : "text-gray-400 grayscale opacity-70")}>
          <span className="text-xl">🔖</span>
        </Link>
      </div>
    </nav>;
};
export default MobileNavbar;