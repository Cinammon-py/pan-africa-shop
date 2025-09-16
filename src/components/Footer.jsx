import React from "react";

export default function Footer() {
  return (
    <footer className="bg-earthgreen text-beige">
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex md:justify-between">
          <div className="flex items-center">
            <img 
              src="/assets/images/Logo.jpeg" 
              alt="Pan Africa Food Logo" 
              className="w-16 h-16 mr-4"
            />
            <div>
              <h4 className="font-semibold text-lg">Pan Africa Food</h4>
              <p className="mt-2 text-sm">High Quality — crafted from top materials</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-sm">
            <p>Payment Options • Returns • Privacy Policies</p>
          </div>
        </div>
        <div className="mt-6 border-t border-beige/40 pt-4 flex justify-between text-xs">
          <p>Newsletter — Enter Your Email Address</p>
          <p>© 2025 Pan Africa Food. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}