"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="font-bold text-xl">AMARG</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#services" className="hover:text-accent">Services</a>
          <a href="#plans" className="hover:text-accent">Plans</a>
          <a href="#about" className="hover:text-accent">About</a>
          <a
            href="#contact"
            className="bg-accent px-4 py-2 rounded font-medium hover:opacity-90"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col space-y-1"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary px-6 pb-6 space-y-4">
          <a
            href="#services"
            className="block hover:text-accent"
            onClick={() => setOpen(false)}
          >
            Services
          </a>
          <a
            href="#plans"
            className="block hover:text-accent"
            onClick={() => setOpen(false)}
          >
            Plans
          </a>
          <a
            href="#about"
            className="block hover:text-accent"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="block bg-accent px-4 py-2 rounded text-center"
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}