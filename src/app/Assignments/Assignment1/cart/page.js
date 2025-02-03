"use client";

import { useCart } from "@/app/context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart()
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="mt-4">Your cart is empty.</p>
      ) : (
        <ul className="mt-4">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-2 border p-2">
              <span className="mr-5">{item.name} - ${item.price}</span>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage