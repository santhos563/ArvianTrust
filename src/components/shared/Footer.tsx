import logo from "../../assets/logo.jpeg";
<<<<<<< HEAD
import { Mail, MapPin, Instagram, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const location = useLocation();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // Clear any hash from URL
        if (window.location.hash) {
            window.location.hash = '';
        }
    };

    const handlePageClick = (path: string, e: React.MouseEvent) => {
        if (location.pathname === path) {
            e.preventDefault();
            scrollToTop();
        }
    };

    const handleHomeClick = (e: React.MouseEvent) => {
        handlePageClick('/', e);
    };

    const handleAboutClick = (e: React.MouseEvent) => {
        handlePageClick('/about', e);
    };

    const handleContactClick = (e: React.MouseEvent) => {
        handlePageClick('/contact', e);
    };

    const scrollToSection = (sectionId: string) => {
        if (location.pathname !== '/') {
            window.location.href = `/#${sectionId}`;
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="w-full bg-linear-to-br from-[#0F3D35] to-[#0A2F28] text-white pt-16 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#2E8B75]/20">

                    {/* Logo & Description - Fixed to go to top */}
                    <div className="col-span-1 lg:col-span-1">
                        <Link
                            to="/"
                            onClick={handleHomeClick}
                            className="flex items-center gap-3 group mb-4"
                        >
                            <img
                                src={logo}
                                alt="Arivan Trust Logo"
                                className="h-14 w-14 rounded-lg transition-transform duration-300 group-hover:scale-105"
                            />
                            <div>
                                <h2
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                    className="text-white text-xl font-bold tracking-[0.06em]"
                                >
                                    ARIVAN TRUST
                                </h2>
                                <p className="text-[#4bb89a] text-[12px] font-medium tracking-[0.08em]">
                                    Empowering Education, Enriching Lives
                                </p>
                            </div>
                        </Link>

                        <p className="text-[#b6e0d3] text-sm leading-relaxed mb-6">
                            Arivan Trust is committed to supporting underprivileged and parent-less students by providing educational assistance, school uniforms, and essential learning materials.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex gap-3">
                            <a
                                href="https://www.instagram.com/arivantrust"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#256055] p-2.5 rounded-full hover:bg-[#C46A2D] transition-all duration-300 hover:-translate-y-1 shadow-md shadow-black/20"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} className="text-white" />
                            </a>
                            <a
                                href="mailto:arivantrust2022@gmail.com"
                                className="bg-[#256055] p-2.5 rounded-full hover:bg-[#C46A2D] transition-all duration-300 hover:-translate-y-1 shadow-md shadow-black/20"
                                aria-label="Email"
                            >
                                <Mail size={18} className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links - Aligned with navbar */}
                    <div className="col-span-1">
                        <h3
                            style={{ fontFamily: "'Playfair Display', serif" }}
                            className="text-white text-lg font-bold mb-5 relative inline-block"
                        >
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#C46A2D] rounded-full"></span>
                        </h3>

                        <ul className="flex flex-col gap-3">
                            <li>
                                <Link
                                    to="/"
                                    onClick={handleHomeClick}
                                    className="text-[#b6e0d3] hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 bg-[#4bb89a] rounded-full group-hover:bg-[#C46A2D] transition-colors"></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('activities-section')}
                                    className="text-[#b6e0d3] hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group w-full text-left"
                                >
                                    <span className="w-1 h-1 bg-[#4bb89a] rounded-full group-hover:bg-[#C46A2D] transition-colors"></span>
                                    Our Activities
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('gallery-section')}
                                    className="text-[#b6e0d3] hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group w-full text-left"
                                >
                                    <span className="w-1 h-1 bg-[#4bb89a] rounded-full group-hover:bg-[#C46A2D] transition-colors"></span>
                                    Gallery
                                </button>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    onClick={handleAboutClick}
                                    className="text-[#b6e0d3] hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 bg-[#4bb89a] rounded-full group-hover:bg-[#C46A2D] transition-colors"></span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    onClick={handleContactClick}
                                    className="text-[#b6e0d3] hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 bg-[#4bb89a] rounded-full group-hover:bg-[#C46A2D] transition-colors"></span>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Our Work - New section matching navbar */}
                    <div className="col-span-1">
                        <h3
                            style={{ fontFamily: "'Playfair Display', serif" }}
                            className="text-white text-lg font-bold mb-5 relative inline-block"
                        >
                            Our Work
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#C46A2D] rounded-full"></span>
                        </h3>

                        <ul className="flex flex-col gap-3">
                            <li className="text-[#b6e0d3] text-sm flex items-start gap-2">
                                <span className="text-[#4bb89a] font-bold">•</span>
                                <span>Educational Support</span>
                            </li>
                            <li className="text-[#b6e0d3] text-sm flex items-start gap-2">
                                <span className="text-[#4bb89a] font-bold">•</span>
                                <span>School Uniforms</span>
                            </li>
                            <li className="text-[#b6e0d3] text-sm flex items-start gap-2">
                                <span className="text-[#4bb89a] font-bold">•</span>
                                <span>Nutritious Meals</span>
                            </li>
                            <li className="text-[#b6e0d3] text-sm flex items-start gap-2">
                                <span className="text-[#4bb89a] font-bold">•</span>
                                <span>Art & Cultural Programs</span>
                            </li>
                            <li className="text-[#b6e0d3] text-sm flex items-start gap-2">
                                <span className="text-[#4bb89a] font-bold">•</span>
                                <span>Drug Awareness</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1">
                        <h3
                            style={{ fontFamily: "'Playfair Display', serif" }}
                            className="text-white text-lg font-bold mb-5 relative inline-block"
                        >
                            Get in Touch
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#C46A2D] rounded-full"></span>
                        </h3>

                        <ul className="flex flex-col gap-4">
                            {/* Email */}
                            <li className="flex items-start gap-3 group">
                                <Mail size={18} className="shrink-0 mt-0.5 text-[#4bb89a] group-hover:text-[#C46A2D] transition-colors" />
                                <a
                                    href="mailto:arivantrust2022@gmail.com"
                                    className="text-[#b6e0d3] hover:text-white transition-colors duration-300 text-sm break-all"
                                >
                                    arivantrust2022@gmail.com
                                </a>
                            </li>

                            {/* Phone / Mobile Number */}
                            <li className="flex items-start gap-3 group">
                                <Phone size={18} className="shrink-0 mt-0.5 text-[#4bb89a] group-hover:text-[#C46A2D] transition-colors" />
                                <a
                                    href="tel:+919876543210"
                                    className="text-[#b6e0d3] hover:text-white transition-colors duration-300 text-sm"
                                >
                                    +91 97892 50885
                                </a>
                            </li>

                            {/* Location */}
                            <li className="flex items-start gap-3 group">
                                <MapPin size={18} className="shrink-0 mt-0.5 text-[#4bb89a] group-hover:text-[#C46A2D] transition-colors" />
                                <span className="text-[#b6e0d3] text-sm">
                                    Madurai, Tamil Nadu, India
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#b6e0d3] text-xs md:text-sm">
                        © {currentYear} Arivan Trust. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-4 text-xs text-[#4bb89a]">
                        <span className="hidden md:inline text-[#2E8B75]">|</span>
                        <span>Registered Charitable Trust</span>
                        <span className="text-[#2E8B75]">|</span>
                        <span>Tamil Nadu, India</span>
                    </div>
                </div>
=======
import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full bg-[#14443b] text-[#b6e0d3] pt-12 pb-6 px-[10%] md:px-0">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-0 border-b border-[#256055] pb-8">
                <div className="flex-1 min-w-[250px] flex flex-col gap-6 md:gap-4">
                    <div className="w-full flex gap-3 items-center">
                        <img src={logo} alt="logo" className="w-[48px] h-[48px]" />
                        <nav>
                            <h2 style={{ fontFamily: "Playfair Display, serif" }} className="text-white text-xl font-bold">ARIVAN TRUST</h2>
                            <p className="text-[#4bb89a] text-[16px] font-medium ">Empowering Education, Enriching Lives</p>
                        </nav>
                    </div>
                    <p className="text-[16px] text-[#b6e0d3] max-w-md">
                        Arivan Trust is committed to supporting underprivileged and parent-less students by providing educational assistance, school uniforms, and essential learning materials.
                    </p>
                </div>
                <div className="flex-1 min-w-[180px] md:ml-5">
                    <h3 style={{ fontFamily: "Playfair Display, serif" }} className="text-white text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="flex flex-col gap-2">
                        <li><Link to="/" className="hover:text-white ">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white">About</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>
                <div className="flex-1 min-w-[200px]">
                    <h3 style={{ fontFamily: "Playfair Display, serif" }} className="text-white text-xl font-bold mb-4">Contact</h3>
                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-2 text-lg"><Mail size={20} /> info@arivantrust.org</li>
                        <li className="flex items-center gap-2 text-lg"><MapPin size={20} /> Tamil Nadu, India</li>
                    </ul>
                </div>
            </div>
            <div className="max-w-6xl mx-auto pt-6 text-center text-[#b6e0d3] text-[16px]">
                © 2026 Arivan Trust. All Rights Reserved.
>>>>>>> 8dab6d5449b24aff156a556c78adca3579567237
            </div>
        </footer>
    );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> 8dab6d5449b24aff156a556c78adca3579567237
