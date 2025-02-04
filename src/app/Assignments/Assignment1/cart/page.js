"use client";
// import useCart to access the cart functions
import { useCart } from "@/app/Assignments/Assignment1/CartContext";

const CartPage = () => {
  // Deconstruct cart, removeFromCart functions from useCart
  const { cart, removeFromCart } = useCart()
  return (
    <>
    <title>Cart</title>
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center">Your Cart</h1>
      {/* If the cart is empty, display "your cart is empty" */}
      {/* If not,  map through the entire cart array  */}
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
    </>
  );
}

export default CartPage