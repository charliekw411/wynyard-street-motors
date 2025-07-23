import React from 'react';
import { Wrench, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-400" />
                <span className="text-gray-400">1 Wynyard Street, Devonport 0624</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400" />
                <a href="tel:094451357" className="text-gray-400 hover:text-red-400 transition-colors">
                  09 445 1357
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-red-400" />
                <span className="text-gray-400">Mon-Fri: 8AM-5PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Wynyard Street Motors. All rights reserved.
          </p>
          <div className="flex items-center space-x-5 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm"></span>
            {/* Placeholder for MTA Assured badge */}
            <div className="w-20 h-20">
              <img
                src="/public/mta-assured.jpg"
                alt="MTA Assured"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;