import React from 'react';

const IndustryIllustration: React.FC<{ type: string }> = ({ type }) => {
  const commonClasses = "absolute inset-0 w-full h-full flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-700";

  switch (type) {
    case 'OOH':
      return (
        <div className={commonClasses}>
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="w-2/3 h-2/3">
            <rect x="40" y="40" width="120" height="80" rx="4" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
            <path d="M70 120V160M130 120V160" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="80" r="20" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
            <path d="M100 20V40M160 80H180M20 80H40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
          </svg>
        </div>
      );
    case 'RETAIL':
      return (
        <div className={commonClasses}>
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="w-2/3 h-2/3">
            <path d="M40 60H160M40 100H160M40 140H160" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
            <rect x="50" y="70" width="20" height="20" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" />
            <rect x="90" y="70" width="20" height="20" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" />
            <rect x="130" y="70" width="20" height="20" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" />
            <path d="M60 40L140 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
          </svg>
        </div>
      );
    case 'CONSTRUCTION':
      return (
        <div className={commonClasses}>
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="w-2/3 h-2/3">
            <path d="M40 160L100 40L160 160" stroke="currentColor" strokeWidth="2" />
            <path d="M60 120H140" stroke="currentColor" strokeWidth="2" />
            <path d="M20 160H180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <rect x="90" y="30" width="20" height="20" rx="2" stroke="currentColor" className="animate-bounce" style={{ animationDuration: '3s' }} />
          </svg>
        </div>
      );
    case 'RURAL':
      return (
        <div className={commonClasses}>
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="w-2/3 h-2/3">
            <path d="M20 140Q60 100 100 140T180 140" stroke="currentColor" strokeWidth="2" />
            <path d="M20 160Q60 120 100 160T180 160" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="100" cy="80" r="10" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
            <path d="M100 90V120" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      );
    case 'INSURANCE':
      return (
        <div className={commonClasses}>
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="w-2/3 h-2/3">
            <path d="M100 40C100 40 60 50 60 90V130C60 160 100 180 100 180C100 180 140 160 140 130V90C140 50 100 40 100 40Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
            <path d="M85 110L95 120L115 100" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeJoin="round" className="animate-pulse" />
          </svg>
        </div>
      );
    default:
      return null;
  }
};

const Industries: React.FC = () => {
  const industries = [
    { title: "OOH ADVERTISING", id: "OOH", desc: "Verify billboard installations and campaign compliance in real-time with GPS-locked photos." },
    { title: "RETAIL & POP", id: "RETAIL", desc: "Audit shelf displays, planogram execution, and in-store branding across thousands of outlets." },
    { title: "CONSTRUCTION", id: "CONSTRUCTION", desc: "Track site progress with geo-tagged and time-stamped visual records for project milestones." },
    { title: "RURAL MARKETING", id: "RURAL", desc: "Bridge the trust gap in remote operations with authentic field proofs from village campaigns." },
    { title: "INSURANCE", id: "INSURANCE", desc: "Accelerate claims processing with tamper-proof damage assessment and automated inspections." },
  ];

  return (
    <div id="industries" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-xs">Sector Expertise</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
            Industries We Serve
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Every industry has unique compliance needs. Our platform is built to handle the specific verification challenges of your sector.
          </p>
        </div>

        {/* Expandable Gallery (Illustration Accordion) */}
        <div className="flex flex-col lg:flex-row gap-6 h-[600px] lg:h-[650px] w-full">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="relative flex-1 rounded-[3rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[4] group bg-gray-50 border border-gray-100 hover:bg-brand-50 hover:border-brand-100"
            >
              {/* Illustration Background */}
              <div className="text-brand-500">
                <IndustryIllustration type={industry.id} />
              </div>

              {/* Collapsed State Title (Vertical) */}
              <div className="absolute inset-0 flex items-center justify-center lg:group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                <h3 className="lg:[writing-mode:vertical-lr] text-brand-900 font-black tracking-[0.4em] text-sm md:text-base uppercase whitespace-nowrap lg:rotate-180 transform transition-transform duration-700">
                  {industry.title}
                </h3>
              </div>

              {/* Expanded State Content */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="text-brand-900 text-3xl font-black uppercase tracking-tight mb-4">
                    {industry.title}
                  </h3>

                  <div className="overflow-hidden">
                    <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
                      {industry.desc}
                    </p>

                  </div>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-brand-200 rounded-tr-2xl group-hover:border-brand-500 transition-colors duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Industries;