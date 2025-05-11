import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
interface QuoteDesignSelectorProps {
  currentDesign: string;
  onDesignChange: (design: string) => void;
}
const QuoteDesignSelector: React.FC<QuoteDesignSelectorProps> = ({
  currentDesign,
  onDesignChange
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const designOptions = [{
    id: "classic",
    name: "Classic"
  }, {
    id: "modern",
    name: "Modern"
  }, {
    id: "minimal",
    name: "Minimal"
  }];
  return <div className="absolute top-4 right-4 z-10 font-inter">
      <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm \n                   border border-gray-100 hover:bg-white/90 transition-all hidden ">
          <span className="text-sm text-gray-700">Design: {designOptions.find(d => d.id === currentDesign)?.name}</span>
          <ChevronDown className={cn("h-4 w-4 text-gray-500 transition-transform", isOpen ? "transform rotate-180" : "")} />
        </button>
        
        {isOpen && <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            {designOptions.map(design => <button key={design.id} onClick={() => {
          onDesignChange(design.id);
          setIsOpen(false);
        }} className={cn("w-full text-left px-4 py-2 text-sm hover:bg-pastel-blue/10 transition-colors", design.id === currentDesign ? "bg-pastel-blue/20 font-medium" : "")}>
                {design.name}
              </button>)}
          </div>}
      </div>
    </div>;
};
export default QuoteDesignSelector;