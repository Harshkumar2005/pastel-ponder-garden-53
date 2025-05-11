
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredQuotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </div>
  );
};

export default QuoteGrid;
