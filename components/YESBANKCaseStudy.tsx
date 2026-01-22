import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../src/assets/logo.png';

const YESBANKCaseStudy: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            {/* Nav */}
            <div className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
                    <button
                        onClick={() => navigate('/case-studies')}
                        className="flex items-center text-gray-500 hover:text-brand-700 transition-colors font-medium group"
                    >
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Case Studies
                    </button>
                    <div className="ml-auto flex items-center">
                        <img src={logo} alt="TrueVisual" className="h-8 w-auto" />
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase">
                            BANKING CASE STUDY
                        </span>
                    </div>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            Major Banking Institution × Truevisual
                        </h1>
                        <p className="text-xl text-gray-600">
                            Branch-Level Brand Consistency & Compliance
                        </p>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                            <div className="text-sm text-gray-600 font-medium">↑ Branches</div>
                            <p className="text-xs text-gray-500 mt-2">Continuously monitored for compliance</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                            <div className="text-sm text-gray-600 font-medium">Remote View</div>
                            <p className="text-xs text-gray-500 mt-2">Central visibility without physical audits</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Challenge */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-900 text-white px-6 py-3 rounded-lg inline-block mb-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <span>⚠️</span> The Challenge
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        With a decentralized branch network, maintaining uniform brand standards and managing temporary campaigns was struggling with manual processes.
                    </p>

                    <div className="space-y-4">
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                            <h3 className="font-bold text-red-900 mb-2">Inconsistent Branding</h3>
                            <p className="text-gray-700">Variations in display standards across different branches went unnoticed.</p>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                            <h3 className="font-bold text-red-900 mb-2">Asset Lingerie</h3>
                            <p className="text-gray-700">Temporary assets (e.g., festive offers) were not removed post-expiry.</p>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                            <h3 className="font-bold text-red-900 mb-2">Blind Spots</h3>
                            <p className="text-gray-700">Damaged creatives and maintenance issues were missed due to infrequent audits.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Truevisual Solution */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <span>👁️</span> Truevisual Solution
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        Transformed branch branding into a continuously monitored, compliance-driven system without physical visits.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 border border-blue-100 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                1
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-blue-900 mb-2">Branch Capture</h3>
                                <p className="text-gray-700">Staff capture structured images of all branding zones.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-blue-100 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                2
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-blue-900 mb-2">Consistency Check</h3>
                                <p className="text-gray-700">Automated verification against brand guidelines.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-blue-100 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                3
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-blue-900 mb-2">Duration Tracking</h3>
                                <p className="text-gray-700">System alerts for removal of expired temporary assets.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-blue-100 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                ✓
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-blue-900 mb-2">Central Monitoring</h3>
                                <p className="text-gray-700">Real-time dashboard for damage & compliance status.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Impact */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-green-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <span>📊</span> Business Impact
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                            <div className="text-lg font-semibold text-gray-900 mb-2">↑ Branches</div>
                            <p className="text-gray-700">Continuously monitored for compliance</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                            <div className="text-lg font-semibold text-gray-900 mb-2">Remote View</div>
                            <p className="text-gray-700">Central visibility without physical audits</p>
                        </div>
                    </div>

                    <h3 className="font-bold text-lg mb-4">Key Outcomes:</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1">✓</span>
                            <span>Uniform brand experience established across all locations.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1">✓</span>
                            <span>Eliminated outdated/expired creatives from display.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1">✓</span>
                            <span>Early detection of damage reduced replacement turnaround time.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Footer Strip */}
            <div className="bg-white border-t border-gray-100 py-12 text-center">
                <p className="text-gray-500 mb-6">Ready to ensure brand consistency across all branches?</p>
                <div className="flex justify-center gap-4 text-sm font-medium text-gray-400">
                    <span>© 2025 TrueVisual Inc.</span>
                </div>
            </div>
        </div>
    );
};

export default YESBANKCaseStudy;
