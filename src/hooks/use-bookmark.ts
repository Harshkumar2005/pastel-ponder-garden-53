
import { useState, useEffect } from 'react';
import { Quote } from '@/data/quotes';

export function useBookmark() {
  const [bookmarkedQuotes, setBookmarkedQuotes] = useState<number[]>([]);

  // Load bookmarks from localStorage on initial render
  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarkedQuotes');
    if (storedBookmarks) {
      setBookmarkedQuotes(JSON.parse(storedBookmarks));
    }
  }, []);

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('bookmarkedQuotes', JSON.stringify(bookmarkedQuotes));
  }, [bookmarkedQuotes]);

  // Check if a quote is bookmarked
  const isBookmarked = (quoteId: number): boolean => {
    return bookmarkedQuotes.includes(quoteId);
  };

  // Toggle bookmark status for a quote
  const toggleBookmark = (quoteId: number) => {
    setBookmarkedQuotes(prev => {
      if (prev.includes(quoteId)) {
        return prev.filter(id => id !== quoteId);
      } else {
        return [...prev, quoteId];
      }
    });
  };

  return {
    bookmarkedQuotes,
    isBookmarked,
    toggleBookmark
  };
}
