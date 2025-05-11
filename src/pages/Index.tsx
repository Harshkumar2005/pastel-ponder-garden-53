
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import QuoteGrid from "@/components/QuoteGrid";
import { quotes } from "@/data/quotes";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNavbar from "@/components/MobileNavbar";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      <Navbar onSearch={setSearchQuery} />
      
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Quotes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of inspiring quotes to motivate and uplift your day.
          </p>
        </header>
        
        <QuoteGrid quotes={quotes} searchQuery={searchQuery} />
      </main>
      
      {isMobile && <MobileNavbar />}
      
      <footer className="py-8 border-t mt-12 bg-white hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Inspirational Quotes
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
