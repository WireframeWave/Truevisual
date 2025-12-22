import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../src/assets/logo.png';

const AboutUs: React.FC = () => {
    const navigate = useNavigate();

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

            {/* Hero / Intro Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-8">
                        Driven by Innovation.<br />
                        <span className="text-brand-600">Grounded in Integrity.</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        At TrueVisual, we combine expertise in AI, computer vision, and compliance technology to create solutions that redefine trust in visual proof. We’re a team that believes every capture should be secure, authentic, and meaningful for the people and industries we serve.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="md:order-2">
                            <div className="w-full h-80 bg-gradient-to-br from-brand-100 to-blue-50 rounded-3xl flex items-center justify-center">
                                <span className="text-9xl text-brand-200 opacity-50">🎯</span>
                            </div>
                        </div>
                        <div>
                            <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-2 block">Our Mission</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Turning Every Capture<br />into Trusted Proof.
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Our mission is simple — to empower individuals, enterprises, and auditors with AI-powered GPS-stamped photos and videos that eliminate fraud, strengthen compliance, and build confidence in decision-making.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                From site visits to audits, TrueVisual ensures every interaction leaves behind evidence you can trust.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="w-full h-80 bg-gradient-to-br from-indigo-100 to-purple-50 rounded-3xl flex items-center justify-center">
                                <span className="text-9xl text-indigo-200 opacity-50">👁️</span>
                            </div>
                        </div>
                        <div>
                            <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-2 block">Our Vision</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                A World Where<br />Proof is Beyond Doubt.
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                We envision a future where technology removes uncertainty — where every photo, every video, and every report carries irrefutable authenticity.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                With TrueVisual, we’re building a world where trust in evidence is universal, helping industries operate with confidence and integrity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Strip */}
            <div className="bg-white border-t border-gray-100 py-12 text-center">
                <p className="text-gray-500 mb-6">Ready to see the future of visual verification?</p>
                <div className="flex justify-center gap-4 text-sm font-medium text-gray-400">
                    <span>© 2025 TrueVisual Inc.</span>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
