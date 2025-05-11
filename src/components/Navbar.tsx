import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
interface NavbarProps {
  onSearch: (query: string) => void;
}
const Navbar: React.FC<NavbarProps> = ({
  onSearch
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };
  return <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-4 md:px-6 hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="font-playfair text-2xl font-bold tracking-tight text-gray-900">
          Inspirational Quotes
        </Link>
        
        <div className="w-full md:w-1/3 max-w-md">
          <Input type="search" placeholder="Search quotes or tags..." className="w-full" value={searchQuery} onChange={handleSearchChange} />
        </div>
      </div>
    </nav>;
};
export default Navbar;