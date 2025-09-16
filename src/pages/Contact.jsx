import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10 mb-10">
      <h1 className="text-4xl font-extrabold text-earthgreen mb-4 text-center">
        Contact Us
      </h1>
      <p className="text-gray-700 mb-8 text-center">
        Have questions, feedback, or partnership opportunities? Reach out to us below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-earthgreen transition"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-earthgreen transition"
          placeholder="Your Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-earthgreen transition"
          placeholder="Your Message"
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full bg-earthgreen text-white py-3 rounded-lg font-semibold text-lg hover:bg-black transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
