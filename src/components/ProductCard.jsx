import { useState, useEffect } from "react";
import { useCartDispatch } from "../store/CartContext";
import { formatPrice } from "../data/products";

export default function ProductCard({ product }) {
  const dispatch = useCartDispatch();
  const [showToast, setShowToast] = useState(false);

  const addToCart = () => {
    dispatch({ type: "ADD", item: product });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleImageError = (e) => {
    console.error(`Failed to load image: ${product.image}`);
    setImageError(true);
    e.target.src = '/assets/images/placeholder.jpg';
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        {/* Toast Notification */}
        {showToast && (
          <div className="absolute top-4 right-4 z-50 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-down">
            ✓ Added to cart
          </div>
        )}
        {/* Product Badge */}
        {product.badge && (
          <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-white font-semibold text-sm ${product.badgeType === 'discount' ? 'bg-red-500' : 'bg-green-500'
            }`}>
            {product.badgeType === 'discount' ? `-${product.badge}` : product.badge}
          </div>
        )}

        {/* Product Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 h-64">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={handleImageError}
          />

          {/* Hover Actions */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white p-3 rounded-full hover:bg-green-700 hover:text-white transition-colors duration-300 shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                </svg>
              </button>
              <button className="bg-white p-3 rounded-full hover:bg-green-700 hover:text-white transition-colors duration-300 shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
              <button className="bg-white p-3 rounded-full hover:bg-green-700 hover:text-white transition-colors duration-300 shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-green-700">
                USD {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-gray-400 line-through">
                  USD {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={addToCart}
            className="w-full bg-gray-900 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}