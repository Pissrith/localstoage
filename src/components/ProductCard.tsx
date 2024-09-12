import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { isInCart } from "@/utils/cartlistUtils";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  onToggleCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onToggleCart,
}) => {
  const inCart = isInCart(id);

  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-4">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onToggleCart}>
          {inCart ? "Remove from Cart" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
