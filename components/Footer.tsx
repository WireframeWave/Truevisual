import React from 'react';
import { useNavigate } from 'react-router-dom';


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
            <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
              <span>4.8 on G2.com</span>
              <span>4.9 on Capterra</span>
            </div>
          </div>
        </div>

        {/* Footer Links Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 border-t border-gray-100 pt-10">

          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 bg-brand-700 rounded-sm"></div>
              <span className="font-bold text-xl text-gray-900">TrueVisual</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              TrueVisual is the leading visual intelligence platform that empowers businesses to verify operations, reduce fraud, and improve compliance through AI-powered visual proofs.
            </p>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-600">About Us</a></li>
              <li><a href="#" className="hover:text-brand-600">Contact</a></li>
            </ul>
          </div>

          {/* Visual Cutout */}
          <div className="lg:col-span-3 h-32 rounded-2xl bg-gradient-to-r from-brand-900 to-brand-800 p-6 flex flex-col justify-center relative overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-all">
            {/* Decorative Circles */}
            <div className="absolute -right-4 -top-8 w-24 h-24 rounded-full bg-white/10 blur-xl group-hover:bg-white/20 transition-all"></div>
            <div className="absolute right-10 -bottom-10 w-32 h-32 rounded-full bg-brand-500/20 blur-xl"></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-white font-bold text-lg mb-1">Visual Intelligence</h3>
              <p className="text-brand-100 text-sm">Empowering 75+ Enterprises with<br />trustable field data.</p>
            </div>

            {/* Arrow Icon */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
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