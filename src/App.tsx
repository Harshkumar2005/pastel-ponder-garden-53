import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from "./pages/NotFound";
import BookmarkedQuotes from "./pages/BookmarkedQuotes";
// Import the MobileNavbar component
import MobileNavbar from "@/components/MobileNavbar";
// Import the useIsMobile hook if you still need to conditionally render it based on screen size
import { useIsMobile } from "@/hooks/use-mobile";


const queryClient = new QueryClient();

const App = () => {
  // If you want to conditionally render MobileNavbar based on screen size *within* App.tsx:
  const isMobile = useIsMobile();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quote/:id" element={<QuoteDetail />} />
            <Route path="/bookmarks" element={<BookmarkedQuotes />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Render the MobileNavbar here */}
          {/* You can add the isMobile check back if you only want it in the DOM on mobile */}
        {isMobile && <MobileNavbar />}
          

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
