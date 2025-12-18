import React from 'react';
import { MapPin, Clock, User, Target, Zap, Lock, ScanLine, Database } from 'lucide-react';

const VisualTruth: React.FC = () => {
  const features = [
    // --- Top Row (Markers) ---
    {
      icon: MapPin,
      label: "Where",
      title: "Location Marker",
      desc: "Precise GPS triangulation locks the exact position.",
      rotation: "rotate-[-45deg]", // ~4-5 o'clock
    },
    {
      icon: Clock,
      label: "When",
      title: "Time Marker",
      desc: "Server-synced timestamps prevent clock manipulation.",
      rotation: "rotate-[135deg]", // ~10-11 o'clock
    },
    {
      icon: User,
      label: "Who",
      title: "Person Marker",
      desc: "Biometric and account verification of the creator.",
      rotation: "rotate-[45deg]", // ~7-8 o'clock
    },
    {
      icon: Target,
      label: "What",
      title: "Asset Marker",
      desc: "Context-aware algorithms verify the subject matter.",
      rotation: "rotate-[-135deg]", // ~1-2 o'clock
    },
    // --- Bottom Row (Security) ---
    {
      icon: Zap,
      label: "Real-Time",
      title: "Synced Uploads",
      desc: "Uploads within configured time before expiry.",
      rotation: "rotate-[90deg]", // ~9 o'clock
    },
    {
      icon: Lock,
      label: "Security",
      title: "Tamper Proof",
      desc: "Encryption protection with fingerprinting.",
      rotation: "rotate-[-90deg]", // ~3 o'clock
    },
    {
      icon: ScanLine,
      label: "Verify",
      title: "Authenticity",
      desc: "Algorithms to detect pixel manipulation.",
      rotation: "rotate-[180deg]", // ~12 o'clock
    },
    {
      icon: Database,
      label: "Storage",
      title: "Immutable Data",
      desc: "Stored on blockchain-based database.",
      rotation: "rotate-[0deg]", // ~6 o'clock
    }
  ];

  return (
    <div id="visual-truth" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Total Verifiability
          </h2>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            8 layers of security woven into every visual proof.
          </p>
        </div>

        {/* 4x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {features.map((marker, idx) => (
            <FeatureItem key={idx} marker={marker} />
          ))}
        </div>

      </div>
    </div>
  );
};

const FeatureItem: React.FC<{ marker: any }> = ({ marker }) => (
  <div className="flex flex-col items-center text-center group">
    {/* Icon */}
    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 group-hover:-translate-y-2 transition-transform duration-300">
      <div className="absolute inset-0 rounded-full border-4 border-gray-50"></div>
      {/* Rotating Arc: Uses marker.rotation for unique static position, spins to uniform position on hover */}
      <div className={`absolute inset-0 rounded-full border-4 border-brand-500 border-l-transparent border-t-transparent border-r-transparent ${marker.rotation} group-hover:rotate-[360deg] transition-all duration-1000 ease-out`}></div>
      <marker.icon size={28} className="text-brand-600" strokeWidth={2} />
    </div>

    {/* Text */}
    <h3 className="text-xl font-bold text-gray-900 mb-2">{marker.title}</h3>
    <div className="text-brand-600 text-[10px] font-bold uppercase tracking-widest mb-3">{marker.label}</div>
    <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
      {marker.desc}
    </p>
  </div>
);

export default VisualTruth;