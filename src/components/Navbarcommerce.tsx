import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";

interface NavbarcommerceProps {
  cartCount: number;
}

const Navbarcommerce: React.FC<NavbarcommerceProps> = ({ cartCount }) => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">E-Shop</h1>
      <SearchBar />
      <Button variant="ghost" className="text-white">
        <ShoppingCart className="mr-2 h-5 w-5" />
        Cart ({cartCount})
      </Button>
    </nav>
  );
};

export default Navbarcommerce;