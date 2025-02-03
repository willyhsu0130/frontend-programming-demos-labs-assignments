"use client";

import { useCart } from "@/app/context/CartContext";
import Image from 'next/image'

const products = [
    { id: 1, name: "Kick Off Hoodie - Acid Wash Charcoal", price: 75, src: "/KickoffHoodie.webp"},
    { id: 2, name: "SEN City Race Club Hoodie - Red", price: 75, src: "/SenCityRaceClubHoodieRed.webp"},
    { id: 3, name: "SEN City Race Club Hoodie - Black", price: 69, src: "/SenCityRaceClubHoodieBlack.webp"},
];

const ProductsPage = () => {
    const { addToCart } = useCart();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-center">Products</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
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
                        <button
                            className="bg-gray-900 text-white px-3 py-1 rounded"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductsPage