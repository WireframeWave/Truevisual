import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../src/assets/logo.png';

const LifestyleCaseStudy: React.FC = () => {
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
            <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <span className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase">
                            RETAIL CASE STUDY
                        </span>
                    </div>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            Lifestyle × Truevisual
                        </h1>
                        <p className="text-xl text-gray-600">
                            Inventory Discovery & Campaign Auditing
                        </p>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-100">
                            <div className="text-3xl font-bold text-red-600 mb-2">8,000+</div>
                            <div className="text-sm text-gray-600 font-medium">↑ Digitized</div>
                            <p className="text-xs text-gray-500 mt-2">Retail inventories mapped & live</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-100">
                            <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                            <div className="text-sm text-gray-600 font-medium">Visibility</div>
                            <p className="text-xs text-gray-500 mt-2">Real-time view across multiple malls</p>
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
                        Lifestyle operates large-format stores across multiple malls with premium ad inventories (facades, pillars, trial rooms). Management was chaotic and manual.
                    </p>

                    <div className="space-y-4">
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                            <h3 className="font-bold text-red-900 mb-2">Static Visibility</h3>
                            <p className="text-gray-700">Inventory lists were PPT-driven and oversized, making discovery slow.</p>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                            <h3 className="font-bold text-red-900 mb-2">Allocation Bottlenecks</h3>
                            <p className="text-gray-700">High-demand spots remained "blocked" informally, delaying sales.</p>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                            <h3 className="font-bold text-red-900 mb-2">Revenue Leakage</h3>
                            <p className="text-gray-700">Expired campaigns weren't removed on time, blocking new sales.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Truevisual Solution */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <span>🏪</span> Truevisual Solution
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        End-to-end digitization of mall inventory with real-time allocation and auditing logic.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 border border-blue-100 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                1
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-blue-900 mb-2">Digitized Onboarding</h3>
                                <p className="text-gray-700">Mapped mall-wise inventories digitally.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-blue-100 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                2
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-blue-900 mb-2">Live Discovery</h3>
                                <p className="text-gray-700">Real-time visibility for sales teams.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-blue-100 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                3
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-blue-900 mb-2">Smart Allocation</h3>
                                <p className="text-gray-700">First-come-first-serve blocking system.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-blue-100 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                ✓
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-blue-900 mb-2">Audit & Closure</h3>
                                <p className="text-gray-700">Mandatory proof of removal/installation.</p>
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
                        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100">
                            <div className="text-4xl font-bold text-red-600 mb-2">8,000+</div>
                            <div className="text-lg font-semibold text-gray-900 mb-2">↑ Digitized</div>
                            <p className="text-gray-700">Retail inventories mapped & live</p>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100">
                            <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
                            <div className="text-lg font-semibold text-gray-900 mb-2">Visibility</div>
                            <p className="text-gray-700">Real-time view across multiple malls</p>
                        </div>
                    </div>

                    <h3 className="font-bold text-lg mb-4">Key Outcomes:</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1">✓</span>
                            <span>Significantly reduced revenue leakage from blocking & expiry.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1">✓</span>
                            <span>Replaced slow PPT processes with instant digital allocation.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1">✓</span>
                            <span>Successful multi-mall rollout.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Footer Strip */}
            <div className="bg-white border-t border-gray-100 py-12 text-center">
                <p className="text-gray-500 mb-6">Ready to digitize your retail inventory?</p>
                <div className="flex justify-center gap-4 text-sm font-medium text-gray-400">
                    <span>© 2025 TrueVisual Inc.</span>
                </div>
            </div>
        </div>
    );
};

export default LifestyleCaseStudy;
