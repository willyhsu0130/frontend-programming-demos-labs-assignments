"use client";

import { CheckCircle } from "lucide-react"
import { useCart } from "@/app/context/CartContext"
import { useState } from "react"
import Image from 'next/image'

// Declare all the products, including its id, price, and src cuz we have to pass in the url for it to render
const products = [
    { id: 1, name: "Kick Off Hoodie - Acid Wash Charcoal", price: 75, src: "/KickoffHoodie.webp" },
    { id: 2, name: "SEN City Race Club Hoodie - Red", price: 75, src: "/SenCityRaceClubHoodieRed.webp" },
    { id: 3, name: "SEN City Race Club Hoodie - Black", price: 69, src: "/SenCityRaceClubHoodieBlack.webp" },
];

const ProductsPage = () => {
    // Get addToCart function from useCart() again
    const { addToCart } = useCart();
    const [showPopup, setShowPopup] = useState(false)
    const handleAddToCart = () => {
        setShowPopup(true)
        setInterval(()=>{
            setShowPopup(false);
        }, 2000)
    }
    return (
        <>
        <title>Products</title>
        <div className="p-6">
            <h1 className="text-2xl font-bold text-center">Products</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                {/* map through all the products from the proudcts array and display it one by one by passing in the vales */}
                {products.map((product) => (
                    <li key={product.id} className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <div>
                            <Image
                                src={product.src}
                                width={200}
                                height={200}
                                alt="KiickoffHoodie"
                            />
                            <h1>{product.name} </h1>
                            <h1>${product.price}</h1>
                        </div>
                        {/* When the button is clicked, call addToCart from the CartContext */}
                        <button
                            className="bg-gray-900 text-white px-3 py-1 rounded"
                            onClick={() => {
                                addToCart(product)
                                handleAddToCart()
                            }}
                        >
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
            {/* Popup Notification */}
            {showPopup && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>Item added to cart!</span>
                </div>
            )}
        </div>
        </>
    );
}

export default ProductsPage