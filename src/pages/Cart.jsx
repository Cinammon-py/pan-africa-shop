import React from "react";
import { Link } from "react-router-dom";
import { useCart, useCartDispatch } from "../store/CartContext";

function formatPrice(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default function CartPage() {
  const cart = useCart();
  const dispatch = useCartDispatch();

  const subtotal = cart.items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="md:flex gap-8 px-6 md:px-10 py-10">
      {/* Cart Items */}
      <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-earthgreen">Your Cart</h2>

        {cart.items.length === 0 ? (
          <p className="text-gray-500">No items in cart.</p>
        ) : (
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-gray-100 flex items-center justify-center rounded-lg">
                    Img
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{item.name}</div>
                    <div className="text-sm text-gray-500">
                      USD {formatPrice(item.price)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "UPDATE_QTY",
                        id: item.id,
                        qty: Math.max(1, Number(e.target.value)),
                      })
                    }
                    className="w-16 p-2 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-earthgreen transition"
                  />
                  <div className="w-28 text-right font-medium">
                    USD {formatPrice(item.price * item.qty)}
                  </div>
                  <button
                    onClick={() => dispatch({ type: "REMOVE", id: item.id })}
                    className="text-red-500 hover:text-red-700 text-sm font-semibold transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sidebar / Cart Totals */}
      <aside className="w-full md:w-80 mt-6 md:mt-0 flex flex-col gap-4">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="font-bold text-xl mb-4 text-earthgreen">Cart Totals</h3>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Subtotal</span>
            <span>USD {formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>USD {formatPrice(subtotal)}</span>
          </div>
          <Link
            to="/checkout"
            className="block bg-earthgreen hover:bg-black text-white text-center py-3 rounded-lg font-semibold transition"
          >
            Check Out
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-sm text-gray-600">
          <ul className="space-y-2 list-disc list-inside">
            <li>High Quality — crafted from top materials</li>
            <li>Warranty Protection — Over 2 years</li>
            <li>Free Shipping — Order over $150</li>
            <li>24 / 7 Support — Dedicated assistance</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
