
import React, { useMemo, useState, useEffect } from "react";
import QuoteCard from "@/components/QuoteCard";
import { Quote } from "@/data/quotes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search, X, Sparkles } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

interface QuoteGridProps {
  quotes: Quote[];
  searchQuery: string;
}

const QuoteGrid: React.FC<QuoteGridProps> = ({
  quotes,
  searchQuery
}) => {
  const [moodFilter, setMoodFilter] = useState<string>("all");
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [activeFilters, setActiveFilters] = useState<number>(0);

  // Update local search when prop changes
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

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
    let filterCount = 0;

    // Apply search filter
    if (localSearchQuery) {
      const lowerCaseQuery = localSearchQuery.toLowerCase();
      result = result.filter(quote => quote.text.toLowerCase().includes(lowerCaseQuery) || quote.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)));
      filterCount++;
    }

    // Apply mood/tag filter
    if (moodFilter && moodFilter !== "all") {
      result = result.filter(quote => quote.tags.some(tag => tag.toLowerCase() === moodFilter.toLowerCase()));
      filterCount++;
    }

    // Update active filters count
    setActiveFilters(filterCount);
    return result;
  }, [quotes, localSearchQuery, moodFilter, favoritesOnly]);

  const handleSearch = () => {
    // This would typically update URL params or trigger a fetch
    // For now, we'll just use the local state
  };

  const resetFilters = () => {
    setLocalSearchQuery('');
    setMoodFilter('all');
    setFavoritesOnly(false);
  };

  const renderFilterBar = () => (
    <div className="filter-bar bg-white/70 backdrop-blur-sm rounded-full mb-8 animate-fade-in shadow-sm border border-gray-100">
      <div className="flex flex-col sm:flex-row justify-between gap-4 p-2">
        {/* Left side - Search */}
        <div className="relative flex-grow max-w-2xl">
          <div className="relative flex w-full items-center">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input 
              type="search" 
              placeholder="Search quotes or tags..." 
              value={localSearchQuery} 
              onChange={e => setLocalSearchQuery(e.target.value)} 
              className="pl-12 pr-4 py-2 w-full border border-gray-200 rounded-full font-inter text-sm focus:outline-none focus:ring-0 focus:border-pastel-blue" 
            />
            {localSearchQuery && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-1 rounded-full hover:bg-gray-100" 
                onClick={() => setLocalSearchQuery('')}
              >
                <X className="h-4 w-4 text-gray-500" />
              </Button>
            )}
          </div>
        </div>
        
        {/* Right side - Filters */}
        <div className="flex flex-wrap items-center justify-end gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-pastel-blue" />
            <Select 
              value={moodFilter} 
              onValueChange={setMoodFilter}
            >
              <SelectTrigger className="w-[160px] border-gray-200 rounded-full focus:ring-0 focus:outline-none focus:border-pastel-blue bg-white">
                <SelectValue placeholder="Filter by mood" className="font-inter" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border border-gray-100 shadow-md bg-white overflow-hidden font-inter">
                <SelectItem value="all" className="rounded-lg hover:bg-pastel-blue/10 focus:bg-pastel-blue/10">All moods</SelectItem>
                {availableTags.map(tag => (
                  <SelectItem 
                    key={tag} 
                    value={tag} 
                    className="rounded-lg hover:bg-pastel-blue/10 focus:bg-pastel-blue/10"
                  >
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {activeFilters > 0 && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={resetFilters} 
              className="text-xs text-gray-500 hover:text-gray-700 rounded-full border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-0"
            >
              Reset filters
            </Button>
          )}
          
          {activeFilters > 0 && (
            <Badge 
              variant="outline" 
              className="bg-pastel-blue/30 border-pastel-blue/40 rounded-full px-3 py-1 font-inter"
            >
              {activeFilters} active {activeFilters === 1 ? 'filter' : 'filters'}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );

  if (filteredQuotes.length === 0) {
    return (
      <div className="space-y-6">
        {renderFilterBar()}
        
        {/* No results message */}
        <div className="h-64 flex items-center justify-center">
          <p className="text-gray-500 text-lg font-inter">No quotes found for "{localSearchQuery}"</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {renderFilterBar()}
      
      {/* Quote grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuotes.map(quote => <QuoteCard key={quote.id} quote={quote} />)}
      </div>
    </div>
  );
};

export default QuoteGrid;
