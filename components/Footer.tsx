import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../src/assets/logo.png';


interface FooterProps {
  onOpenDemo: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenDemo }) => {
  const navigate = useNavigate();

  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Big CTA */}
        <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-3xl p-16 text-center mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Visibility For Your<br />Distributed Operations</h2>
          <p className="text-gray-500 mb-8 text-lg">Scale your business with trustable visual intelligence.</p>

          <div className="flex flex-col items-center gap-4">
            <button onClick={onOpenDemo} className="bg-brand-900 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/30">
              Request a demo
            </button>
            <div className="flex items-center gap-6 mt-4 justify-center">
              <div className="flex items-center gap-2 grayscale opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-2.61-.592 2.003 2.003 0 0 1 .55-2.673l.059-.037V3.308a1.99 1.99 0 0 1 2.001-1.494zM15.208 13.414L19.46 17.666 4.98 23.363a1.995 1.995 0 0 1-2.486-.484L15.208 13.414zm4.252-4.252l-4.252 4.252-12.714-12.714a1.997 1.997 0 0 1 2.485-.484L19.46 6.334z" /></svg>
                <span className="font-bold text-lg text-gray-400 uppercase tracking-wide">4.8 Play Store</span>
              </div>
              <div className="flex items-center gap-2 grayscale opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.636 12.01c.025-2.81 2.296-4.162 2.403-4.218-1.31-1.91-3.344-2.17-4.06-2.193-1.71-.176-3.37.994-4.246.994-.887 0-2.227-.97-3.66-.946-1.884.025-3.623 1.094-4.59 2.78-1.96 3.4-1.674 8.785-.27 10.8a6.52 6.52 0 0 0 2.22 2.92c1.07.697 1.157.48.56-.41.36-.54.89-1.29 1.34-1.99 1.25-1.96 2.4-2.02 2.46-2.03.04.01.07.03.11.04.57 2.07 1.83 4.29 2.68 4.39.85.1 2.11-.93 2.64-2.09.52-1.16 1.37-3.79 1.37-3.79s-.59-1.35-1.04-2.28c-.46-.93-2.04-4.16-2.04-4.16s2.51.15 3.96 2.02c.07.09 2.06-2.3 2.06-2.3zM14.78 4.5c.77-1 1.275-2.32 1.144-3.69-.607.06-2.58.55-3.9 1.85-.357.34-.84.97-1.17 1.8.69.04 1.48-.05 2.15-.3 1.07-.4 1.77.34 1.77.34z" /></svg>
                <span className="font-bold text-lg text-gray-400 uppercase tracking-wide">4.9 App Store</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 border-t border-gray-100 pt-10">

          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logo} alt="TrueVisual" className="h-8 w-auto" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              TrueVisual is the leading visual intelligence platform that empowers businesses to verify operations, reduce fraud, and improve compliance through AI-powered visual proofs.
            </p>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><button onClick={() => navigate('/about')} className="hover:text-brand-600 transition-colors">About Us</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-brand-600 transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Visual Cutout */}
          <div className="lg:col-span-3 h-32 rounded-2xl bg-gradient-to-r from-brand-900 to-brand-800 p-6 flex items-center justify-between relative overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-all">
            {/* Decorative Circles */}
            <div className="absolute -right-4 -top-8 w-24 h-24 rounded-full bg-white/10 blur-xl group-hover:bg-white/20 transition-all"></div>
            <div className="absolute right-10 -bottom-10 w-32 h-32 rounded-full bg-brand-500/20 blur-xl"></div>

            {/* Left: Logo (White) */}
            <div className="relative z-10 text-white">
              <img src={logo} alt="TrueVisual" className="h-8 w-auto brightness-0 invert" />
            </div>

            {/* Right: Text */}
            <div className="relative z-10 text-right">
              <h3 className="text-white font-bold text-lg mb-1">Visual Intelligence</h3>
              <p className="text-brand-100 text-sm">Empowering 75+ Enterprises with<br />trustable field data.</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-100 text-xs text-gray-400">
          <div className="flex gap-6 mb-4 md:mb-0">
            <button onClick={() => navigate('/privacy')} className="hover:text-brand-600 transition-colors">Privacy Policy</button>
          </div>
          <div>© 2025 TrueVisual Inc. All rights reserved</div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;