import React, { useMemo, useState, useEffect } from "react";
import QuoteCard from "@/components/QuoteCard";
import { Quote } from "@/data/quotes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search, X } from "lucide-react";
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
  const renderFilterBar = () => <div className="filter-bar bg-white/70 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 mb-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        {/* Left side - Search */}
        <div className="relative flex-grow max-w-2xl">
          <div className="relative flex w-full items-center">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input type="search" placeholder="Search quotes or tags..." value={localSearchQuery} onChange={e => setLocalSearchQuery(e.target.value)} className="pl-10 pr-4 py-2 w-full border border-gray-200" />
            {localSearchQuery && <Button variant="ghost" size="sm" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 p-2 text-gray-400" onClick={() => setLocalSearchQuery('')}>
                <X className="h-4 w-4" />
              </Button>}
          </div>
        </div>
        
        {/* Right side - Filters */}
        <div className="flex flex-wrap items-center justify-end gap-3">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <Select value={moodFilter} onValueChange={setMoodFilter}>
              <SelectTrigger className="w-[160px] border-gray-200">
                <SelectValue placeholder="Filter by mood" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All moods</SelectItem>
                {availableTags.map(tag => <SelectItem key={tag} value={tag}>{tag}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          
          {activeFilters > 0 && <Button variant="ghost" size="sm" onClick={resetFilters} className="text-xs text-gray-500 hover:text-gray-700">
              Reset filters
            </Button>}
          
          {activeFilters > 0 && <Badge variant="outline" className="bg-pastel-blue/30 border-pastel-blue/40">
              {activeFilters} active {activeFilters === 1 ? 'filter' : 'filters'}
            </Badge>}
        </div>
      </div>
    </div>;
  if (filteredQuotes.length === 0) {
    return <div className="space-y-6">
        {renderFilterBar()}
        
        {/* No results message */}
        <div className="h-64 flex items-center justify-center">
          <p className="text-gray-500 text-lg">No quotes found for "{localSearchQuery}"</p>
        </div>
      </div>;
  }
  return <div className="space-y-6">
      {renderFilterBar()}
      
      {/* Quote grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuotes.map(quote => <QuoteCard key={quote.id} quote={quote} />)}
      </div>
    </div>;
};
export default QuoteGrid;