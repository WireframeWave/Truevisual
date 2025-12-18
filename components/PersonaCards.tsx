import React from 'react';

const PersonaCards: React.FC = () => {
  const personas = [
    { title: 'Executives', image: 'https://picsum.photos/seed/exec/300/500', active: false },
    { 
      title: 'HR Leaders', 
      image: 'https://picsum.photos/seed/hrlead/300/500', 
      active: true,
      quote: "I love that HireSphere makes it so our people leaders don't have to hunt for information about their teams. Whether they are having one-on-ones, giving feedback, or engaging in a review cycle.",
      author: 'Shveta Malhan',
      role: 'VP People Insights & Innovation, Dropbox'
    },
    { title: 'Managers', image: 'https://picsum.photos/seed/manager/300/500', active: false },
    { title: 'Employees', image: 'https://picsum.photos/seed/employee/300/500', active: false },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-medium text-sm">Success Experience</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Built To Power Your Entire<br />Workplace</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[500px]">
          {personas.map((persona, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out group ${persona.active ? 'lg:flex-[2.5]' : 'lg:flex-1 h-64 lg:h-auto'}`}
            >
              <img 
                src={persona.image} 
                alt={persona.title} 
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.8] group-hover:brightness-100 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                {persona.active && (
                  <div className="mb-6 opacity-0 lg:opacity-100 animate-fadeIn text-white">
                    <p className="text-sm md:text-base leading-relaxed mb-4 font-light">"{persona.quote}"</p>
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">SM</span>
                       </div>
                       <div>
                         <p className="font-bold text-sm">{persona.author}</p>
                         <p className="text-[10px] text-gray-300">{persona.role}</p>
                       </div>
                    </div>
                  </div>
                )}
                <h3 className="text-white text-xl font-bold">{persona.title}</h3>
                {persona.active && <p className="text-gray-300 text-xs mt-2 max-w-sm">Build and run talent management programs that scale your impact.</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonaCards;