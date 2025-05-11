
import React, { useMemo } from "react";
import QuoteCard from "@/components/QuoteCard";
import { Quote } from "@/data/quotes";

interface QuoteGridProps {
  quotes: Quote[];
  searchQuery: string;
}

const QuoteGrid: React.FC<QuoteGridProps> = ({ quotes, searchQuery }) => {
  const filteredQuotes = useMemo(() => {
    if (!searchQuery) return quotes;
    
    const lowerCaseQuery = searchQuery.toLowerCase();
    return quotes.filter(quote => 
      quote.text.toLowerCase().includes(lowerCaseQuery) || 
      quote.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
    );
  }, [quotes, searchQuery]);

  if (filteredQuotes.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center">
        <p className="text-gray-500 text-lg">No quotes found for "{searchQuery}"</p>
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
      {filteredQuotes.map((quote) => (
        <div key={quote.id} className="break-inside-avoid mb-6">
          <QuoteCard quote={quote} />
        </div>
      ))}
    </div>
  );
};

export default QuoteGrid;
