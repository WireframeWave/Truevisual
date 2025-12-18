import React from 'react';
import { Users, Eye, LayoutGrid, Send, Puzzle, Download } from 'lucide-react';

const CoreFeatures: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "Simple User Management",
      subtitle: "Organise them into groups",
      desc: "Super easy to on-board app users using self signup. For web-app its simple to add user and manage access levels."
    },
    {
      icon: Eye,
      title: "Real-time Viewing",
      subtitle: "Proofs in view of your choice",
      desc: "See proofs as they get uploaded in grid, map, gallery or timeline view."
    },
    {
      icon: LayoutGrid,
      title: "Organise Proofs",
      subtitle: "Using Boards & Tags",
      desc: "Use boards to group visual proofs and tags to organize & label your proofs as per your requirement."
    },
    {
      icon: Send,
      title: "Send Requests",
      subtitle: "To users to capture Visual Proofs",
      desc: "Send a request to a specific app user to capture visual proofs using web application and track the status."
    },
    {
      icon: Puzzle,
      title: "Integrations",
      subtitle: "Integrate with tools you use",
      desc: "Our custom API allows you to connect the proof data to tools and solution you already use."
    },
    {
      icon: Download,
      title: "Export Data",
      subtitle: "Export your data easily",
      desc: "Export your entire data easily for backup and other purpose."
    }
  ];

  return (
    <div id="features" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Platform Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Everything you need to manage<br className="hidden md:block" /> visual evidence
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A complete suite of tools designed to streamline your visual verification workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              {/* Updated: Clearly defined blue stroke (border-brand-200) on icon box */}
              <div className="w-14 h-14 bg-brand-50 border-2 border-brand-200 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:border-brand-600 transition-colors duration-300">
                <feature.icon size={28} className="text-brand-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 leading-tight mb-1">
                {feature.title}
              </h3>
              <p className="text-brand-600 font-medium text-sm mb-4">
                {feature.subtitle}
              </p>

              <p className="text-gray-500 leading-relaxed text-sm mt-auto">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;