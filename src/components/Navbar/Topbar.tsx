

"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Shield } from 'lucide-react';

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-200 backdrop-blur-xl border-b border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <Link href="/" className="relative flex items-center">
              <Shield className="w-6 h-6 text-gray-900 mr-2" />
              <span className="text-xl font-bold text-gray-900">
                Blueshine{' '}
                <span className="text-gray-600">
                  Associates
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="relative text-gray-700 hover:text-gray-900 transition-colors duration-300 font-medium group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link href="/contact">
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-md transition-all duration-300 font-medium shadow hover:shadow-md flex items-center space-x-2 group">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-all duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <nav className="py-4 space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Link href="/contact">
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md transition-all duration-300 font-medium shadow flex items-center justify-center space-x-2 group">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}