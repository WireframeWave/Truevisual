import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../src/assets/logo.png';

const CaseStudiesOverview: React.FC = () => {
    const navigate = useNavigate();

    const caseStudies = [
        {
            id: 'lifestyle',
            title: 'Leading Retail Chain',
            subtitle: 'Inventory Discovery',
            category: 'RETAIL CASE STUDY',
            categoryColor: 'bg-red-500',
            icon: '🛍️',
            metrics: [
                { value: '8,000+', label: 'Inventories Digitized' },
                { value: '100%', label: 'Visibility' },
            ],
            path: '/case-study/lifestyle'
        },
        {
            id: 'yes-bank',
            title: 'Major Banking Institution',
            subtitle: 'Branch Compliance',
            category: 'BANKING CASE STUDY',
            categoryColor: 'bg-blue-600',
            icon: '🏦',
            metrics: [
                { value: '50+', label: 'Branches Monitored' },
                { value: '100%', label: 'Remote View' },
            ],
            path: '/case-study/yes-bank'
        },
        {
            id: 'swiggy',
            title: 'Big Food Tech Company',
            subtitle: 'Auto Branding',
            category: 'FOOD TECH CASE STUDY',
            categoryColor: 'bg-orange-500',
            icon: '🍔',
            metrics: [
                { value: 'CV-Led', label: 'Unique Vehicle ID' },
                { value: '0%', label: 'Dupes' },
            ],
            path: '/case-study/swiggy'
        },
        {
            id: 'tata-play',
            title: 'DTH Service Provider',
            subtitle: 'Wall Painting',
            category: 'DTH CASE STUDY',
            categoryColor: 'bg-pink-600',
            icon: '📺',
            metrics: [
                { value: '24k+', label: 'Validations Executed' },
                { value: '-60%', label: 'Fraud' },
            ],
            path: '/case-study/tata-play'
        },
        {
            id: 'zee5',
            title: 'OTT Media Platform',
            subtitle: 'Hoarding Verify',
            category: 'MEDIA CASE STUDY',
            categoryColor: 'bg-purple-600',
            icon: '▶️',
            metrics: [
                { value: 'Time', label: 'Bound Execution' },
                { value: 'Max ROI', label: '' },
            ],
            path: '/case-study/zee5'
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            {/* Nav */}
            <div className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center text-gray-500 hover:text-brand-700 transition-colors font-medium group"
                    >
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </button>
                    <div className="ml-auto flex items-center">
                        <img src={logo} alt="TrueVisual" className="h-8 w-auto" />
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                            TRUEVISUAL ENTERPRISE SOLUTIONS
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            Enterprise
                            <br />
                            <span className="text-brand-600">Case Studies</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Transforming execution visibility across Retail, Banking, Food Tech, and Media through computer vision & AI.
                        </p>
                    </div>

                    {/* Industry Tags */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200 text-gray-700">
                            🛍️ Retail
                        </span>
                        <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200 text-gray-700">
                            🏦 Banking
                        </span>
                        <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200 text-gray-700">
                            🍔 Logistics
                        </span>
                        <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200 text-gray-700">
                            📺 DTH Services
                        </span>
                        <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200 text-gray-700">
                            ▶️ OTT Media
                        </span>
                    </div>
                </div>
            </section>

            {/* Executive Summary */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                            Executive Summary
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Cross-Industry Impact Summary
                        </h2>
                        <p className="text-gray-600 mb-2">Delivering control & visibility at scale</p>
                        <p className="text-lg font-semibold text-brand-600">5 Enterprise Leaders</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-2xl p-6 border border-brand-100">
                            <div className="text-3xl mb-3">👁️</div>
                            <h3 className="font-bold text-gray-900 mb-2">Total Visibility</h3>
                            <p className="text-sm text-gray-600">From 8000+ retail stores to remote village walls, nothing is hidden.</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                            <div className="text-3xl mb-3">🛡️</div>
                            <h3 className="font-bold text-gray-900 mb-2">Fraud Elimination</h3>
                            <p className="text-sm text-gray-600">AI detection reduced fake claims by up to 60% and stopped duplicates.</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                            <div className="text-3xl mb-3">⏱️</div>
                            <h3 className="font-bold text-gray-900 mb-2">Time Compliance</h3>
                            <p className="text-sm text-gray-600">Enforced campaign duration windows to maximize media ROI.</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                            <div className="text-3xl mb-3">✓</div>
                            <h3 className="font-bold text-gray-900 mb-2">Brand Consistency</h3>
                            <p className="text-sm text-gray-600">Standardized execution across 50+ branches and thousands of vehicles.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Success Snapshots */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                            Client Success Stories
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                            Enterprise Case Studies
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study) => (
                            <div
                                key={study.id}
                                onClick={() => navigate(study.path)}
                                className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-brand-400 hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                {/* Category Badge */}
                                <div className="mb-6">
                                    <span className={`inline-block ${study.categoryColor} text-white px-3 py-1 rounded-lg text-xs font-bold uppercase`}>
                                        {study.category}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="text-5xl mb-4">{study.icon}</div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                                <p className="text-gray-600 mb-6">{study.subtitle}</p>

                                {/* Metrics */}
                                <div className="space-y-3 mb-6">
                                    {study.metrics.map((metric, idx) => (
                                        <div key={idx} className="flex items-baseline gap-2">
                                            <span className="text-2xl font-bold text-brand-600">{metric.value}</span>
                                            <span className="text-sm text-gray-600">{metric.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Arrow */}
                                <div className="absolute bottom-8 right-8 text-brand-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                                    <ArrowRight size={24} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className="bg-white border-t border-gray-100 py-12 text-center">
                <p className="text-gray-500 mb-6">Ready to transform your field operations?</p>
                <div className="flex justify-center gap-4 text-sm font-medium text-gray-400">
                    <span>© 2025 TrueVisual Inc.</span>
                </div>
            </div>
        </div>
    );
};

export default CaseStudiesOverview;
