import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../src/assets/logo.png';

const SwiggyCaseStudy: React.FC = () => {
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
            <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase">
                            FOOD TECH CASE STUDY
                        </span>
                    </div>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            Big Food Tech Company × Truevisual
                        </h1>
                        <p className="text-xl text-gray-600">
                            Auto Branding & Claim Validation
                        </p>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
                            <div className="text-3xl font-bold text-orange-600 mb-2">0%</div>
                            <div className="text-sm text-gray-600 font-medium">Duplicates</div>
                            <p className="text-xs text-gray-500 mt-2">Eliminated double-counting of same autos</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
                            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                            <div className="text-sm text-gray-600 font-medium">Accuracy</div>
                            <p className="text-xs text-gray-500 mt-2">Vehicle-level verification vs image-level</p>
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
                        Vendor-led execution of auto-rickshaw branding led to inflated claims and payout risks due to lack of unique identification.
                    </p>

                    <div className="space-y-4">
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                            <h3 className="font-bold text-red-900 mb-2">Duplicate Photos</h3>
                            <p className="text-gray-700">Same auto photographed multiple times to inflate count.</p>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                            <h3 className="font-bold text-red-900 mb-2">Angle Manipulation</h3>
                            <p className="text-gray-700">Minor angle changes used to fake separate installations.</p>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                            <h3 className="font-bold text-red-900 mb-2">No Unique ID</h3>
                            <p className="text-gray-700">Impossible to track unique vehicles across large fleets manually.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Truevisual Solution */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <span>📸</span> Truevisual Solution
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        Shifted from image-based verification to vehicle-level identification using advanced Computer Vision.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 border border-blue-100 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                1
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-blue-900 mb-2">Image Capture</h3>
                                <p className="text-gray-700">Vendors upload auto back-branding photos via app.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-blue-100 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                2
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-blue-900 mb-2">CV Analysis</h3>
                                <p className="text-gray-700">Auto-detection of number plates from images.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-blue-100 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                3
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-blue-900 mb-2">De-Duplication</h3>
                                <p className="text-gray-700">Matching plates against existing database.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-blue-100 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                ✓
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-blue-900 mb-2">Unique Validation</h3>
                                <p className="text-gray-700">Each auto counted only once globally.</p>
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
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
                            <div className="text-4xl font-bold text-orange-600 mb-2">0%</div>
                            <div className="text-lg font-semibold text-gray-900 mb-2">↓ Duplicates</div>
                            <p className="text-gray-700">Eliminated double-counting of same autos</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
                            <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                            <div className="text-lg font-semibold text-gray-900 mb-2">Accuracy</div>
                            <p className="text-gray-700">Vehicle-level verification vs image-level</p>
                        </div>
                    </div>

                    <h3 className="font-bold text-lg mb-4">Key Outcomes:</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1">✓</span>
                            <span>Ensured fair & controlled vendor payouts.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1">✓</span>
                            <span>Accurate city-level coverage data for marketing.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1">✓</span>
                            <span>Automated flagging saved manual audit hours.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Footer Strip */}
            <div className="bg-white border-t border-gray-100 py-12 text-center">
                <p className="text-gray-500 mb-6">Ready to eliminate fraud in your branding campaigns?</p>
                <div className="flex justify-center gap-4 text-sm font-medium text-gray-400">
                    <span>© 2025 TrueVisual Inc.</span>
                </div>
            </div>
        </div>
    );
};

export default SwiggyCaseStudy;
