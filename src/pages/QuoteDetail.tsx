import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Copy, Download, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { quotes } from "@/data/quotes";
import { copyToClipboard, exportQuoteAsImage } from "@/utils/exportImage";
import { useToast } from "@/hooks/use-toast";
import QuoteDesignSelector from "@/components/QuoteDesignSelector";
import { useIsMobile } from "@/hooks/use-mobile";
const QuoteDetail = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const isMobile = useIsMobile();

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
    const success = await exportQuoteAsImage(`quote-detail-${currentDesign}`, `quote-${quote.id}`);
    if (success) {
      toast({
        title: "Downloaded!",
        description: "Quote image saved"
      });
    }
  };

  // Classic Design
  const renderClassicDesign = () => <div className="min-h-screen bg-gray-50">
      <QuoteDesignSelector currentDesign={currentDesign} onDesignChange={setCurrentDesign} />
      
      <main className="max-w-4xl mx-auto py-10 px-4">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 font-inter">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all quotes
          </Link>
        </div>

        <div id="quote-detail-classic" className={`${quote.colorClass} rounded-2xl p-8 md:p-10 shadow-sm mb-8 max-w-2xl mx-auto`}>
          <blockquote className="font-playfair text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
            {quote.text}
          </blockquote>

          <div className="flex flex-wrap gap-2 mb-6">
            {quote.tags.map((tag, index) => <span key={index} className="bg-white/60 px-3 py-1 rounded-full text-sm font-inter text-gray-700">
                #{tag}
              </span>)}
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="secondary" size="sm" onClick={handleCopy} className="font-inter">
              <Copy className="mr-2 h-4 w-4" /> Copy
            </Button>
            <Button variant="secondary" size="sm" onClick={handleDownload} className="font-inter">
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
          </div>
        </div>

        {quote.explanation && <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-playfair text-xl font-semibold mb-4">
              What does this quote mean?
            </h2>
            <p className="text-gray-700 leading-relaxed font-inter">
              {quote.explanation}
            </p>
          </div>}
      </main>
    </div>;

  // Modern Design
  const renderModernDesign = () => <div className="min-h-screen bg-gradient-to-br from-white to-gray-100">
      <QuoteDesignSelector currentDesign={currentDesign} onDesignChange={setCurrentDesign} />
      
      <header className="pt-8 pb-4 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 font-inter rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 shadow-sm">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Link>
        </div>
      </header>
      
      <main className="px-4 pb-12">
        <div id="quote-detail-modern" className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
          <div className={`${quote.colorClass} p-8 md:p-12 lg:w-3/5 relative`}>
            <div className="absolute top-6 right-6 flex gap-2">
              <button onClick={handleCopy} className="rounded-full p-2 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors" title="Copy to clipboard">
                <Copy className="h-5 w-5 text-gray-700" />
              </button>
              <button onClick={handleDownload} className="rounded-full p-2 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors" title="Download as image">
                <Download className="h-5 w-5 text-gray-700" />
              </button>
            </div>
            
            <blockquote className="font-playfair text-3xl md:text-4xl font-medium leading-tight mb-8">
              <span className="text-6xl font-serif opacity-30 absolute -top-2 -left-1">"</span>
              <span className="relative z-10 ml-4">{quote.text}</span>
              <span className="text-6xl font-serif opacity-30 absolute bottom-0 right-0">"</span>
            </blockquote>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {quote.tags.map((tag, index) => <span key={index} className="bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-inter text-gray-800">
                  #{tag}
                </span>)}
            </div>
          </div>
          
          <div className="lg:w-2/5 p-8 md:p-12 bg-white flex flex-col justify-between">
            <div>
              <h2 className="font-playfair text-2xl font-bold mb-4 text-gray-900">
                About this quote
              </h2>
              {quote.explanation ? <p className="text-gray-700 leading-relaxed font-inter">
                  {quote.explanation}
                </p> : <p className="text-gray-500 italic font-inter">
                  No additional information available for this quote.
                </p>}
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="w-full rounded-xl bg-gradient-to-r from-pastel-blue to-pastel-lavender hover:opacity-90 font-inter">
                <Heart className="mr-2 h-4 w-4" /> Add to Favorites
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>;

  // Minimal Design - Updated
  const renderMinimalDesign = () => <div className={`min-h-screen ${quote?.colorClass}`}>
      <QuoteDesignSelector currentDesign={currentDesign} onDesignChange={setCurrentDesign} />
      
      <main id="quote-detail-minimal" className="container max-w-3xl mx-auto px-4 py-24 flex flex-col items-center">
        <div className="w-full mb-16 text-center">
          <blockquote className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light mb-12 leading-relaxed tracking-wide">
            {quote?.text}
          </blockquote>
          
          <div className="inline-flex gap-3 mt-6">
            <Button variant="ghost" size="sm" onClick={handleCopy} className="bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-inter text-gray-700 border-0 hover:bg-white/50">
              <Copy className="mr-2 h-4 w-4" /> Copy
            </Button>
            <Button variant="ghost" size="sm" onClick={handleDownload} className="bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-inter text-gray-700 border-0 hover:bg-white/50">
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
          </div>
        </div>
        
        {quote?.explanation && <div className="w-full max-w-xl mx-auto border-t border-black/30 pt-10">
            <h2 className="font-inter text-sm uppercase tracking-wider text-gray-400 mb-4 text-center">
              About this quote
            </h2>
            <p className="text-gray-700 text-center leading-relaxed font-inter">
              {quote.explanation}
            </p>
          </div>}
        
        <div className="mt-16 flex flex-wrap gap-2 justify-center">
          {quote?.tags.map((tag, index) => <span key={index} className="bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-inter text-gray-700">
              #{tag}
            </span>)}
        </div>
      </main>
    </div>;

  // Always render the minimal design regardless of the currentDesign value
  return renderMinimalDesign();
};
export default QuoteDetail;