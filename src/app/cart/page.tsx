"use client";
import React, { useState, useEffect, useCallback } from "react";
import Navbarcommerce from "@/components/Navbarcommerce";
import ProductGrid from "@/components/ProductGrid";
import {
  getCartItems,
  toggleCartItem,
  removeFromCart,
} from "@/utils/cartlistUtils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const Home: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [items, setItems] = useState<Product[]>([]);

  const updateCartItems = useCallback(() => {
    const cartItems = getCartItems();
    setItems(cartItems);
    setCartCount(cartItems.length);
  }, []);

  useEffect(() => {
    updateCartItems();
  }, [updateCartItems]);

  const handleToggleCart = useCallback(
    (product: Product) => {
      toggleCartItem(product);
      updateCartItems();
    },
    [updateCartItems]
  );

  const handleDeleteItem = useCallback(
    (productId: number) => {
      removeFromCart(productId);
      updateCartItems();
    },
    [updateCartItems]
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbarcommerce cartCount={cartCount} />
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
        {items.map((item) => (
          <Card
            key={item.id}
            className="w-full max-w-md mx-auto p-4 mb-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <Button
              variant="destructive"
              onClick={() => handleDeleteItem(item.id)}
            >
              Delete
            </Button>
          </Card>
        ))}
      </div>
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
        <ProductGrid onToggleCart={handleToggleCart} />
      </main>
    </div>
  );
};

export default Home;
