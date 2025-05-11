
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Flower2, BookmarkIcon, Dices } from "lucide-react";
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
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg rounded-t-xl px-2 py-1 md:hidden z-10">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <Link 
          to="/"
          className={cn(
            "flex flex-col items-center justify-center px-3 py-1.5 rounded-lg transition-colors",
            isActivePath("/") ? "text-black font-medium" : "text-gray-600"
          )}
        >
          <Flower2 className={cn(
            "h-5 w-5 transition-colors",
            isActivePath("/") ? "text-black" : ""
          )} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <motion.button 
          onClick={goToRandomQuote} 
          className="flex flex-row items-center justify-center px-4 py-1.5 bg-pastel-blue/20 rounded-full border border-pastel-blue/30 shadow-sm transition-colors gap-2"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
        >
          <Dices className="h-5 w-5 text-blue-600" />
          <span className="text-xs font-medium text-blue-600">Random</span>
        </motion.button>
        
        <Link 
          to="/bookmarks"
          className={cn(
            "flex flex-col items-center justify-center px-3 py-1.5 rounded-lg transition-colors",
            isActivePath("/bookmarks") ? "text-black font-medium" : "text-gray-600"
          )}
        >
          <BookmarkIcon className={cn(
            "h-5 w-5 transition-colors",
            isActivePath("/bookmarks") ? "fill-current text-black" : ""
          )} />
          <span className="text-xs mt-1">Saved</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNavbar;
