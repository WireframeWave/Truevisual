import React from 'react';

const StatsGrid: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Left Text */}
          <div className="flex flex-col justify-center">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Why Choose TrueVisual</h4>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              Empower your field teams with <span className="text-brand-600">AI-driven</span> visual intelligence to verify operations, <span className="text-brand-600">reduce</span> fraud, and build trust.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Our platform ensures that every image and video captured is authentic, time-stamped, and geo-tagged, providing you with indisputable proof for any business process.
            </p>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-4">

            {/* Card 1: Brand Color */}
            <div className="bg-brand-400 p-6 rounded-3xl shadow-lg flex flex-col justify-between aspect-square hover:-translate-y-1 transition-transform duration-300">
              <div></div>
              <div>
                <div className="text-5xl font-bold text-brand-950 mb-1">1M+</div>
                <div className="text-brand-900 font-medium">Visual Proofs Verified</div>
              </div>
            </div>

            {/* Card 2: Light Gray */}
            <div className="bg-gray-100 p-6 rounded-3xl flex flex-col justify-between aspect-square hover:-translate-y-1 transition-transform duration-300">
              <div></div>
              <div>
                <div className="text-5xl font-bold text-gray-400 mb-1">75<span className="text-3xl">+</span></div>
                <div className="text-gray-500 font-medium">Enterprise Clients</div>
              </div>
            </div>

            {/* Card 3: Light Green/Brand */}
            <div className="bg-brand-100 p-6 rounded-3xl flex flex-col justify-between aspect-square hover:-translate-y-1 transition-transform duration-300">
              <div></div>
              <div>
                <div className="text-5xl font-bold text-brand-800 mb-1">99<span className="text-3xl">%</span></div>
                <div className="text-brand-700 font-medium">Fraud Detection Rate</div>
              </div>
            </div>

            {/* Card 4: Light Gray */}
            <div className="bg-gray-100 p-6 rounded-3xl flex flex-col justify-between aspect-square hover:-translate-y-1 transition-transform duration-300">
              <div></div>
              <div>
                <div className="text-5xl font-bold text-gray-400 mb-1">2x</div>
                <div className="text-gray-500 font-medium">Faster Field Reporting</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;