'use client';

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin , Sparkles } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Residential Design',
    'Commercial Design',
    'Space Planning',
    'Lighting Design',
    'Furniture Selection',
  ];

  return (
     <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Sparkles className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-2xl font-bold">Luxe Interior</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforming spaces into beautiful, functional environments that reflect your unique style and enhance your quality of life.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/luxeinteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/luxeinteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/luxeinteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-blue-500" />
                <span>123 Design Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={18} className="mr-3 flex-shrink-0 text-blue-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={18} className="mr-3 flex-shrink-0 text-blue-500" />
                <span>hello@luxeinteriors.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Luxe Interior. All rights reserved. | 
            <span className="hover:text-white cursor-pointer transition-colors duration-200 ml-1">Privacy Policy</span> | 
            <span className="hover:text-white cursor-pointer transition-colors duration-200 ml-1">Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
