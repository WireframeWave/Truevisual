import React from 'react';
import kushalsLogo from '../src/assets/brands/kushals.png';
import eyLogo from '../src/assets/brands/ey.png';
import lifestyleLogo from '../src/assets/brands/lifestyle.png';
import sonyLogo from '../src/assets/brands/sony.png';
import tataPlayLogo from '../src/assets/brands/tataplay.png';

interface HeroProps {
  onOpenDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  // Logos ordered specifically: Kushal's, EY, Lifestyle, Sony, Tata Play
  const companies = [
    {
      name: "Kushal's",
      logo: kushalsLogo,
      className: "h-20"
    },
    {
      name: "EY",
      logo: eyLogo,
      className: "h-20"
    },
    {
      name: "Lifestyle",
      logo: lifestyleLogo,
      className: "h-20"
    },
    {
      name: "Sony",
      logo: sonyLogo,
      className: "h-20"
    },
    {
      name: "Tata Play",
      logo: tataPlayLogo,
      className: "h-14"
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white pt-24 md:pt-32">
      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(3deg); }
        }
        @keyframes slowRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scanning {
          0%, 100% { opacity: 0.2; transform: translateY(-40px); }
          50% { opacity: 0.8; transform: translateY(40px); }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .animate-slow-rotate {
          animation: slowRotate 40s linear infinite;
        }
        .animate-scan {
          animation: scanning 5s ease-in-out infinite;
        }
        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }
      `}</style>

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1600px] h-[1000px] bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)] -z-10"></div>

      {/* LEFT ILLUSTRATION - High Visibility Verification Engine */}
      <div className="absolute left-[-120px] top-[15%] hidden lg:block opacity-60 pointer-events-none select-none z-0 animate-float">
        <svg width="450" height="450" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Decorative Rings */}
          <circle cx="250" cy="250" r="230" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="15 15" className="animate-slow-rotate origin-center" />
          <circle cx="250" cy="250" r="180" stroke="#3b82f6" strokeWidth="3" strokeOpacity="0.3" />

          {/* Central Verification Aperture */}
          <rect x="175" y="175" width="150" height="150" rx="20" stroke="#3b82f6" strokeWidth="2" fill="rgba(59,130,246,0.05)" />
          <circle cx="250" cy="250" r="40" stroke="#3b82f6" strokeWidth="4" fill="white" className="animate-pulse-soft" />

          {/* Scan Beam Visual */}
          <rect x="150" y="245" width="200" height="10" rx="5" fill="url(#scanGradient)" className="animate-scan" />

          {/* Corner Focus Brackets */}
          <path d="M80 80H120V40" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
          <path d="M420 420H380V460" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />

          <defs>
            <linearGradient id="scanGradient" x1="150" y1="250" x2="350" y2="250" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="0.5" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* RIGHT ILLUSTRATION - High Visibility Secure Network */}
      <div className="absolute right-[-140px] top-[20%] hidden lg:block opacity-60 pointer-events-none select-none z-0 animate-float" style={{ animationDelay: '2.5s' }}>
        <svg width="450" height="550" viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connection Lines */}
          <path d="M50 150Q250 150 250 300T450 300" stroke="#3b82f6" strokeWidth="2.5" />
          <path d="M50 100Q250 100 250 250T450 250" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="10 5" strokeOpacity="0.5" />
          <path d="M50 200Q250 200 250 350T450 350" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="10 5" strokeOpacity="0.5" />

          {/* Data Nodes (Visible Square Points) */}
          <rect x="235" y="285" width="30" height="30" rx="8" fill="white" stroke="#3b82f6" strokeWidth="2.5" className="animate-pulse-soft" />
          <circle cx="100" cy="125" r="8" fill="#3b82f6" />
          <circle cx="400" cy="325" r="8" fill="#3b82f6" />

          {/* Floating Data Grid */}
          <g transform="translate(300, 50)">
            {[0, 1, 2, 3].map(i => (
              <rect key={i} x={i * 25} y="0" width="12" height="12" rx="3" fill="#3b82f6" fillOpacity={0.2 + i * 0.2} />
            ))}
          </g>

          {/* Verification Shield Icon Outline */}
          <path d="M250 450C250 450 210 430 210 390V350L250 330L290 350V390C290 430 250 450 250 450Z" stroke="#3b82f6" strokeWidth="2" fill="rgba(59,130,246,0.1)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pb-20">

        {/* Refined Pill Tag */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-full px-3 py-1 mb-10 shadow-sm hover:border-brand-200 transition-colors cursor-pointer group">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span className="text-xs font-semibold text-gray-900 tracking-wide uppercase">What's New</span>
          <span className="text-xs text-gray-500 font-medium border-l border-gray-100 pl-2 group-hover:text-brand-600">Shape the future with TrueVisual ›</span>
        </div>


        {/* Refined Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 max-w-5xl mx-auto leading-[1.1]">
          Capture & Share Trustable <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-800">Visual Proofs</span> For Anything
        </h1>

        {/* Balanced Subtext */}
        <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-12 leading-relaxed">
          Is your organization using pictures and videos as proof for a task, an activity or a process? TrueVisual Platform makes capturing & sharing visual proofs <span className="text-gray-900 font-medium italic underline decoration-brand-200 decoration-2 underline-offset-4">tamper-proof</span>, reliable and authentic.
        </p>

        {/* Clean CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button onClick={onOpenDemo} className="bg-brand-950 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-900 transition-all shadow-xl shadow-brand-900/10 text-base active:scale-95">
            Request a demo
          </button>
        </div>

        {/* Minimalist Social Proof */}
        <div className="flex items-center justify-center gap-8 text-xs font-bold tracking-widest text-gray-400 uppercase">
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-all cursor-default">
            <div className="w-5 h-5 text-[#3DDC84]">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.84L14.5,13.39L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.16L16.81,8.88L14.5,10.61L6.05,2.16Z" />
              </svg>
            </div>
            <span>4.9 Play Store</span>
          </div>
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-all cursor-default">
            <div className="w-5 h-5 text-gray-900">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.43,15.65 20.08,16.66 20.09,16.69C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" />
              </svg>
            </div>
            <span>4.9 App Store</span>
          </div>
        </div>
      </div>

      {/* Integrated Company Logo Strip */}
      <div className="border-t border-gray-50 bg-gray-50/30 py-16 overflow-hidden">
        <div className="w-full">
          <p className="text-center text-sm font-semibold text-gray-600 tracking-wide mb-10 max-w-3xl mx-auto">Trusted by India's biggest brands for visual accuracy, fast approvals & brand consistency</p>

          <div className="flex space-x-16 overflow-hidden">
            {[0, 1].map((index) => (
              <div key={index} className="flex space-x-16 animate-loop-scroll shrink-0 min-w-full items-center justify-around">
                {companies.map((company, idx) => (
                  <img
                    key={`${index}-${idx}`}
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className={`${company.className} w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300`}
                  />
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;