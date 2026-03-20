import { Link } from "react-router-dom";

export function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-[#1F6F5E] to-[#134E44] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 animate-fade-in">
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Helping Children<br />
                            <span className="text-[#E6F2EF]">Grow Higher Through Education</span>
                        </h2>
                        <p
                            className="text-lg md:text-xl text-white/90 leading-relaxed"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            At Arivan Trust, we believe education is the ladder to a brighter future. We support
                            underprivileged and orphaned children with <strong>books, stationery, school uniforms,
                                nutritious meals, and festival clothes</strong> — giving them everything they need to
                            learn, grow, and reach their highest potential.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                to="/about"
                                className="px-8 py-3 bg-[#134E44] hover:bg-[#0F3D35] text-white rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Learn More
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-3 bg-white text-[#1F6F5E] hover:bg-[#E6F2EF] rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Get Involved
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative animate-fade-in-delay">
                        <div className="absolute inset-0 bg-[#2E8B75] rounded-2xl transform rotate-3 opacity-20"></div>
                        <img
                            src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzI3ODU2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Children studying and learning"
                            className="rounded-2xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* Wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F6F8F7" />
                </svg>
            </div>

            <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
      `}</style>
        </section>
    );
}