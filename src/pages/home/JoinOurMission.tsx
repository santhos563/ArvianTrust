
import { useState } from "react";

const Donation = () => {
    const [isQRVisible, setIsQRVisible] = useState(false);

    return (
        <section id="donate-section" className="w-full py-20 px-[5%] md:px-[10%] bg-white flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="flex-1 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h2 style={{ fontFamily: "Playfair Display, serif" }} className="text-[#104037] text-4xl md:text-5xl font-bold tracking-tight">
                        JOIN OUR MISSION
                    </h2>
                    <h3 className="text-[#104037] text-2xl md:text-3xl font-semibold opacity-90">
                        Become A Volunteer
                    </h3>
                </div>

                <div className="flex flex-col gap-6 text-gray-600 leading-relaxed text-sm md:text-base">
                    <p className="font-medium text-[#104037]/80">
                        Join our events & contribute your time
                    </p>
                    <p>
                        We accept donations of any kind, including monetary, material, and product ones. If you are physically unable to help others, you can still make a significant difference by making substantial donations to causes that benefit those less fortunate than yourself.
                    </p>
                </div>

                <div className="bg-[#f0f7f5] border-l-4 border-[#d67b5a] p-6 rounded-r-2xl mt-4">
                    <p className="text-sm md:text-base leading-relaxed">
                        <span className="font-bold text-[#d67b5a] uppercase tracking-wider">Tax Exemption:</span>
                        {" "}
                        <span className="font-semibold text-[#104037]">
                            Providing your PAN number during donation ensures your eligibility for tax benefits.
                        </span>
                    </p>
                    <p className="text-gray-500 text-sm mt-3 italic">
                        Thank you for supporting our children's education.
                    </p>
                </div>
            </div>

            {/* Right Column: Donation Card */}
            <div className="w-full md:w-[450px] shrink-0">
                <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-10 flex flex-col items-center text-center gap-8 border border-gray-100">
                    <h4 className="text-[#1f6f5e] font-bold text-xl md:text-2xl">
                        Secure UPI Transfer
                    </h4>

                    <p className="text-[#104037] font-semibold -mt-4 opacity-80">
                        Arivan Trust
                    </p>

                    {/* QR Code Container */}
                    <div
                        className="relative w-full aspect-square max-w-[280px] cursor-pointer group"
                        onMouseEnter={() => setIsQRVisible(true)}
                        onMouseLeave={() => setIsQRVisible(false)}
                        onClick={() => setIsQRVisible(!isQRVisible)}
                    >
                        {/* Placeholder QR Image */}
                        <div className={`w-full h-full rounded-2xl bg-[#104037] flex flex-col items-center justify-center p-8 transition-all duration-500 ${!isQRVisible ? 'blur-md' : 'blur-none'}`}>
                            <div className="w-full h-full border-4 border-white/20 rounded-xl relative flex items-center justify-center">
                                <span className="text-5xl text-white font-bold z-10">+</span>
                            </div>
                        </div>

                        {/* Overlay when blurred */}
                        {!isQRVisible && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-lg">
                                    <p className="text-white font-semibold text-sm drop-shadow-md">
                                        Scan with any payment<br />app to donate
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Prompt for mobile click */}
                        <p className="text-[10px] text-gray-400 mt-2 block md:hidden">
                            Click to reveal QR code
                        </p>
                    </div>

                    <div className="w-full flex flex-col gap-4">
                        <span className="text-gray-400 text-xs font-bold tracking-[0.2em]">OR PAY VIA</span>

                        <div className="border border-gray-200 rounded-2xl p-4 flex flex-col items-center gap-1 shadow-sm">
                            <span className="text-[#104037] font-bold text-2xl tracking-widest">
                                12345
                            </span>
                            <span className="text-gray-400 text-[10px] font-bold tracking-widest">
                                UPI ID
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-400 text-xs italic">
                        Your contribution makes a difference in children's lives
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Donation;
