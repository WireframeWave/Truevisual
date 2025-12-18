import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell, XAxis } from 'recharts';
import { Target, TrendingUp, Users, ArrowUpRight } from 'lucide-react';

const data = [
  { name: 'Eng', val: 65 },
  { name: 'Mkt', val: 78 },
  { name: 'Fin', val: 45 },
  { name: 'Sales', val: 90 },
  { name: 'CS', val: 100 },
];

const FeatureBento: React.FC = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-medium text-sm">Improve Manager Productivity</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Empowered Managers,<br />Higher Performing Teams</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Make manager your highest point of leverage with productive meetings, clear expectations, and accountability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-rows-2 h-auto lg:h-[800px]">
          
          {/* Card 1: Goals (Tall) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col row-span-2 relative overflow-hidden group">
            <h3 className="text-xl font-bold text-gray-900 mb-2">OKRs & Goals</h3>
            <p className="text-gray-500 text-sm mb-8">Focus individuals and teams on your company's top priorities.</p>
            
            {/* Mockup UI */}
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex-1 flex flex-col gap-3">
               <div className="text-sm font-semibold mb-2">Goals</div>
               {[
                 { title: 'Increase International Revenue', progress: 'bg-blue-400' },
                 { title: 'Increase Sales in Q4 by 12%', progress: 'bg-purple-400' },
                 { title: 'Complete EMEA Sales Training', progress: 'bg-green-400' },
                 { title: 'Complete Pricing Strategy', progress: 'bg-orange-400' },
               ].map((goal, idx) => (
                 <div key={idx} className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Target size={16} className="text-gray-400" />
                      <span className="text-xs font-medium text-gray-700">{goal.title}</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                 </div>
               ))}
            </div>
          </div>

          {/* Card 2: Analytics (Wide on mobile, regular on desktop) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics</h3>
                    <p className="text-gray-500 text-sm max-w-sm">Seamlessly connect performance review cycle results into compensation decisions.</p>
                </div>
                <div className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded border border-green-100">Live Data</div>
            </div>
            
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={12} stroke="#9ca3af" />
                  <Bar dataKey="val" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 4 ? '#8b5cf6' : index % 2 === 0 ? '#2dd4bf' : '#60a5fa'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Card 3: Grow */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Grow</h3>
            <p className="text-gray-500 text-sm mb-6">Increase growth and engagement with development tools.</p>
            
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
               <div className="flex items-center gap-3 mb-3">
                  <img src="https://picsum.photos/seed/bethany/40/40" className="w-10 h-10 rounded-full" alt="Profile" />
                  <div>
                    <div className="text-sm font-bold">Bethany Hale</div>
                    <div className="text-xs text-gray-500">People Operations</div>
                  </div>
               </div>
               <div className="space-y-2">
                 <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                 <div className="h-2 bg-gray-200 rounded w-1/2"></div>
               </div>
            </div>
          </div>

          {/* Card 4: Turnover (Dark) */}
          <div className="bg-brand-900 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow text-white relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Reduced<br/>Turnover 27%</h3>
                <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm">
                    <ArrowUpRight className="text-white" size={20} />
                </div>
             </div>
             {/* Decorative abstract shapes */}
             <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/10 rounded-tl-full"></div>
             <div className="absolute right-8 bottom-8 w-16 h-16 bg-brand-500/30 rounded-full"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureBento;