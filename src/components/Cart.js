import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Cart = ({ items, onRemoveFromCart }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <ShoppingCart className="mr-2" /> Shopping Cart
      </h2>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-3 pb-3 border-b">
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-gray-600">
              ${item.price} x {item.quantity}
            </p>
          </div>
          <button
            onClick={() => onRemoveFromCart(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mt-4 pt-4 border-t">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;