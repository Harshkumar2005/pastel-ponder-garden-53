
import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { quotes } from "@/data/quotes";
import { copyToClipboard, exportQuoteAsImage } from "@/utils/exportImage";
import { useToast } from "@/hooks/use-toast";

const QuoteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Find the quote by id
  const quote = quotes.find((q) => q.id === Number(id));

  // Handle when quote is not found
  if (!quote) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-6 max-w-md">
          <h1 className="font-playfair text-2xl font-semibold mb-4">Quote not found</h1>
          <p className="text-gray-600 mb-6">
            We couldn't find the quote you're looking for.
          </p>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Go back to all quotes
          </Button>
        </div>
      </div>
    );
  }

  const handleCopy = async () => {
    const success = await copyToClipboard(quote.text);
    if (success) {
      toast({
        title: "Copied!",
        description: "Quote copied to clipboard",
      });
    }
  };

  const handleDownload = async () => {
    const success = await exportQuoteAsImage("quote-detail", `quote-${quote.id}`);
    if (success) {
      toast({
        title: "Downloaded!",
        description: "Quote image saved",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto py-10 px-4">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all quotes
          </Link>
        </div>

        <div 
          id="quote-detail"
          className={`${quote.colorClass} rounded-2xl p-8 md:p-10 shadow-sm mb-8 max-w-2xl mx-auto`}
        >
          <blockquote className="font-playfair text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
            {quote.text}
          </blockquote>

          <div className="flex flex-wrap gap-2 mb-6">
            {quote.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white/60 px-3 py-1 rounded-full text-sm font-inter text-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="secondary" size="sm" onClick={handleCopy}>
              <Copy className="mr-2 h-4 w-4" /> Copy
            </Button>
            <Button variant="secondary" size="sm" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
          </div>
        </div>

        {quote.explanation && (
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-playfair text-xl font-semibold mb-4">
              What does this quote mean?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {quote.explanation}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default QuoteDetail;
