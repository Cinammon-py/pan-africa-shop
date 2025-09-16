import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import categories from "../data/categories";
import * as Icons from "lucide-react";

function Icon({ name, className }) {
  const LucideIcon = Icons[name] || Icons.HelpCircle;
  return <LucideIcon className={className} />;
}

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative bg-cover bg-center text-white py-28 px-6 text-center"
        style={{
          backgroundImage:
            "url('/assets/images/chuttersnap-KCSR5QzSUH8-unsplash.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-[url('/assets/images/pattern.png')] opacity-50 mix-blend-overlay"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Pan Africa <span className="block text-beige">Food Shop</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-100">
            Discover authentic flavors of Africa — from aromatic spices to
            premium oils. Bring the continent’s finest ingredients to your
            kitchen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="bg-beige text-earthgreen px-8 py-4 rounded-lg text-lg font-semibold shadow-md hover:bg-white hover:scale-105 transition transform"
            >
              Explore Products
            </Link>
            <Link
              to="/about"
              className="border-2 border-beige text-beige px-8 py-4 rounded-lg text-lg font-semibold hover:bg-beige hover:text-earthgreen transition"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-earthgreen mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="bg-white border border-beige rounded-xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition transform"
              >
                <div className="bg-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={cat.icon}
                    className="w-8 h-8 text-earthgreen"
                  />
                </div>
                <h3 className="text-lg font-semibold text-brandblack mb-2">
                  {cat.name}
                </h3>
                <p className="text-earthgreen font-medium">{cat.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-earthgreen mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/shop/${product.id}`}
                className="bg-amber-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-brandblack mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold text-earthgreen mb-4">
                    USD{" "}
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </p>
                  <span className="inline-block text-sm text-earthgreen font-medium">
                    View details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-earthgreen mb-12">
            Why Choose Pan Africa Food?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="bg-earthgreen/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icons.Globe className="w-10 h-10 text-earthgreen" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic Products</h3>
              <p className="text-gray-600">
                Direct from African farmers and producers, ensuring authenticity
                and quality.
              </p>
            </div>
            <div>
              <div className="bg-earthgreen/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icons.Truck className="w-10 h-10 text-earthgreen" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Delivery</h3>
              <p className="text-gray-600">
                Fast and secure delivery with packaging that preserves freshness.
              </p>
            </div>
            <div>
              <div className="bg-earthgreen/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icons.Heart className="w-10 h-10 text-earthgreen" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Supporting Communities</h3>
              <p className="text-gray-600">
                Every purchase supports African farmers and sustainable
                businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-earthgreen text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="mb-8 text-beige">
            Get updates on new products, recipes, and stories from across Africa.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-beige"
            />
            <button className="bg-beige text-earthgreen px-8 py-3 rounded-lg font-semibold hover:bg-white hover:scale-105 transition transform">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-amber-50 text-center">
        <h2 className="text-4xl font-bold text-earthgreen mb-6">
          Ready to Taste Africa?
        </h2>
        <p className="text-gray-700 mb-10">
          Start your journey with our premium African ingredients.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-earthgreen hover:bg-black text-white px-12 py-4 rounded-lg text-xl font-semibold transition transform hover:scale-105 shadow-lg"
        >
          Start Shopping
        </Link>
      </section>
    </div>
  );
}
