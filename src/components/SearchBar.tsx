import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', query);
    // Implement search functionality here
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-sm mx-4">
      <Input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pr-10"
      />
      <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <Search className="h-5 w-5 text-gray-500" />
      </button>
    </form>
  );
};

export default SearchBar;