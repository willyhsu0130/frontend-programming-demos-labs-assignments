import Link from "next/link"
const Home = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Welcome to Our Store!</h1>
            <p className="text-center">Browse our products and add items to your cart.</p>
            <div className="mt-10 text-center">
                <Link
                    href="/Assignments/Assignment1/products"
                    className="text-6xl text-center hover:text-blue-500"
                >Browse Items</Link>
            </div>

        </div>
    )
}

export default Home