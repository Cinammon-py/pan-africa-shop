import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-6xl font-bold text-earthgreen">404</h1>
      <p className="mt-4 text-gray-700">Oops! Page not found.</p>
      <Link to="/" className="mt-6 bg-earthgreen text-white px-4 py-2 rounded hover:bg-black">
        Go Home
      </Link>
    </div>
  );
}
