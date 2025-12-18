import React from 'react';
import frame1 from '../src/assets/frame_1.png';
import frame2 from '../src/assets/frame_2.png';
import frame3 from '../src/assets/frame_3.png';
import frame4 from '../src/assets/frame_4.png';
import frame5 from '../src/assets/frame_5.png';
import frame6 from '../src/assets/frame_6.png';
import frame7 from '../src/assets/frame_7.png';

const frames = [
  { src: frame1, label: '01. Identity' },
  { src: frame2, label: '02. Manage' },
  { src: frame4, label: '04. Analyze' },
  { src: frame5, label: '05. Report' },
  { src: frame6, label: '06. Archive' },
  { src: frame7, label: '07. Share' },
];

interface OperationArcProps {
  onOpenDemo: () => void;
}

const OperationArc: React.FC<OperationArcProps> = ({ onOpenDemo }) => {
  return (
    <div id="workflow" className="bg-white py-24 overflow-hidden border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-20">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-xs">Mobile First Workflow</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
            A Modern App for a <br className="hidden md:block" /> Transparent Workflow
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Empower your field teams with a seamless tool designed for high-integrity visual verification, from the first click to the final approval.
          </p>
        </div>

        {/* Mobile Showcase Grid */}
        <div className="relative w-full overflow-hidden">
          {/* Background Decorative Element */}
          <div className="absolute -inset-x-4 top-10 bottom-0 bg-brand-50/40 rounded-[3rem] -z-10"></div>

          {/* Carousel Container */}
          <div className="flex space-x-12 overflow-hidden py-10 group">
            {[0, 1].map((setIndex) => (
              <div key={setIndex} className="flex space-x-12 animate-loop-scroll shrink-0 min-w-full">
                {[...frames, ...frames].map((item, i) => (
                  <div key={`${setIndex}-${i}`} className="w-[280px] shrink-0 transform transition-all duration-500 hover:scale-105 group-hover:blur-[1px] hover:!blur-none">
                    <div className="mb-4 text-center">
                      <span className="bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                    </div>
                    <img
                      src={item.src}
                      alt={`${item.label} Workflow`}
                      className="mx-auto w-[280px] shadow-2xl rounded-[2.5rem] object-cover bg-white"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <button
            onClick={onOpenDemo}
            className="bg-brand-950 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-900 transition-all shadow-xl shadow-brand-900/10 active:scale-95"
          >
            Request a demo for Mobile
          </button>
        </div>

      </div>
    </div>
  );
};

export default OperationArc;