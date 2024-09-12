import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductGridProps {
  onToggleCart: (product: Product) => void;
}

const productData = [
  {
    id: 1,
    name: "Smartphone X1",
    price: 699.99,
    image: "https://example.com/images/smartphone-x1.jpg",
  },
  {
    id: 2,
    name: "Wireless Headphones Pro",
    price: 199.99,
    image: "https://example.com/images/wireless-headphones-pro.jpg",
  },
  {
    id: 3,
    name: "4K Ultra HD Television",
    price: 1199.99,
    image: "https://example.com/images/4k-ultra-hd-tv.jpg",
  },
  {
    id: 4,
    name: "Laptop Air 13",
    price: 1299.99,
    image: "https://example.com/images/laptop-air-13.jpg",
  },
  {
    id: 5,
    name: "Smartwatch Series 5",
    price: 299.99,
    image: "https://example.com/images/smartwatch-series-5.jpg",
  },
];

const ProductGrid: React.FC<ProductGridProps> = ({ onToggleCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {productData.map((product) => (
        <ProductCard key={product.id} {...product} onToggleCart={() => onToggleCart(product)} />
      ))}
    </div>
  );
};

export default ProductGrid;