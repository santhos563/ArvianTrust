import { useState, useEffect } from "react";

const ActivitySlider = ({ colors }: { colors: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % colors.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [colors.length]);

    return (
        <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-xl">
            {/* Slides */}
            <div className="w-full h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {colors.map((color, index) => (
                    <div key={index} className="w-full h-full shrink-0" style={{ backgroundColor: color }}>
                        {/* Placeholder for images */}
                        <div className="w-full h-full flex items-center justify-center text-white font-bold opacity-30">
                            Slide {index + 1}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                {colors.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-6" : "bg-white/50"}`}
                    />
                ))}
            </div>
        </div>
    );
};

const Activities = () => {
    return (
        <section className="w-full py-20 px-[5%] md:px-[10%]  flex flex-col items-center gap-16">
            {/* Header */}
            <div className="flex flex-col items-center gap-4 text-center">
                <span className="bg-[#e4f2ef] text-[#1f6f5e] px-4 py-1 rounded-full text-sm font-semibold tracking-wider">
                    WHAT WE DO
                </span>
                <h2 style={{ fontFamily: "Playfair Display, serif" }} className="text-[#104037] text-4xl md:text-5xl font-bold">
                    Our Activities
                </h2>
                <div className="w-16 h-1 bg-[#d67b5a] mt-[-5px]"></div>
            </div>

            {/* Activity Block 1: Art Exhibition */}
            <div className="w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="flex-1 w-full">
                    <ActivitySlider colors={["#b8c9c5", "#abbfb9", "#9db0aa"]} />
                </div>
                <div className="flex-1 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <span className="text-[#d67b5a] text-sm font-bold tracking-[0.2em] uppercase">Art Exhibition 2025</span>
                        <h3 style={{ fontFamily: "Playfair Display, serif" }} className="text-[#104037] text-3xl md:text-4xl font-bold">
                            For Young Artists by Our Trust
                        </h3>
                        <div className="w-10 h-0.5 bg-[#d67b5a]/30"></div>
                    </div>
                    <div className="text-gray-600 flex flex-col gap-4 text-sm md:text-base leading-relaxed">
                        <p>
                            Arivan Trust organized the Art Exhibition at the historic World Tamil Sangam campus in Madurai.
                            The event provided a prestigious platform for talented young artists to showcase their creativity and passion to the world.
                        </p>
                        <p>
                            The exhibition featured stunning paintings, intricate crafts, and diverse artistic expressions.
                            We aimed to motivate and encourage these young talents, giving them the confidence to pursue their artistic dreams.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-[#d67b5a] font-medium text-sm">
                        <span>📍 World Tamil Sangam Campus, Madurai</span>
                    </div>
                </div>
            </div>

            {/* Activity Block 2: Empowering Young Hearts */}
            <div className="w-full flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
                <div className="flex-1 w-full">
                    <ActivitySlider colors={["#cbd7d4", "#bccbc8", "#adbdb9"]} />
                </div>
                <div className="flex-1 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <span className="text-[#d67b5a] text-sm font-bold tracking-[0.2em] uppercase">Children Helping Children</span>
                        <h3 style={{ fontFamily: "Playfair Display, serif" }} className="text-[#104037] text-3xl md:text-4xl font-bold">
                            Empowering Young Hearts
                        </h3>
                        <div className="w-10 h-0.5 bg-[#d67b5a]/30"></div>
                    </div>
                    <div className="text-gray-600 flex flex-col gap-4 text-sm md:text-base leading-relaxed">
                        <p>
                            At Arivan Trust, we believe every child deserves to feel loved and cherished.
                            Through our Children Helping Children initiative, we embrace orphaned and underprivileged children as our own family.
                        </p>
                        <p>
                            We ensure that no child feels left out during festivals and special occasions.
                            By gifting them beautiful new clothes and celebrating with them, we create memories of warmth and belonging.
                        </p>
                    </div>
                </div>
            </div>


            <div className="w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="flex-1 w-full">
                    <ActivitySlider colors={["#b8c9c5", "#abbfb9", "#9db0aa"]} />
                </div>
                <div className="flex-1 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <span className="text-[#d67b5a] text-sm font-bold tracking-[0.2em] uppercase"> DRUG AWARENESS 2025  </span>
                        <h3 style={{ fontFamily: "Playfair Display, serif" }} className="text-[#104037] text-3xl md:text-4xl font-bold">
                            For College Students & Staff

                        </h3>
                        <div className="w-10 h-0.5 bg-[#d67b5a]/30"></div>
                    </div>
                    <div className="text-gray-600 flex flex-col gap-4 text-sm md:text-base leading-relaxed">
                        <p>
                            Arivan Trust organizes comprehensive drug awareness programs in colleges,
                            reaching out to both students and staff members. These sessions aim to
                            educate the entire college community about the dangers of substance abuse
                            and create a supportive environment for prevention.                        </p>
                        <p>
                            Our awareness campaigns include interactive seminars, expert talks, and counseling
                            sessions for students and faculty alike. We believe that when both students and staff are
                            aware and united, they can create a campus culture that actively discourages substance
                            abuse and promotes healthy lifestyle choices. Together, we build a community that
                            protects and supports its young minds.                        </p>
                    </div>
                </div>
            </div>


            <div className="w-full flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
                <div className="flex-1 w-full">
                    <ActivitySlider colors={["#cbd7d4", "#bccbc8", "#adbdb9"]} />
                </div>
                <div className="flex-1 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <span className="text-[#d67b5a] text-sm font-bold tracking-[0.2em] uppercase">Old Age Home Support</span>
                        <h3 style={{ fontFamily: "Playfair Display, serif" }} className="text-[#104037] text-3xl md:text-4xl font-bold">
                            Mudhal Thunaivan
                        </h3>
                        <div className="w-10 h-0.5 bg-[#d67b5a]/30"></div>
                    </div>
                    <div className="text-gray-600 flex flex-col gap-4 text-sm md:text-base leading-relaxed">
                        <p>
                            At Arivan Trust, we honor the elderly as we would our own parents. Through our Mudhal Thunaivan initiative, we visit old age homes regularly to spend time with the residents, providing them with clothes, nutritious food, and essential supplies, but most importantly, giving them the love and respect they deserve.

                        </p>
                        <p>
                            We believe that every elderly person deserves to feel valued and cared for. Our volunteers sit with them, listen to their stories, share meals, and celebrate festivals together. By treating them as our own family, we bring warmth and joy to their lives, ensuring they never feel forgotten or alone in their golden years.

                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;
