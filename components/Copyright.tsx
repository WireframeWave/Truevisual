import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../src/assets/logo.png';

const Copyright: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
            <div className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center text-gray-500 hover:text-brand-700 transition-colors font-medium"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Home
                    </button>
                    <div className="ml-auto flex items-center">
                        <img src={logo} alt="TrueVisual" className="h-8 w-auto" />
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">Copyright Statement</h1>

                    <div className="prose prose-brand max-w-none text-gray-600 space-y-8">
                        <section>
                            <p className="leading-relaxed">
                                All content, materials, software, features, and functionality appearing on or available through the TrueVisual website, platform, applications, services, and associated documentation (collectively, the “Content”) are the exclusive property of TrueVisual (“we”, “us”, “our”) or our licensors and are protected by copyright, trademark, patent, trade secret, and other applicable intellectual property laws, including international conventions. This includes but is not limited to:
                            </p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>Text, images, graphics, logos, icons, and design elements displayed on the site and platform</li>
                                <li>The TrueVisual mobile and web applications and all related software code</li>
                                <li>Algorithms, processes, workflows, and proprietary technologies for capturing, timestamping, location-tagging, encrypting and verifying visual proofs</li>
                                <li>Documentation, user interfaces, APIs, APIs documentation, and related materials associated with TrueVisual’s services</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Copyright Ownership</h2>
                            <p className="leading-relaxed">
                                All right, title, and interest in and to the Content (including all worldwide intellectual property rights) remain exclusively with TrueVisual or its licensors. You may not reproduce, distribute, display, perform, publish, modify, create derivative works from, transmit, or otherwise use the Content except as permitted in writing by TrueVisual or as expressly authorized through functionality provided on the website or platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">License to Use</h2>
                            <p className="leading-relaxed">
                                Subject to your compliance with our Terms of Service and applicable law, TrueVisual grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Content for your internal business purposes. Any other use—including but not limited to copying, scraping, data mining, reverse engineering, or unauthorized distribution—is strictly prohibited without our prior written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Trademarks</h2>
                            <p className="leading-relaxed">
                                TrueVisual™️ and related logos, product and service names are trademarks and/or service marks of TrueVisual (or its affiliates). You agree not to display or use these marks in any manner without our prior written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Reservation of Rights</h2>
                            <p className="leading-relaxed">
                                We expressly reserve all rights not expressly granted in this Copyright Statement and in the Terms of Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Reporting Copyright Infringement</h2>
                            <p className="leading-relaxed text-gray-600">
                                If you believe any material on this site infringes your copyright, please contact TrueVisual’s designated agent at the contact information provided in our legal notices.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <div className="bg-white border-t border-gray-100 py-8 text-center text-sm text-gray-400">
                © 2025 TrueVisual Inc. All rights reserved
            </div>
        </div>
    );
};

export default Copyright;
