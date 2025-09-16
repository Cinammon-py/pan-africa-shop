import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, LogOut, User } from "lucide-react";
import { useCart } from "../store/CartContext";
import { useAuth } from "../store/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const cart = useCart();
  const navigate = useNavigate();
  const totalQty = cart.items.reduce((s, i) => s + i.qty, 0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold text-earthgreen tracking-tight hover:text-black transition"
        >
          Pan Africa <span className="text-beige">Food</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg mx-8">
          <div className="flex items-center w-full bg-beige rounded-lg px-3 py-2 shadow-inner">
            <Search className="w-5 h-5 text-earthgreen mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent focus:outline-none text-sm"
            />
          </div>
        </div>

        {/* Navigation + Actions */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6 font-medium text-sm">
            <Link 
              to="/" 
              className="hover:text-earthgreen transition"
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="hover:text-earthgreen transition"
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="hover:text-earthgreen transition"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-earthgreen transition"
            >
              Contact
            </Link>
          </nav>

          {/* Cart */}
          <button 
            onClick={() => navigate("/cart")} 
            className="relative flex items-center hover:text-earthgreen transition"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-earthgreen text-white text-xs font-bold rounded-full px-2 py-0.5">
                {totalQty}
              </span>
            )}
          </button>

          {/* Auth */}
          {user ? (
            <div className="flex items-center space-x-2">
              <span className="hidden sm:inline text-sm">Hi, {user.name}</span>
              <button
                onClick={logout}
                className="flex items-center text-sm text-earthgreen hover:text-black transition"
              >
                <LogOut className="w-4 h-4 mr-1" /> Logout
              </button>
            </div>
          ) : (
            <Link 
              to="/auth" 
              className="flex items-center text-sm font-medium text-earthgreen hover:text-black transition"
            >
              <User className="w-4 h-4 mr-1" /> Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
