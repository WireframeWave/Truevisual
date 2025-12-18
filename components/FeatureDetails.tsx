import React, { useState } from 'react';
import { Layout, Clock, BarChart2, TrendingUp, Shield, ChevronRight } from 'lucide-react';

const FeatureDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Performance');

  const tabs = [
    { id: 'Performance', icon: Layout, label: 'Performance', desc: 'Run performance reviews to align employees on where they meet, exceed, or fall short.' },
    { id: 'Time Tracking', icon: Clock, label: 'Time Tracking', desc: 'Effortless time tracking for modern teams.' },
    { id: 'Analytics', icon: BarChart2, label: 'Analytics', desc: 'Deep insights into your workforce metrics.' },
    { id: 'Grow', icon: TrendingUp, label: 'Grow', desc: 'Career pathing and development plans.' },
    { id: 'Security', icon: Shield, label: 'Security', desc: 'Enterprise-grade security and compliance.' },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-brand-600 font-medium text-sm">Better Together</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Every Tool You Need To<br />Power Strategic HR</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gray-50 rounded-3xl p-8 border border-gray-100">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left p-4 rounded-xl transition-all duration-200 flex flex-col gap-1 group ${
                  activeTab === tab.id 
                    ? 'bg-white shadow-md border border-gray-100' 
                    : 'hover:bg-gray-100/50'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <tab.icon size={18} className={activeTab === tab.id ? 'text-brand-600' : 'text-gray-400'} />
                    <span className={`font-semibold ${activeTab === tab.id ? 'text-gray-900' : 'text-gray-600'}`}>
                      {tab.label}
                    </span>
                  </div>
                  {activeTab === tab.id && <ChevronRight size={16} className="text-gray-400" />}
                </div>
                {activeTab === tab.id && (
                  <p className="text-xs text-gray-500 pl-8 mt-1 leading-relaxed">
                    {tab.desc}
                  </p>
                )}
              </button>
            ))}
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col min-h-[400px]">
            <div className="mb-6">
               <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Communication and Collaboration</span>
               <h3 className="text-xl font-bold text-gray-900 mt-2">This person drives initiatives that enhance the productivity of our team.</h3>
            </div>

            {/* Mockup UI for Review */}
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                 <div className="flex items-center gap-3 mb-3">
                    <img src="https://picsum.photos/seed/sabrina/40/40" className="w-10 h-10 rounded-full" alt="User" />
                    <div className="flex-1">
                       <div className="flex items-center gap-2">
                          <span className="font-bold text-sm">Sabrina Carpenter</span>
                          <span className="bg-brand-900 text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold">Self</span>
                       </div>
                    </div>
                 </div>
                 {/* Rating Scale */}
                 <div className="grid grid-cols-5 gap-1">
                    {[1, 2, 3, 4, 5].map(n => (
                      <div key={n} className={`h-8 rounded flex items-center justify-center text-xs font-bold ${n === 3 ? 'bg-brand-200 text-brand-900 ring-2 ring-brand-500' : 'bg-gray-200 text-gray-500'}`}>
                        {n}
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 opacity-60">
                 <div className="flex items-center gap-3 mb-3">
                    <img src="https://picsum.photos/seed/jesse/40/40" className="w-10 h-10 rounded-full" alt="User" />
                    <div className="flex-1">
                       <div className="flex items-center gap-2">
                          <span className="font-bold text-sm">Jesse Barbera</span>
                          <span className="bg-gray-800 text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold">Manager</span>
                       </div>
                    </div>
                 </div>
                 <div className="grid grid-cols-5 gap-1">
                    {[1, 2, 3, 4, 5].map(n => (
                      <div key={n} className={`h-8 rounded flex items-center justify-center text-xs font-bold ${n === 4 ? 'bg-blue-200 text-blue-900' : 'bg-gray-200 text-gray-500'}`}>
                        {n}
                      </div>
                    ))}
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;