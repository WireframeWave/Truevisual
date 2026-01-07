import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../src/assets/logo.png';

const CaseStudyPage: React.FC = () => {
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
            <section className="py-16 bg-gradient-to-br from-brand-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            Tata Play × Truevisual
                        </h1>
                        <p className="text-xl text-gray-600">
                            Enterprise Case Study — Wall Painting Claim Validation & Fraud Reduction
                        </p>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                            <div className="text-3xl font-bold text-brand-600 mb-2">~40%</div>
                            <div className="text-sm text-gray-600 font-medium">Claims Approved</div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                            <div className="text-3xl font-bold text-brand-600 mb-2">↓ 60%</div>
                            <div className="text-sm text-gray-600 font-medium">Fake Claims Reduced</div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                            <div className="text-3xl font-bold text-brand-600 mb-2">24,000+</div>
                            <div className="text-sm text-gray-600 font-medium">Wall Paintings</div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                            <div className="text-3xl font-bold text-brand-600 mb-2">Pan India</div>
                            <div className="text-sm text-gray-600 font-medium">Scale</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Overview */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-900 text-white px-6 py-3 rounded-lg inline-block mb-6">
                        <h2 className="text-xl font-bold">Brand Overview</h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Tata Play operates one of India's largest hyperlocal outdoor branding programs, executing wall paintings across thousands of locations. The execution spans multiple layers — painters, district teams, zonal teams, state offices, and central marketing.
                    </p>
                </div>
            </section>

            {/* The Challenge */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-900 text-white px-6 py-3 rounded-lg inline-block mb-6">
                        <h2 className="text-xl font-bold">The Challenge</h2>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-brand-600 mr-3 mt-1">•</span>
                            <span className="text-lg">No real-time visibility for central teams</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-brand-600 mr-3 mt-1">•</span>
                            <span className="text-lg">Long approval chain with delayed reporting</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-brand-600 mr-3 mt-1">•</span>
                            <span className="text-lg">No time to cross-verify images before campaign deadlines</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-brand-600 mr-3 mt-1">•</span>
                            <span className="text-lg">Duplicate and manipulated images passing verification</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-brand-600 mr-3 mt-1">•</span>
                            <span className="text-lg">90–95% of claims approved due to weak validation</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Before vs After */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-900 text-white px-6 py-3 rounded-lg inline-block mb-6">
                        <h2 className="text-xl font-bold">Before vs After</h2>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Before Truevisual</h3>
                            <p className="text-gray-700">Manual checks • No geo-validation • High blind approvals • Financial leakage</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">After Truevisual</h3>
                            <p className="text-gray-700">Geo-validation • Image context checks • Only ~40% claims approved as genuine</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Truevisual Solution */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-900 text-white px-6 py-3 rounded-lg inline-block mb-6">
                        <h2 className="text-xl font-bold">Truevisual Solution</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 border border-brand-100">
                            <h3 className="text-lg font-bold text-brand-900 mb-3">Long Shot + Close Shot Capture</h3>
                            <p className="text-gray-700">Painters were required to submit both contextual and detail images, reducing reuse and manipulation.</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-brand-100">
                            <h3 className="text-lg font-bold text-brand-900 mb-3">Geo-location Enforcement</h3>
                            <p className="text-gray-700">Latitude and longitude tagging with a mandatory 1km gap between claims automatically flagged violations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results & Impact */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-900 text-white px-6 py-3 rounded-lg inline-block mb-6">
                        <h2 className="text-xl font-bold">Results & Impact</h2>
                    </div>

                    <ul className="space-y-3 text-gray-700 mb-8">
                        <li className="flex items-start">
                            <span className="text-brand-600 mr-3 mt-1">•</span>
                            <span className="text-lg">Claim approval rate corrected from 90–95% to ~40%</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-brand-600 mr-3 mt-1">•</span>
                            <span className="text-lg">~60% of fake or duplicate claims eliminated</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-brand-600 mr-3 mt-1">•</span>
                            <span className="text-lg">Strong reduction in payout leakage</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-brand-600 mr-3 mt-1">•</span>
                            <span className="text-lg">Real-time visibility across all regions</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-brand-600 mr-3 mt-1">•</span>
                            <span className="text-lg">Improved accountability across field operations</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Summary */}
            <section className="py-16 bg-gradient-to-br from-brand-50 to-blue-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-900 text-white px-6 py-3 rounded-lg inline-block mb-6">
                        <h2 className="text-xl font-bold">Summary</h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Truevisual transformed Tata Play's wall-painting execution from a manual, opaque system into a location-validated, fraud-resistant workflow — delivering visibility, accountability, and financial control at scale.
                    </p>
                </div>
            </section>

            {/* Footer Strip */}
            <div className="bg-white border-t border-gray-100 py-12 text-center">
                <p className="text-gray-500 mb-6">Ready to transform your field operations?</p>
                <div className="flex justify-center gap-4 text-sm font-medium text-gray-400">
                    <span>© 2025 TrueVisual Inc.</span>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyPage;
