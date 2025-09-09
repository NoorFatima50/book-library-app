// src/components/Navbar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">BookLibrary</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive("/") 
                  ? "text-brand-primary bg-brand-primary/10" 
                  : "text-gray-700 hover:text-brand-primary hover:bg-gray-50"
              }`}
            >
              Home
            </Link>
            <Link
              to="/books"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive("/books") 
                  ? "text-brand-primary bg-brand-primary/10" 
                  : "text-gray-700 hover:text-brand-primary hover:bg-gray-50"
              }`}
            >
              Books
            </Link>
            <Link
              to="/borrowed"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive("/borrowed") 
                  ? "text-brand-primary bg-brand-primary/10" 
                  : "text-gray-700 hover:text-brand-primary hover:bg-gray-50"
              }`}
            >
              My Books
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive("/about") 
                  ? "text-brand-primary bg-brand-primary/10" 
                  : "text-gray-700 hover:text-brand-primary hover:bg-gray-50"
              }`}
            >
              About
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 bg-gradient-to-r from-brand-primary to-purple-600 text-white text-sm font-medium rounded-lg hover:from-brand-primary-dark hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive("/") 
                    ? "text-brand-primary bg-brand-primary/10" 
                    : "text-gray-700 hover:text-brand-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/books"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive("/books") 
                    ? "text-brand-primary bg-brand-primary/10" 
                    : "text-gray-700 hover:text-brand-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Books
              </Link>
              <Link
                to="/borrowed"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive("/borrowed") 
                    ? "text-brand-primary bg-brand-primary/10" 
                    : "text-gray-700 hover:text-brand-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                My Books
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive("/about") 
                    ? "text-brand-primary bg-brand-primary/10" 
                    : "text-gray-700 hover:text-brand-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="space-y-1">
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-brand-primary to-purple-600 text-white hover:from-brand-primary-dark hover:to-purple-700 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
