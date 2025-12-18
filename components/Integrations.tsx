import React from 'react';

const Integrations: React.FC = () => {
  // Using colored placeholders to simulate tech logos
  const logos = [
    { color: 'bg-[#5865F2]', label: 'D' }, // Discord
    { color: 'bg-[#000000]', label: 'N' }, // Notion
    { color: 'bg-[#00796B]', label: 'S' }, // Slack-ish
    { color: 'bg-[#2196F3]', label: 'J' }, // Jira-ish
    { color: 'bg-[#FF5722]', label: 'H' }, // HubSpot
    { color: 'bg-[#FFC107]', label: 'M' }, // Miro
    { color: 'bg-[#4CAF50]', label: 'G' }, // Google
    { color: 'bg-[#673AB7]', label: 'T' }, // Teams
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-4 text-center relative">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 grid grid-cols-8 gap-4 opacity-5 pointer-events-none">
           {Array.from({ length: 64 }).map((_, i) => (
             <div key={i} className="bg-gray-400 rounded-lg h-12 w-full"></div>
           ))}
        </div>

        <div className="relative z-10 bg-white/90 backdrop-blur-sm p-12 rounded-3xl border border-gray-100 shadow-xl">
           <div className="flex justify-center gap-4 mb-8 flex-wrap">
             {logos.map((logo, i) => (
               <div key={i} className={`w-12 h-12 ${logo.color} rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-xl`}>
                 {logo.label}
               </div>
             ))}
           </div>
           
           <h2 className="text-4xl font-bold text-gray-900 mb-6">
             Seamless Integrations <br/>
             With Your Entire Tech Stack
           </h2>
           
           <button className="bg-brand-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-800 transition-colors">
             See All Integrations
           </button>
        </div>
      </div>
    </div>
  );
};

export default Integrations;