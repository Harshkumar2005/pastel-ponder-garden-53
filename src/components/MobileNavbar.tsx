
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, BookmarkIcon, Shuffle } from "lucide-react";
import { quotes } from "@/data/quotes";

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
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg rounded-t-xl px-2 py-2 md:hidden z-10">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <button 
          onClick={() => navigate("/")} 
          className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-colors ${
            isActivePath("/") ? "text-blue-600" : "text-gray-600"
          }`}
        >
          <Home className={`h-6 w-6 ${isActivePath("/") ? "text-blue-600" : ""}`} />
          <span className="text-xs mt-1">Home</span>
        </button>
        
        <button 
          onClick={goToRandomQuote} 
          className="flex flex-col items-center justify-center px-6 py-2 bg-pastel-blue/20 rounded-full border border-pastel-blue/30 shadow-sm transition-colors"
        >
          <Shuffle className="h-6 w-6 text-blue-600" />
          <span className="text-xs mt-1 font-medium text-blue-600">Random</span>
        </button>
        
        <button 
          onClick={() => navigate("/bookmarks")} 
          className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-colors ${
            isActivePath("/bookmarks") ? "text-blue-600" : "text-gray-600"
          }`}
        >
          <BookmarkIcon className={`h-6 w-6 ${isActivePath("/bookmarks") ? "fill-current text-blue-600" : ""}`} />
          <span className="text-xs mt-1">Saved</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileNavbar;
