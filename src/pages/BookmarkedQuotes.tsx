
import React from "react";
import { quotes } from "@/data/quotes";
import { useBookmark } from "@/hooks/use-bookmark";
import QuoteCard from "@/components/QuoteCard";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNavbar from "@/components/MobileNavbar";
import { BookmarkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BookmarkedQuotes = () => {
  const { bookmarkedQuotes } = useBookmark();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  // Filter quotes to only show bookmarked ones
  const savedQuotes = quotes.filter(quote => bookmarkedQuotes.includes(quote.id));
  
  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Saved Quotes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your collection of bookmarked quotes.
          </p>
        </header>
        
        {savedQuotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedQuotes.map(quote => (
              <QuoteCard key={quote.id} quote={quote} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-gray-100 rounded-full p-5 mb-4">
              <BookmarkIcon size={40} className="text-gray-400" />
            </div>
            <h2 className="text-xl font-medium mb-2">No saved quotes yet</h2>
            <p className="text-gray-500 mb-8 max-w-md">
              When you find quotes you love, bookmark them to access them anytime.
            </p>
            <Button onClick={() => navigate("/")} className="bg-pastel-blue text-gray-700 hover:bg-pastel-blue/80">
              Browse Quotes
            </Button>
          </div>
        )}
      </main>
      
      {isMobile && <MobileNavbar />}
    </div>
  );
};

export default BookmarkedQuotes;
