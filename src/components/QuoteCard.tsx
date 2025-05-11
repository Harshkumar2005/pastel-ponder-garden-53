
import React from "react";
import { Link } from "react-router-dom";
import { Copy, Download, BookmarkIcon } from "lucide-react";
import { Quote } from "@/data/quotes";
import { Button } from "@/components/ui/button";
import { copyToClipboard, exportQuoteAsImage } from "@/utils/exportImage";
import { useToast } from "@/hooks/use-toast";
import { useBookmark } from "@/hooks/use-bookmark";

interface QuoteCardProps {
  quote: Quote;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  const { toast } = useToast();
  const { isBookmarked, toggleBookmark } = useBookmark();
  const bookmarked = isBookmarked(quote.id);

  const handleCopy = async () => {
    const success = await copyToClipboard(quote.text);
    if (success) {
      toast({
        title: "Copied!",
        description: "Quote copied to clipboard",
      });
    } else {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const handleDownload = async () => {
    const quoteElement = document.getElementById(`quote-card-${quote.id}`);
    if (quoteElement) {
      const success = await exportQuoteAsImage(quoteElement, `quote-${quote.id}`);
      if (success) {
        toast({
          title: "Downloaded!",
          description: "Quote image saved",
        });
      } else {
        toast({
          title: "Download failed",
          description: "Please try again",
          variant: "destructive",
        });
      }
    }
  };

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(quote.id);
    
    toast({
      title: bookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: bookmarked ? "Quote removed from your saved items" : "Quote saved to your bookmarks",
    });
  };

  return (
    <div 
      id={`quote-card-${quote.id}`} 
      className={`${quote.colorClass} rounded-xl p-6 transition-all shadow-sm hover:shadow-md flex flex-col justify-between h-full animate-fade-in`}
    >
      <Link to={`/quote/${quote.id}`} className="mb-4 flex-grow">
        <p className="font-playfair text-lg md:text-xl font-medium leading-relaxed">
          {quote.text}
        </p>
      </Link>
      
      <div className="mt-auto flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {quote.tags.map((tag, index) => (
            <span key={index} className="bg-white/60 px-3 py-1 rounded-full text-sm font-inter text-gray-700">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2 ml-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleBookmarkToggle}
            title={bookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
            className={`rounded-full hover:bg-white/60 transition-all ${
              bookmarked ? "text-amber-500" : "text-gray-700"
            }`}
          >
            <BookmarkIcon size={18} className={bookmarked ? "fill-current" : ""} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleCopy} 
            title="Copy to clipboard"
            className="rounded-full hover:bg-white/60"
          >
            <Copy size={18} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleDownload} 
            title="Download as image"
            className="rounded-full hover:bg-white/60"
          >
            <Download size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
