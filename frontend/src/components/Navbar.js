// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-brand-primary tracking-wide">
           Book Library
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-brand-text-muted hover:text-brand-primary transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/books"
            className="text-brand-text-muted hover:text-brand-primary transition duration-300"
          >
            Books
          </Link>
          <Link
            to="/borrowed"
            className="text-brand-text-muted hover:text-brand-primary transition duration-300"
          >
            Borrowed
          </Link>
          <Link
            to="/about"
            className="text-brand-text-muted hover:text-brand-primary transition duration-300"
          >
            About
          </Link>
          
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-brand-primary text-white hover:bg-brand-primary-dark transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-lg border border-brand-primary text-brand-primary hover:bg-brand-surface-muted transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
