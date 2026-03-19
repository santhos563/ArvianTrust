import { useEffect, useState } from "react";
import artExhibition1 from "../../assets/image5.png";
import artExhibition2 from "../../assets/image4.jpeg";
import artExhibition3 from "../../assets/image3.jpeg";
import children1 from "../../assets/image 1.jpeg";
import children2 from "../../assets/image 0.png";
import children3 from "../../assets/image 2.png";
import oldage1 from "../../assets/image 7.jpeg";
import oldage2 from "../../assets/image 6.jpeg";
import oldage3 from '../../assets/image 8.jpeg';

export function Activities() {
    // Image arrays for each box
    const box1Images = [
        artExhibition1,  // Your first custom image
        artExhibition2,  // Your second custom image
        artExhibition3
    ];

    const box2Images = [
        children1,
        children2,
        children3
    ];

    const box3Images = [
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544027993-37dbfe44362b?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    ];

    const box4Images = [
        oldage1,
        oldage2,
        oldage3
    ];

    // State for current image index for each box
    const [box1Index, setBox1Index] = useState(0);
    const [box2Index, setBox2Index] = useState(0);
    const [box3Index, setBox3Index] = useState(0);
    const [box4Index, setBox4Index] = useState(0);

    // Auto-change images every 3 seconds for each box
    useEffect(() => {
        const interval1 = setInterval(() => {
            setBox1Index((prev) => (prev + 1) % box1Images.length);
        }, 3000);

        const interval2 = setInterval(() => {
            setBox2Index((prev) => (prev + 1) % box2Images.length);
        }, 3200);

        const interval3 = setInterval(() => {
            setBox3Index((prev) => (prev + 1) % box3Images.length);
        }, 2800);

        const interval4 = setInterval(() => {
            setBox4Index((prev) => (prev + 1) % box4Images.length);
        }, 3500);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
            clearInterval(interval4);
        };
    }, []);

    const activities = [
        {
            id: 1,
            images: box1Images,
            currentIndex: box1Index,
            title: "ART EXHIBITION 2025",
            heading: "For Young Artists by Our Trust",
            description: "Arivan Trust organized the Art Exhibition at the historic World Tamil Sangam campus in Madurai. The event provided a prestigious platform for talented young artists to showcase their creativity and passion to the world.",
            fullDescription: "The exhibition featured stunning paintings, intricate crafts, and diverse artistic expressions from children across the region. By displaying their work at this iconic venue, we aimed to motivate and encourage these young talents, giving them the confidence to pursue their artistic dreams and share their gift with society.",
            location: "World Tamil Sangam Campus, Madurai",
            color: "border-[#C46A2D]",
            gradientFrom: "#C46A2D",
            gradientTo: "#B55A1D"
        },
        {
            id: 2,
            images: box2Images,
            currentIndex: box2Index,
            title: "Children Helping Children",
            heading: "Empowering Young Hearts",
            description: "At Arivan Trust, we believe every child deserves to feel loved and cherished. Through our Children Helping Children initiative, we embrace orphaned and underprivileged children as our own family, providing them with new clothes and special festival dresses so they can celebrate every occasion with joy and dignity, just like any other child.",
            fullDescription: "We ensure that no child feels left out during festivals and special occasions. By gifting them beautiful new clothes and celebrating with them, we create memories of warmth and belonging. Our volunteers spend time with these children, making them feel that they are part of a larger family that cares for them deeply.",
            color: "border-[#1F6F5E]",
            gradientFrom: "#1F6F5E",
            gradientTo: "#134E44"
        },
        {
            id: 3,
            images: box3Images,
            currentIndex: box3Index,
            title: "DRUG AWARENESS 2025",
            heading: "For College Students & Staff",
            description: "Arivan Trust organizes comprehensive drug awareness programs in colleges, reaching out to both students and staff members. These sessions aim to educate the entire college community about the dangers of substance abuse and create a supportive environment for prevention.",
            fullDescription: "Our awareness campaigns include interactive seminars, expert talks, and counseling sessions for students and faculty alike. We believe that when both students and staff are aware and united, they can create a campus culture that actively discourages substance abuse and promotes healthy lifestyle choices. Together, we build a community that protects and supports its young minds.",
            color: "border-[#1F6F5E]",
            gradientFrom: "#1F6F5E",
            gradientTo: "#134E44"
        },
        {
            id: 4,
            images: box4Images,
            currentIndex: box4Index,
            title: "Old Age Home Support",
            heading: "Mudhal Thunaivan",
            description: "At Arivan Trust, we honor the elderly as we would our own parents. Through our Mudhal Thunaivan initiative, we visit old age homes regularly to spend time with the residents, providing them with clothes, nutritious food, and essential supplies, but most importantly, giving them the love and respect they deserve.",
            fullDescription: "We believe that every elderly person deserves to feel valued and cared for. Our volunteers sit with them, listen to their stories, share meals, and celebrate festivals together. By treating them as our own family, we bring warmth and joy to their lives, ensuring they never feel forgotten or alone in their golden years.",
            color: "border-[#C46A2D]",
            gradientFrom: "#C46A2D",
            gradientTo: "#B55A1D"
        }
    ];

    return (
        <section id="activities-section" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl md:text-4xl font-bold text-[#1F6F5E] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Our Activities
                    </h2>
                    <div className="w-24 h-1 bg-[#2E8B75] mx-auto"></div>
                </div>

                {/* Vertical Stack of Boxes */}
                <div className="space-y-16">
                    {activities.map((activity, index) => (
                        <div key={activity.id}>
                            {activity.id === 1 ? (
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    {/* Left side - Image */}
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                        <img
                                            src={activity.images[activity.currentIndex]}
                                            alt={activity.title}
                                            className="w-full h-full object-cover transition-opacity duration-1000"
                                        />
                                        {/* Fixed gradient overlay */}
                                        <div
                                            className="absolute inset-0 opacity-30"
                                            style={{
                                                // background: `linear-gradient(to top, ${activity.gradientFrom}, ${activity.gradientTo})`
                                            }}
                                        ></div>

                                        {/* Image indicator dots */}
                                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                            {activity.images.map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`rounded-full transition-all ${idx === activity.currentIndex
                                                        ? 'w-3 h-3 bg-white'
                                                        : 'w-2 h-2 bg-white/60'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right side - Content */}
                                    <div>
                                        <div className="uppercase text-2xl md:text-3xl font-bold text-[#1F6F5E] mb-2"
                                            style={{ fontFamily: "'Playfair Display', serif" }}>
                                            {activity.title}
                                        </div>
                                        <h3
                                            className="text-xl md:text-2xl font-semibold text-[#C46A2D] mb-4"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            {activity.heading}
                                        </h3>
                                        <p
                                            className="text-[#5A6A68] text-base leading-relaxed mb-4"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            {activity.description}
                                        </p>
                                        <p
                                            className="text-[#5A6A68] text-base leading-relaxed mb-4"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            {activity.fullDescription}
                                        </p>
                                        <p
                                            className="text-[#5A6A68] text-base font-medium mb-6"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            📍 {activity.location}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                                <img
                                                    src={activity.images[activity.currentIndex]}
                                                    alt={activity.title}
                                                    className="w-full h-full object-cover transition-opacity duration-1000"
                                                />
                                                {/* Fixed gradient overlay */}
                                                <div
                                                    className="absolute inset-0 opacity-30"
                                                    style={{
                                                        //background: `linear-gradient(to top, ${activity.gradientFrom}, ${activity.gradientTo})`
                                                    }}
                                                ></div>
                                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                                    {activity.images.map((_, idx) => (
                                                        <div
                                                            key={idx}
                                                            className={`rounded-full transition-all ${idx === activity.currentIndex
                                                                ? 'w-3 h-3 bg-white'
                                                                : 'w-2 h-2 bg-white/60'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <div className="uppercase text-sm font-semibold tracking-wider text-[#C46A2D] mb-2">
                                                    {activity.title}
                                                </div>
                                                <h3
                                                    className="text-3xl md:text-4xl font-bold text-[#1F6F5E] mb-4"
                                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                                >
                                                    {activity.heading}
                                                </h3>
                                                <p
                                                    className="text-[#5A6A68] text-base md:text-lg leading-relaxed mb-4"
                                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                                >
                                                    {activity.description}
                                                </p>
                                                {activity.fullDescription && (
                                                    <p
                                                        className="text-[#5A6A68] text-base leading-relaxed mb-6"
                                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                                    >
                                                        {activity.fullDescription}
                                                    </p>
                                                )}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div>
                                                <div className="uppercase text-sm font-semibold tracking-wider text-[#C46A2D] mb-2">
                                                    {activity.title}
                                                </div>
                                                <h3
                                                    className="text-3xl md:text-4xl font-bold text-[#1F6F5E] mb-4"
                                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                                >
                                                    {activity.heading}
                                                </h3>
                                                <p
                                                    className="text-[#5A6A68] text-base md:text-lg leading-relaxed mb-4"
                                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                                >
                                                    {activity.description}
                                                </p>
                                                {activity.fullDescription && (
                                                    <p
                                                        className="text-[#5A6A68] text-base leading-relaxed mb-6"
                                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                                    >
                                                        {activity.fullDescription}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                                <img
                                                    src={activity.images[activity.currentIndex]}
                                                    alt={activity.title}
                                                    className="w-full h-full object-cover transition-opacity duration-1000"
                                                />
                                                {/* Fixed gradient overlay */}
                                                <div
                                                    className="absolute inset-0 opacity-30"
                                                    style={{
                                                        //background: `linear-gradient(to top, ${activity.gradientFrom}, ${activity.gradientTo})`
                                                    }}
                                                ></div>
                                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                                    {activity.images.map((_, idx) => (
                                                        <div
                                                            key={idx}
                                                            className={`rounded-full transition-all ${idx === activity.currentIndex
                                                                ? 'w-3 h-3 bg-white'
                                                                : 'w-2 h-2 bg-white/60'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}