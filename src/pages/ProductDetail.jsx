import React from "react";
import { useParams } from "react-router-dom";
import {products} from "../data/products";
import { useCartDispatch } from "../store/CartContext";

function formatPrice(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const dispatch = useCartDispatch();

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="bg-white rounded-lg shadow p-6 md:flex gap-6">
      <div className="flex-1 bg-gray-100 h-64 rounded flex items-center justify-center">
      <div className="flex-1">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover rounded"
          />
        </div>
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-earthgreen">{product.name}</h1>
        <p className="mt-2 text-gray-700">{product.description}</p>
        <div className="mt-4">
          <div className="text-xl font-bold text-black">USD {formatPrice(product.price)}</div>
          {product.oldPrice && (
            <div className="line-through text-gray-400">USD {formatPrice(product.oldPrice)}</div>
          )}
        </div>
        <button
          onClick={() => dispatch({ type: "ADD", item: product, qty: 1 })}
          className="mt-6 bg-earthgreen text-white px-4 py-2 rounded hover:bg-black"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
