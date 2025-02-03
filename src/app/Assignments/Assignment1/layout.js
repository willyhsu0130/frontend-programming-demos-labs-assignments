"use client"
import { CartProvider } from "@/app/context/CartContext";
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav className="w-full flex bg-gray-900">
            <div className="w-3/5 p-4 text-white flex justify-start space-x-20">
                <Link href="/Assignments/Assignment1">Home</Link>
                <Link href="/Assignments/Assignment1/products">Products</Link>
            </div>
            <div className="w-2/5 p-4 flex justify-end">
                <button>
                    <Link href="/Assignments/Assignment1/cart">
                        <ShoppingCart className="text-white" />
                    </Link>
                </button>
            </div>
        </nav>
    )
}

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body
                className="__variable_4d318d __variable_ea5f4b antialiased"
            >
                <div className="min-h-screen flex flex-col items-center">
                    <NavBar />
                    <main className="p-6">
                        <CartProvider>
                            {children}
                        </CartProvider>
                    </main>
                </div>
            </body>
        </html>
    );
}
