
import React from 'react';
import book from '../../assets/book.avif';

const About = () => {
    const cards = [
        {
            border: "#145A4A",
            icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
            title: "Books & Study Materials",
            desc: "Textbooks, notebooks, and learning guides so children can study, do homework, and prepare for exams without worrying about missing resources.",
        },
        {
            border: "#145A4A",
            icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
            title: "Daily Stationery",
            desc: "Pens, pencils, notebooks, and geometry boxes — the essential tools every child needs to write, learn, and participate in class every day.",
        },
        {
            border: "#145A4A",
            icon: "M3 12l2-2 2 2 4-4 2 2 4-4 2 2 2-2M5 12v6h14v-6",
            title: "Sports & Activities",
            desc: "Supporting children in sports, arts, and cultural activities so they develop confidence, teamwork, and discover their hidden talents.",
        },
        {
            border: "#C46A2D",
            icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
            title: "School Uniforms",
            desc: "New, clean uniforms so every child can attend school with confidence and dignity, just like their classmates.",
        },
        {
            border: "#C46A2D",
            icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            title: "Nutritious Meals",
            desc: "Regular meals so no child has to learn on an empty stomach. Good food helps children focus, concentrate, and grow.",
        },
    ];

    return (
        <section id="about" className="bg-white">

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                1. PAGE HEADER
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="bg-[#f0f9f7] py-20 border-b border-[#145A4A]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span
                        className="inline-block text-[11px] font-medium tracking-[0.15em] uppercase text-[#2E8B75] bg-white border border-[#145A4A]/15 px-4 py-1.5 rounded-full mb-5"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Est. 2022 · Tamil Nadu, India
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#145A4A] mb-5 leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        About Arivan Trust
                    </h2>
                    <div className="w-10 h-0.5 bg-[#C46A2D] mx-auto mb-6 rounded-full" />
                    <p
                        className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Arivan Trust is an <strong className="text-[#145A4A] font-semibold">education-focused organization</strong> founded in 2022.
                        We help underprivileged and orphaned children by giving them everything they need
                        to stay in school — because an educated child can change their family's future.
                    </p>
                </div>
            </div>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                2. MISSION & VISION
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Mission */}
                        <div className="relative bg-[#f0f9f7] p-8 md:p-10 rounded-2xl border border-[#145A4A]/12 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <div className="absolute top-0 right-0 w-36 h-36 bg-[#145A4A]/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            <div className="w-12 h-12 bg-[#145A4A] rounded-xl flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3
                                className="text-2xl font-bold text-[#145A4A] mb-4"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Our Mission
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                                To ensure every child has access to quality education. We believe a child cannot
                                learn if they are hungry, embarrassed, or lack basic resources — so we remove every
                                barrier that stands between a child and their classroom.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="relative bg-[#fef6f0] p-8 md:p-10 rounded-2xl border border-[#C46A2D]/12 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <div className="absolute top-0 right-0 w-36 h-36 bg-[#C46A2D]/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            <div className="w-12 h-12 bg-[#C46A2D] rounded-xl flex items-center justify-center mb-5">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3
                                className="text-2xl font-bold text-[#145A4A] mb-4"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Our Vision
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                                A future where{" "}
                                <strong className="text-[#145A4A] font-medium">every child completes their education</strong>{" "}
                                and no child drops out because their family cannot afford to keep them in school.
                                We dream of educated children becoming teachers, doctors, and leaders who lift
                                their families and communities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                3. STICKY IMAGE + CARDS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="py-20 bg-[#F8F5F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section label */}
                    <div className="text-center mb-14">
                        <span
                            className="inline-block text-[11px] font-medium tracking-[0.15em] uppercase text-[#2E8B75] bg-[#E6F2EF] px-4 py-1.5 rounded-full mb-4"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Our Work
                        </span>
                        <h3
                            className="text-2xl md:text-3xl font-bold text-[#145A4A] mb-3"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            How We Support Education
                        </h3>
                        <div className="w-10 h-0.5 bg-[#C46A2D] mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 items-start">

                        {/* Left — Sticky image */}
                        <div className="md:sticky md:top-24">
                            <div className="relative rounded-2xl overflow-hidden h-[560px] shadow-2xl">
                                <img
                                    src={book}
                                    alt="Children studying in classroom"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#145A4A] via-[#145A4A]/65 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8 text-white">
                                    <span
                                        className="text-[#C46A2D] font-semibold text-xs uppercase tracking-[0.2em] mb-3 block"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        Comprehensive Support
                                    </span>
                                    <h4
                                        className="text-3xl md:text-4xl font-bold mb-3 leading-tight"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        Everything a Child<br />Needs to Succeed
                                    </h4>
                                    <div className="w-12 h-0.5 bg-[#C46A2D] mb-4 rounded-full" />
                                    <p
                                        className="text-white/80 max-w-xs text-sm leading-relaxed font-light"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        We give children the resources, dignity, and support they need
                                        to show up, sit down, and truly learn.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right — Cards */}
                        <div className="space-y-4">
                            {cards.map((c) => (
                                <div
                                    key={c.title}
                                    className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 group hover:-translate-y-0.5"
                                    style={{ borderLeftColor: c.border }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                                            style={{ backgroundColor: c.border }}
                                        >
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.icon} />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4
                                                className="text-base font-bold text-gray-900 mb-1"
                                                style={{ fontFamily: "'Playfair Display', serif" }}
                                            >
                                                {c.title}
                                            </h4>
                                            <p
                                                className="text-gray-500 text-sm font-light leading-relaxed"
                                                style={{ fontFamily: "'Inter', sans-serif" }}
                                            >
                                                {c.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                4. CTA — single button + note
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="bg-white py-16 border-t border-[#145A4A]/08">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h3
                        className="text-2xl font-bold text-[#145A4A] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Help a Child Get an Education
                    </h3>
                    <p
                        className="text-gray-500 font-light leading-relaxed mb-7"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        We've helped hundreds of children stay in school since 2022 — but many more
                        are still waiting for support.{" "}
                        <strong className="text-[#145A4A] font-medium">Your contribution can write a child's future.</strong>
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center mb-5">
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-7 py-3 bg-[#C46A2D] hover:bg-[#B55A1D] text-white text-sm font-medium rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl shadow-md shadow-[#C46A2D]/25"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Support a Child's Education
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                    <p
                        className="text-xs text-gray-400 font-light"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        💡 100% of your donation goes directly to the children who need it most.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default About;
