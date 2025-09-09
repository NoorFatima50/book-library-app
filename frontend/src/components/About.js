import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-purple-600 to-blue-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Our
              <span className="block text-brand-accent">Digital Library</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Discover the story behind our innovative platform and our mission to make reading accessible to everyone
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that access to books and knowledge should be universal
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Empowering Readers Worldwide</h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Our digital library platform connects readers with their favorite books, making it easy to discover, 
              borrow, and enjoy literature from anywhere in the world. We've built a community where knowledge 
              flows freely and reading becomes an accessible joy for everyone.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Whether you're a student, professional, or casual reader, our platform provides a seamless 
              experience for managing your reading journey and exploring new worlds through books.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/books")}
                className="px-6 py-3 border-2 border-brand-primary text-brand-primary font-bold rounded-lg hover:bg-brand-primary hover:text-white transition-all duration-200"
              >
                Explore Books
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of digital library management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">Browse and borrow books instantly with our optimized interface. No waiting, no complicated processes.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reliable & Secure</h3>
              <p className="text-gray-600">Built with modern technology and security measures to ensure your reading experience is smooth and protected.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Extensive Collection</h3>
              <p className="text-gray-600">Access thousands of books across all genres and categories, from classics to contemporary bestsellers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate developers and book lovers working to make reading accessible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-brand-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-white">NF</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Noor Fatima</h3>
              <p className="text-brand-primary font-medium mb-2">Founder & Lead Developer</p>
              <p className="text-gray-600">Passionate about creating digital solutions that make knowledge accessible to everyone.</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-white">U</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Users</h3>
              <p className="text-brand-primary font-medium mb-2">Community</p>
              <p className="text-gray-600">The heart of our platform - readers who inspire us to keep improving.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-brand-primary to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Reading Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of readers who trust our platform for their digital library needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/register")}
              className="px-8 py-4 bg-white text-brand-primary font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Create Your Account
            </button>
            <button
              onClick={() => navigate("/books")}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-brand-primary transform hover:scale-105 transition-all duration-300"
            >
              Browse Books
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;