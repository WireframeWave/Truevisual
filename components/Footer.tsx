import React from 'react';

interface FooterProps {
  onOpenDemo: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenDemo }) => {
  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Big CTA */}
        <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-3xl p-16 text-center mb-20 relative overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 border-t border-gray-100 pt-16">

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
              <li><a href="#" className="hover:text-brand-600">Careers</a></li>
              <li><a href="#" className="hover:text-brand-600">Customers</a></li>
              <li><a href="#" className="hover:text-brand-600">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-600">Visual Verification</a></li>
              <li><a href="#" className="hover:text-brand-600">Field Intelligence</a></li>
              <li><a href="#" className="hover:text-brand-600">Fraud Detection</a></li>
              <li><a href="#" className="hover:text-brand-600">API Documentation</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Stay Updated</h4>
            <div className="flex gap-2 mb-2">
              <input type="email" placeholder="Enter Your Email" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm flex-1 outline-none focus:ring-2 focus:ring-brand-500" />
              <button className="bg-brand-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-800">Subscribe</button>
            </div>
            <p className="text-[10px] text-gray-400">By subscribing you agree to our Privacy Policy</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-100 text-xs text-gray-400">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security</a>
          </div>
          <div>© 2025 TrueVisual Inc. All rights reserved</div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;