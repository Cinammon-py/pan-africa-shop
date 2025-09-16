import React from "react";
import { Leaf, Globe, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <div className="bg-beige min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-20 px-6 text-center"
        style={{ backgroundImage: "url('/assets/images/Products/abouttop.jpg')" }} // place in /public
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="text-beige">Pan Africa Food</span>
          </h1>
          <p className="text-lg md:text-xl text-beige/90">
            Celebrating Africa’s rich heritage of flavors and craftsmanship, one product at a time.
          </p>
        </div>
      </section>

      {/* Mission Story */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-earthgreen mb-6">Our Mission</h2>
          <p className="text-brandblack leading-relaxed mb-4">
            Pan Africa Food is a trusted marketplace for authentic products across the continent.
            Our mission is to connect communities with quality goods, ensuring access to sustainable,
            locally sourced items while celebrating Africa’s heritage of flavors and craftsmanship.
          </p>
          <p className="text-brandblack leading-relaxed">
            We believe in transparency, fairness, and supporting local producers. By shopping with us,
            you are empowering small businesses, fostering sustainability, and investing in Africa’s future.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/assets/images/Products/Arfican-farmer.jpg" // add image to /public
            alt="African farmers and produce"
            className="w-full h-96 object-cover"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-earthgreen mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Authenticity */}
            <div className="p-6 bg-beige rounded-xl shadow hover:shadow-lg transition">
              <Leaf className="w-12 h-12 text-earthgreen mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-brandblack mb-2">Authenticity</h3>
              <p className="text-gray-700 leading-relaxed">
                We bring you genuine African products, sourced directly from local farmers and artisans.
              </p>
            </div>
            {/* Sustainability */}
            <div className="p-6 bg-beige rounded-xl shadow hover:shadow-lg transition">
              <Globe className="w-12 h-12 text-earthgreen mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-brandblack mb-2">Sustainability</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in ethical sourcing, supporting communities, and protecting the environment.
              </p>
            </div>
            {/* Community */}
            <div className="p-6 bg-beige rounded-xl shadow hover:shadow-lg transition">
              <HeartHandshake className="w-12 h-12 text-earthgreen mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-brandblack mb-2">Community</h3>
              <p className="text-gray-700 leading-relaxed">
                Every purchase supports African farmers and strengthens local economies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-earthgreen text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Be Part of the Journey</h2>
        <p className="max-w-2xl mx-auto text-beige/90 mb-8">
          Join us in celebrating Africa’s flavors and empowering its communities.
        </p>
        <a
          href="/shop"
          className="bg-beige text-earthgreen px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition"
        >
          Start Shopping
        </a>
      </section>
    </div>
  );
}
