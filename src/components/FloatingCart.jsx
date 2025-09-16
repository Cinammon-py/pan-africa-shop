import { Link } from "react-router-dom";
import { useCart } from "../store/CartContext";
import { useState, useEffect } from "react";

export default function FloatingCart() {
  const cart = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const totalQty = cart.items.reduce((s, i) => s + i.qty, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Link 
      to="/cart"
      className="fixed bottom-8 right-8 bg-green-700 text-white p-4 rounded-full shadow-lg hover:bg-green-800 transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center group"
    >
      <div className="relative">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {totalQty}
          </span>
        )}
      </div>
      <span className="absolute right-full mr-2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        View Cart
      </span>
    </Link>
  );
}