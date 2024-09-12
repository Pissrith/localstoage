// cartListUtils.ts

// Define the Product type
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

// Key for storing cart items in localStorage
const CART_STORAGE_KEY = "cartItems";

// Function to get current cart items from localStorage
export const getCartItems = (): Product[] => {
  const cartItems = localStorage.getItem(CART_STORAGE_KEY);
  return cartItems ? JSON.parse(cartItems) : [];
};

// Function to save cart items to localStorage
const saveCartItems = (items: Product[]): void => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
};

// Function to add a product to the cart
export const addToCart = (product: Product): void => {
  const cartItems = getCartItems();
  cartItems.push(product);
  saveCartItems(cartItems);
};

// Function to remove a product from the cart
export const removeFromCart = (productId: number): void => {
  const cartItems = getCartItems();
  const updatedCart = cartItems.filter((item) => item.id !== productId);
  saveCartItems(updatedCart);
};

// Function to check if a product is in the cart
export const isInCart = (productId: number): boolean => {
  const cartItems = getCartItems();
  return cartItems.some((item) => item.id === productId);
};

// Function to toggle a product in the cart
export const toggleCartItem = (product: Product): void => {
  if (isInCart(product.id)) {
    removeFromCart(product.id);
  } else {
    addToCart(product);
  }
};
