import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../src/assets/logo.png';

const ContactPage: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for form submission logic
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Get in touch</h1>
                        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                            Have questions about our platform or need a custom solution? We're here to help you redefine trust in your operations.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="bg-brand-100 p-3 rounded-lg text-brand-600 mt-1">
                                    <Mail size={24} />
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-lg font-bold text-gray-900">Email Us</h3>
                                    <p className="text-gray-500 mb-1">Our friendly team is here to help.</p>
                                    <a href="mailto:puneet@truevisual.io" className="text-brand-600 font-medium hover:underline">puneet@truevisual.io</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-brand-100 p-3 rounded-lg text-brand-600 mt-1">
                                    <Phone size={24} />
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-lg font-bold text-gray-900">Call Us</h3>
                                    <p className="text-gray-500 mb-1">Mon-Fri from 9am to 6pm.</p>
                                    <a href="tel:+919632968050" className="text-brand-600 font-medium hover:underline">+91-9632968050</a>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50"
                                    placeholder="you@company.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-gray-50 resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-800 transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-900/20 flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-400 mt-12 bg-white">
                © 2025 TrueVisual Inc. All rights reserved.
            </div>
        </div>
    );
};

export default ContactPage;
