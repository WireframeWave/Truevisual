import React from 'react';
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../src/assets/logo.png';

interface NavbarProps {
  onOpenDemo: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="TrueVisual" className="h-8 w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#visual-truth" className="text-gray-600 hover:text-brand-700 font-medium cursor-pointer transition-colors">Visual Truth</a>
            <a href="#features" className="text-gray-600 hover:text-brand-700 font-medium cursor-pointer transition-colors">Features</a>
            <a href="#industries" className="text-gray-600 hover:text-brand-700 font-medium cursor-pointer transition-colors">Industries</a>
            <a href="#workflow" className="text-gray-600 hover:text-brand-700 font-medium cursor-pointer transition-colors">Mobile Workflow</a>
            <button onClick={() => navigate('/case-studies')} className="text-gray-600 hover:text-brand-700 font-medium cursor-pointer transition-colors">Case Studies</button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigate('/auth')}
              className="text-gray-900 font-medium hover:text-brand-700"
            >
              Login
            </button>
            <button onClick={onOpenDemo} className="bg-brand-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/20">
              Request a demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;