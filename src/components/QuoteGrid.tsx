
import React, { useMemo, useState } from "react";
import QuoteCard from "@/components/QuoteCard";
import { Quote } from "@/data/quotes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface QuoteGridProps {
  quotes: Quote[];
  searchQuery: string;
}

const QuoteGrid: React.FC<QuoteGridProps> = ({ quotes, searchQuery }) => {
  const [moodFilter, setMoodFilter] = useState<string>("all");
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  
  // Extract unique tags from all quotes to use for filtering
  const availableTags = useMemo(() => {
    const allTags = new Set<string>();
    quotes.forEach(quote => {
      quote.tags.forEach(tag => allTags.add(tag));
    });
    return Array.from(allTags).sort();
  }, [quotes]);
  
  const filteredQuotes = useMemo(() => {
    let result = quotes;
    
    // Apply search filter
    if (localSearchQuery) {
      const lowerCaseQuery = localSearchQuery.toLowerCase();
      result = result.filter(quote => 
        quote.text.toLowerCase().includes(lowerCaseQuery) || 
        quote.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
      );
    }
    
    // Apply mood/tag filter
    if (moodFilter && moodFilter !== "all") {
      result = result.filter(quote => 
        quote.tags.some(tag => tag.toLowerCase() === moodFilter.toLowerCase())
      );
    }
    
    return result;
  }, [quotes, localSearchQuery, moodFilter]);

  const handleSearch = () => {
    // This would typically update URL params or trigger a fetch
    // For now, we'll just use the local state
  };

  if (filteredQuotes.length === 0) {
    return (
      <div className="space-y-6">
        {/* Filter and search controls */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="relative flex-grow max-w-md">
            <Input
              type="search"
              placeholder="Search quotes..."
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Button 
              onClick={handleSearch}
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 p-2"
              size="sm"
            >
              Search
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <Select value={moodFilter} onValueChange={setMoodFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by mood" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All moods</SelectItem>
                {availableTags.map((tag) => (
                  <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* No results message */}
        <div className="h-64 flex items-center justify-center">
          <p className="text-gray-500 text-lg">No quotes found for "{localSearchQuery}"</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filter and search controls */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <div className="relative flex-grow max-w-md">
          <Input
            type="search"
            placeholder="Search quotes..."
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Button 
            onClick={handleSearch}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 p-2"
            size="sm"
          >
            Search
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <Select value={moodFilter} onValueChange={setMoodFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by mood" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All moods</SelectItem>
              {availableTags.map((tag) => (
                <SelectItem key={tag} value={tag}>{tag}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Quote grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    </div>
  );
};

export default QuoteGrid;
