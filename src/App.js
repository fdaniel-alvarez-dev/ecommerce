import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import Cart from './components/Cart';

const App = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Smart Watch Pro",
      description: "Advanced fitness tracking and notifications",
      price: 199.99,
      rating: 4,
      category: "electronics",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      description: "Premium sound quality with noise cancellation",
      price: 149.99,
      rating: 5,
      category: "electronics",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Laptop Stand",
      description: "Ergonomic aluminum laptop stand",
      price: 49.99,
      rating: 4,
      category: "accessories",
      image: "https://images.unsplash.com/photo-1619725002198-6a689b72f41d?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Minimalist Backpack",
      description: "Sleek design with smart compartments",
      price: 79.99,
      rating: 5,
      category: "accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Desk Organizer",
      description: "Modern workspace cable management",
      price: 29.99,
      rating: 4,
      category: "accessories",
      image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=400&h=400&fit=crop"
    }
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to EasyMart!, Small scale. Smart shopping.</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SearchBar onSearch={setSearchTerm} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
          <div>
            <Cart items={cartItems} onRemoveFromCart={handleRemoveFromCart} />
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 EasyMart, Freddy Daniel Alvarez - All rights reserved</p>
        </div>
      </footer>
      
    </div>
  );
};

export default App;