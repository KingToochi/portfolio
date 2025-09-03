// src/components/LandingPage.jsx
import { ShoppingCart } from "lucide-react";
import watch from "../assets/watch.jpg"
import mouse from "../assets/mouse.jpg"
import keyboard from "../assets/keyboard.wepd"
import headset from "../assets/headset.jpg"

export default function LandingPage() {
  const products = [
    {
      id: 1,
      name: headset,
      price: "$99",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      name: watch,
      price: "$199",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      name: mouse,
      price: "$49",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      name: keyboard,
      price: "$129",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to E-Shop</h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the latest tech products at amazing prices.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform"
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
                <button className="mt-4 flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition">
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Shop With Us?</h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg">
          E-Shop brings you the best tech products at unbeatable prices. Enjoy fast shipping, secure payments, and excellent customer support.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2025 AmaniSky. All rights reserved.</p>
      </footer>
    </div>
  );
}
