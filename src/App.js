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
      category: "electronics"
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      description: "Premium sound quality with noise cancellation",
      price: 149.99,
      rating: 5,
      category: "electronics"
    },
    {
      id: 3,
      name: "Laptop Stand",
      description: "Ergonomic aluminum laptop stand",
      price: 49.99,
      rating: 4,
      category: "accessories"
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
          <h1 className="text-3xl font-bold text-gray-900">AI-Driven E-commerce</h1>
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
    </div>
  );
};

export default App;