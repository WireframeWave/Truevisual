import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 mb-8 gap-4">
                        <span><strong>Effective Date:</strong> 1 Nov 2025</span>
                        <span className="hidden sm:inline">•</span>
                        <span><strong>Brand:</strong> TrueVisual</span>
                    </div>

                    <div className="prose prose-brand max-w-none text-gray-600 space-y-8">

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
                            <p>At TrueVisual, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our mobile app, website, and related services.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
                            <p className="mb-2">We collect only the information necessary to provide and improve our services.</p>

                            <div className="ml-4">
                                <h3 className="font-semibold text-gray-800 mt-3 mb-1">a. Information You Provide Directly</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Account details such as your name, email address, and contact information.</li>
                                    <li>Uploaded photos, videos, or location-tagged captures that you choose to store or share.</li>
                                    <li>Feedback or support messages you send to us.</li>
                                </ul>

                                <h3 className="font-semibold text-gray-800 mt-3 mb-1">b. Information Collected Automatically</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>GPS location, date, and time when using the camera features.</li>
                                    <li>Device details such as model, operating system, and performance logs.</li>
                                    <li>Basic usage analytics to improve reliability and user experience.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
                            <p className="mb-2">We use your data to:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Verify and tag captures with accurate location and timestamp data.</li>
                                <li>Maintain account and subscription services.</li>
                                <li>Provide reports, summaries, and downloadable logs for your activities.</li>
                                <li>Improve app performance and troubleshoot issues.</li>
                                <li>Comply with applicable legal, regulatory, or security requirements.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Storage and Retention</h2>
                            <p className="mb-2">Your data is stored securely on protected servers.</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>We retain information only as long as necessary to fulfill the purposes outlined above.</li>
                                <li>You can request deletion of your data at any time through the app or support portal.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Sharing of Information</h2>
                            <p className="mb-2">We do not sell or trade your personal data. We may share limited data only when:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Required by law, court order, or government request.</li>
                                <li>Necessary for trusted service providers (e.g., cloud storage, payment processing) under strict confidentiality agreements.</li>
                                <li>You explicitly choose to share your data or reports.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Security</h2>
                            <p>We use encryption, secure connections, and access controls to protect your information. While no system is completely secure, we take all reasonable steps to safeguard your data from unauthorized access or misuse.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights and Choices</h2>
                            <p className="mb-2">You have the right to:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Access, correct, or delete your personal data.</li>
                                <li>Export your records in standard formats (CSV/PDF).</li>
                                <li>Withdraw consent or deactivate your account at any time.</li>
                            </ul>
                            <p className="mt-4">For requests, please get in touch with us at <a href="mailto:puneet@truevisual.io" className="text-brand-600 hover:underline">puneet@truevisual.io</a>.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Children’s Privacy</h2>
                            <p>TrueVisual is not intended for children under 13. We do not knowingly collect personal information from minors.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Changes to This Policy</h2>
                            <p>We may update this policy from time to time. Any changes will be communicated through the app or our website, and the latest version will always be available online.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact Us</h2>
                            <p className="mb-4">For any questions, feedback, or privacy-related concerns, please reach out to:</p>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <strong className="block text-lg text-gray-900 mb-2">TrueVisual</strong>
                                <p className="mb-1">Visit: <a href="https://truevisual.io/contact" className="text-brand-600 hover:underline">https://truevisual.io/contact</a></p>
                                <p className="mb-1">Email: <a href="mailto:puneet@truevisual.io" className="text-brand-600 hover:underline">puneet@truevisual.io</a></p>
                                <p>Phone: <span className="text-gray-700 font-medium">+91-9632968050</span></p>
                            </div>
                        </section>

                    </div>
                </div>
            </div>

            {/* Simple footer for this page */}
            <div className="bg-white border-t border-gray-100 py-8 text-center text-sm text-gray-400">
                © 2025 TrueVisual Inc. All rights reserved
            </div>
        </div>
    );
};

export default PrivacyPolicy;
