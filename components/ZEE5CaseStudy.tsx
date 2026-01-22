import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../src/assets/logo.png';

const ZEE5CaseStudy: React.FC = () => {
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
            <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <span className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase">
                            MEDIA CASE STUDY
                        </span>
                    </div>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            OTT Media Platform × Truevisual
                        </h1>
                        <p className="text-xl text-gray-600">
                            Time-Bound Hoarding Verification
                        </p>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100">
                            <div className="text-3xl font-bold text-purple-600 mb-2">ROI ↑</div>
                            <div className="text-sm text-gray-600 font-medium">Improved</div>
                            <p className="text-xs text-gray-500 mt-2">Maximized value from media spend</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100">
                            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                            <div className="text-sm text-gray-600 font-medium">Adherence</div>
                            <p className="text-xs text-gray-500 mt-2">Campaigns live for intended duration</p>
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
                        For time-sensitive media campaigns, every hour of delay in hoarding installation equals lost ROI. Late reporting made it impossible to correct.
                    </p>

                    <div className="space-y-4">
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                            <h3 className="font-bold text-red-900 mb-2">Unknown Install Times</h3>
                            <p className="text-gray-700">No visibility into when hoardings actually went live vs planned start date.</p>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                            <h3 className="font-bold text-red-900 mb-2">Missed Campaign Windows</h3>
                            <p className="text-gray-700">Images uploaded days late meant the effectiveness window was already missed.</p>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                            <h3 className="font-bold text-red-900 mb-2">Reduced ROI</h3>
                            <p className="text-gray-700">Paying for 30 days but getting only 23 days of visibility due to delays.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Truevisual Solution */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-purple-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <span>⏱️</span> Truevisual Solution
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        Enforced strict time-bound execution with tamper-proof time-stamped verification.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 border border-purple-100 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                                1
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-lg font-bold text-purple-900">Window Definition</h3>
                                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Day 0</span>
                                </div>
                                <p className="text-gray-700">Campaign start/end dates locked in system.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-purple-100 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                                2
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-lg font-bold text-purple-900">Time-Stamped Capture</h3>
                                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">📸 Live</span>
                                </div>
                                <p className="text-gray-700">Photos only accepted with server time sync.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-purple-100 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                                3
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-lg font-bold text-purple-900">Deviation Alerts</h3>
                                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">! Alert</span>
                                </div>
                                <p className="text-gray-700">Instant flags if upload is outside window.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-purple-100 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                                ✓
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-lg font-bold text-purple-900">Verified Duration</h3>
                                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Day 30</span>
                                </div>
                                <p className="text-gray-700">Full campaign duration validated.</p>
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
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                            <div className="text-4xl font-bold text-purple-600 mb-2">ROI ↑</div>
                            <div className="text-lg font-semibold text-gray-900 mb-2">Improved</div>
                            <p className="text-gray-700">Maximized value from media spend</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                            <div className="text-lg font-semibold text-gray-900 mb-2">Adherence</div>
                            <p className="text-gray-700">Campaigns live for intended duration</p>
                        </div>
                    </div>

                    <h3 className="font-bold text-lg mb-4">Key Outcomes:</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1">✓</span>
                            <span>Late installations flagged instantly for vendor correction.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1">✓</span>
                            <span>Geo-tag + Time-stamp eliminated fake "early" reports.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1">✓</span>
                            <span>Multi-city rollout managed with central visibility.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Footer Strip */}
            <div className="bg-white border-t border-gray-100 py-12 text-center">
                <p className="text-gray-500 mb-6">Ready to maximize your media ROI?</p>
                <div className="flex justify-center gap-4 text-sm font-medium text-gray-400">
                    <span>© 2025 TrueVisual Inc.</span>
                </div>
            </div>
        </div>
    );
};

export default ZEE5CaseStudy;
