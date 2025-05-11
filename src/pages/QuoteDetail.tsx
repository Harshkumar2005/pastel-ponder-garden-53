
import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Copy, Download, BookmarkIcon, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { quotes } from "@/data/quotes";
import { copyToClipboard, exportQuoteAsImage } from "@/utils/exportImage";
import { useToast } from "@/hooks/use-toast";
import QuoteDesignSelector from "@/components/QuoteDesignSelector";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { useBookmark } from "@/hooks/use-bookmark";
import MobileNavbar from "@/components/MobileNavbar";

const QuoteDetail = () => {
  const { id } = useParams<{ id: string; }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const quoteBoxRef = useRef<HTMLDivElement>(null);
  const { isBookmarked, toggleBookmark } = useBookmark();

  // Set minimal design as the default
  const [currentDesign, setCurrentDesign] = useState<string>("minimal");

  // Find the quote by id
  const quote = quotes.find(q => q.id === Number(id));

  // Handle when quote is not found
  if (!quote) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-6 max-w-md">
          <h1 className="font-playfair text-2xl font-semibold mb-4">Quote not found</h1>
          <p className="text-gray-600 mb-6">
            We couldn't find the quote you're looking for.
          </p>
          <Button onClick={() => navigate("/")}>
            Go back to all quotes
          </Button>
        </div>
      </div>;
  }

  const bookmarked = isBookmarked(quote.id);

  const handleCopy = async () => {
    const success = await copyToClipboard(quote.text);
    if (success) {
      toast({
        title: "Copied!",
        description: "Quote copied to clipboard"
      });
    }
  };

  const handleDownload = async () => {
    if (quoteBoxRef.current) {
      const success = await exportQuoteAsImage(quoteBoxRef.current, `quote-${quote.id}`);
      if (success) {
        toast({
          title: "Downloaded!",
          description: "Quote image saved"
        });
      }
    }
  };

  const handleBookmarkToggle = () => {
    toggleBookmark(quote.id);
    
    toast({
      title: bookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: bookmarked ? "Quote removed from your saved items" : "Quote saved to your bookmarks",
    });
  };

  // Extract the background color class without the 'bg-' prefix
  const colorName = quote.colorClass.replace('bg-', '');

  // Render tags component that we'll use in different places based on screen size
  const renderTags = () => (
    <>
      {quote?.tags.map((tag, index) => (
        <span key={index} className="bg-stone-100 px-4 py-1.5 rounded-full text-sm font-inter text-gray-700">
          #{tag}
        </span>
      ))}
    </>
  );

  // Minimal Design - Default
  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      <QuoteDesignSelector currentDesign={currentDesign} onDesignChange={setCurrentDesign} />
      
      <main className="container max-w-5xl mx-auto px-4 py-8 md:py-14">
        {/* Desktop: Side by side layout, Mobile: Stacked layout */}
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Left column: Quote and buttons */}
          <div className="flex flex-col items-center md:items-start md:flex-1">
            <div 
              id="quote-box" 
              ref={quoteBoxRef} 
              className={`relative w-full max-w-lg aspect-square flex flex-col items-center justify-center p-12 ${quote.colorClass} rounded-lg shadow-sm`}
            >
              <blockquote className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-relaxed tracking-wide text-center">
                {quote?.text}
              </blockquote>
              
              {/* Bookmark icon positioned inside the quote box */}
              <button 
                onClick={handleBookmarkToggle}
                className={`absolute bottom-4 right-4 rounded-full p-2 bg-white/40 backdrop-blur-sm transition-all ${
                  bookmarked ? "text-amber-500" : "text-gray-700"
                } hover:bg-white/60`}
                aria-label={bookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
              >
                <BookmarkIcon size={18} className={bookmarked ? "fill-current" : ""} />
              </button>
            </div>
            
            <div className="w-full flex flex-wrap items-center justify-center gap-3 mt-6">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleCopy} 
                className="border-0 bg-stone-100 hover:bg-opacity-70 px-4 py-1.5 rounded-full text-sm font-inter text-gray-700"
              >
                <Copy className="mr-2 h-4 w-4" /> Copy
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleDownload} 
                className="bg-stone-100 border-0 hover:bg-opacity-70 px-4 py-1.5 rounded-full text-sm font-inter text-gray-700"
              >
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
              
              {/* Tags for desktop only */}
              <div className="hidden md:flex md:flex-wrap md:gap-3">
                {renderTags()}
              </div>
            </div>
          </div>
          
          {/* Right column: About and tags (mobile only) */}
          <div className="md:flex-1 md:pt-0 md:border-t-0">
            {quote?.explanation && (
              <div className="w-full max-w-xl mx-auto border-t md:border-t-0 pt-10 mt-10 md:mt-0 md:pt-0">
                <h2 className="font-inter text-sm uppercase tracking-wider text-gray-400 mb-4 text-left md:text-left">
                  About this quote
                </h2>
                <p className="text-gray-700 text-left md:text-left leading-relaxed font-inter">
                  {quote.explanation}
                </p>
                
                {/* Tags for mobile only - shown below About this quote */}
                <div className="md:hidden flex flex-wrap items-center justify-center gap-3 mt-6">
                  {renderTags()}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Mobile bottom navbar */}
      {isMobile && <MobileNavbar />}
    </div>
  );
};

export default QuoteDetail;
