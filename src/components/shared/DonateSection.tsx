import { useState } from "react";

export function DonateSection() {
    const [showQR, setShowQR] = useState(false);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#1F6F5E] mb-4 uppercase tracking-wider"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            JOIN OUR MISSION
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-[#134E44] mb-2">
                                    Become A Volunteer
                                </h3>
                                <p className="text-[#5A6A68] text-lg">
                                    Join our events & contribute your time
                                </p>
                            </div>

                            <p className="text-[#5A6A68] leading-relaxed">
                                We accept donations of any kind, including monetary, material, and product ones.
                                If you are physically unable to help others, you can still make a significant
                                difference by making substantial donations to causes that benefit those less
                                fortunate than yourself.
                            </p>

                            <div className="bg-[#F6F8F7] p-6 rounded-xl border-l-4 border-[#C46A2D]">
                                <p className="text-[#5A6A68] mt-2 font-medium">
                                    Thank you for supporting our children's education.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Donation Options */}
                    <div className="bg-gradient-to-br from-[#F6F8F7] to-white p-8 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-bold text-[#1F6F5E] mb-6 text-center">
                            Secure UPI Transfer
                        </h3>

                        <p className="text-center text-[#134E44] font-medium mb-4">
                            Arivan Trust
                        </p>

                        {/* QR Code Image Alternative */}
                        <div className="flex justify-center mb-6">
                            <div className="w-48 h-48 bg-gradient-to-br from-[#1F6F5E] to-[#134E44] rounded-2xl shadow-lg flex flex-col items-center justify-center text-white p-4">
                                <svg className="w-16 h-16 mb-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 10.5h-6.5V4h-5v6.5H3v5h6.5V20h5v-6.5H21v-5z" />
                                </svg>
                                <span className="text-sm font-medium text-center">Scan with any payment app to donate</span>
                            </div>
                        </div>

                        <div className="text-center mb-6">
                            <p className="text-[#5A6A68] font-medium mb-2">OR PAY VIA</p>
                            <div className="inline-block bg-white px-6 py-3 rounded-xl shadow-md border border-gray-200">
                                <p className="text-2xl font-mono font-bold text-[#1F6F5E]">arivan@trust</p>
                                <p className="text-xs text-[#5A6A68] mt-1">UPI ID</p>
                            </div>
                        </div>

                        <p className="text-xs text-center text-[#5A6A68] mt-4">
                            Your contribution makes a difference in children's lives
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}