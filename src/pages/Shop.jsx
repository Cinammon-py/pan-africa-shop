import React, { useState } from "react";
import { products } from "../data/products"; // Changed from default import
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('default');
  const [showCount, setShowCount] = useState(16);

  // Sample products with African food items and realistic images
  // const sampleProducts = [
  //   {
  //     id: 1,
  //     name: "Nido Milk Powder",
  //     price: 500000,
  //     originalPrice: 800000,
  //     image: "/assets/images/Products/Nido.jpeg",
  //     badge: "30%",
  //     badgeType: "discount",
  //     description: "Premium instant milk powder from Africa"
  //   },
  //   {
  //     id: 2,
  //     name: "Movit Jerry Hair Food",
  //     price: 500000,
  //     image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
  //     badge: "50%",
  //     badgeType: "discount",
  //     description: "Natural hair treatment with African botanicals"
  //   },
  //   {
  //     id: 3,
  //     name: "Kinazi Coconut Milk",
  //     price: 500000,
  //     image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop&crop=center",
  //     badge: "New",
  //     badgeType: "new",
  //     description: "Pure coconut milk from East African coconuts"
  //   },
  //   {
  //     id: 4,
  //     name: "Kinazi Cassava Flour",
  //     price: 500000,
  //     image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop&crop=center",
  //     badge: "New",
  //     badgeType: "new",
  //     description: "Traditional cassava flour for authentic African dishes"
  //   },
  //   {
  //     id: 5,
  //     name: "Nido Family Pack",
  //     price: 500000,
  //     originalPrice: 800000,
  //     image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop&crop=center",
  //     badge: "30%",
  //     badgeType: "discount",
  //     description: "Family size instant milk powder"
  //   },
  //   {
  //     id: 6,
  //     name: "Movit Jerry Premium",
  //     price: 500000,
  //     image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop&crop=center",
  //     description: "Premium hair care with natural ingredients"
  //   },
  //   {
  //     id: 7,
  //     name: "Goya Coconut Milk",
  //     price: 400000,
  //     originalPrice: 700000,
  //     image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=400&fit=crop&crop=center",
  //     badge: "50%",
  //     badgeType: "discount",
  //     description: "Rich and creamy coconut milk"
  //   },
  //   {
  //     id: 8,
  //     name: "Kinazi Rice Flour",
  //     price: 500000,
  //     image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop&crop=center",
  //     badge: "New",
  //     badgeType: "new",
  //     description: "Fine rice flour for traditional recipes"
  //   }
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-green-50">
      {/* Hero Section */}
      <div 
        className="relative h-64 bg-cover bg-center bg-gray-300 flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/images/shopimg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Shop</h1>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <span>Home</span>
            <span className="text-amber-300">›</span>
            <span className="text-amber-300">Shop</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filter and Sort Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
              </svg>
              <span>Filter</span>
            </button>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-green-700 text-white' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z"/>
                </svg>
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-green-700 text-white' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
                </svg>
              </button>
            </div>
            
            {/* <div className="text-gray-600">
              Showing 1–{Math.min(showCount, sampleProducts.length)} of {sampleProducts.length} results
            </div> */}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Show</span>
              <select 
                value={showCount}
                onChange={(e) => setShowCount(parseInt(e.target.value))}
                className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value={8}>8</option>
                <option value={16}>16</option>
                <option value={24}>24</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Sort by</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Products</h2>
          
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'} gap-8`}>
            {products.slice(0, showCount).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Previous
          </button>
          <button className="px-4 py-2 bg-green-700 text-white rounded-lg">1</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}