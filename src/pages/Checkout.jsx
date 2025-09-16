import React, { useState } from "react";
import { useCart } from "../store/CartContext";
import { useNavigate } from "react-router-dom";

function formatPrice(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default function Checkout() {
  const cart = useCart();
  const navigate = useNavigate();
  const subtotal = cart.items.reduce((s, i) => s + i.price * i.qty, 0);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    zip: "",
    city: "",
    phone: "",
    email: "",
    country: "Sri Lanka",
    province: "Western Province",
    notes: "",
  });

  const placeOrder = (e) => {
    e.preventDefault();
    alert("Order placed (demo).");
    navigate("/");
  };

  return (
    <div className="bg-beige min-h-screen py-10 px-6 md:px-16">
      <div className="md:flex gap-10">
        {/* Billing Form */}
        <form
          onSubmit={placeOrder}
          className="flex-1 bg-white p-8 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-bold text-earthgreen mb-6">
            Billing Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="First Name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              required
            />
            <FormField
              label="Last Name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              required
            />
            <FormField
              label="Company Name (Optional)"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="md:col-span-2"
            />
            <FormField
              label="Street Address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="md:col-span-2"
              required
            />
            <FormField
              label="ZIP Code"
              value={form.zip}
              onChange={(e) => setForm({ ...form, zip: e.target.value })}
              required
            />
            <FormField
              label="Town / City"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              required
            />
            <FormField
              label="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
            <FormField
              label="Email Address"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <select
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-earthgreen"
              >
                <option>Sri Lanka</option>
                <option>Rwanda</option>
                <option>Kenya</option>
              </select>
            </div>
            <FormField
              label="Province"
              value={form.province}
              onChange={(e) => setForm({ ...form, province: e.target.value })}
            />
            <FormTextArea
              label="Additional Information"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="md:col-span-2"
            />
          </div>

          <div className="mt-8">
            <button className="w-full bg bg-earthgreen hover:bg-black text-white py-3 px-4 rounded-lg text-lg font-medium transition-colors">
              Place Order
            </button>
          </div>
        </form>

        {/* Order Summary */}
        <aside className="w-full md:w-96 mt-8 md:mt-0">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-earthgreen mb-6">
              Your Order
            </h3>
            <div className="space-y-4">
              {cart.items.length === 0 && (
                <div className="text-gray-500">No items in cart.</div>
              )}
              {cart.items.map((i) => (
                <div
                  key={i.id}
                  className="flex justify-between border-b pb-2 text-sm"
                >
                  <span>
                    {i.name} × {i.qty}
                  </span>
                  <span className="font-medium">
                    USD {formatPrice(i.price * i.qty)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>USD {formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total</span>
                <span>USD {formatPrice(subtotal)}</span>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <h4 className="font-semibold mb-2">Payment Methods</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <input type="radio" name="payment" defaultChecked />
                  <span>Direct Bank Transfer</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="radio" name="payment" />
                  <span>Cash on Delivery</span>
                </div>
              </div>
              <p className="mt-4 text-xs">
                Your personal data will be used to process your order, support
                your experience on this site, and for other purposes described
                in our privacy policy.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// Reusable Input Field
function FormField({ label, type = "text", className = "", ...props }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-earthgreen"
        {...props}
      />
    </div>
  );
}

// Reusable Text Area
function FormTextArea({ label, className = "", ...props }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        rows={4}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-earthgreen"
        {...props}
      />
    </div>
  );
}
