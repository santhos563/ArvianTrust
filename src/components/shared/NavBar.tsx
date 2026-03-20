import logo from "../../assets/logo.jpeg";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');
    const location = useLocation();

    // Check active section based on URL hash or current page
    useEffect(() => {
        if (location.pathname === '/') {
            // Check if there's a hash in the URL
            const hash = window.location.hash.replace('#', '');
            if (hash === 'activities-section' || hash === 'gallery-section') {
                setActiveSection(hash);
            } else {
                setActiveSection('home');
            }
        } else if (location.pathname === '/about') {
            setActiveSection('about');
        } else if (location.pathname === '/contact') {
            setActiveSection('contact');
        } else {
            setActiveSection('');
        }
    }, [location]);

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
        setMobileOpen(false);
    };

    const scrollToSection = (sectionId: string) => {
        if (location.pathname !== '/') {
            // Navigate to home page with hash
            window.location.href = `/#${sectionId}`;
        } else {
            // Update URL hash without page reload
            window.location.hash = sectionId;

            // Scroll to the section
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(sectionId);
            }
        }
        setMobileOpen(false);
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

    const isActive = (path: string, sectionId?: string) => {
        if (path === '/') {
            if (sectionId) {
                return activeSection === sectionId;
            }
            return activeSection === 'home' && !window.location.hash;
        }
        return location.pathname === path;
    };

    return (
        // Sticky wrapper so announcement bar + header scroll together as one unit
        <div className="sticky top-0 z-50">

            {/* Thin top announcement bar */}
            <div
                className="bg-[#0F3D35] text-white/70 text-[11px] text-center py-1.5 tracking-widest uppercase hidden md:block"
                style={{ fontFamily: "'Inter', sans-serif" }}
            >
                Registered Charitable Trust · Tamil Nadu, India
                <span className="mx-3 text-white/30">·</span>
                Supporting underprivileged children through education
            </div>

            <header
                className="bg-white/95 backdrop-blur-md border-b border-[#1F6F5E]/10"
                style={{ boxShadow: "0 1px 24px rgba(31,111,94,0.07)" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">

                        {/* Logo & Brand - Fixed to go to top */}
                        <Link
                            to="/"
                            onClick={handleHomeClick}
                            className="flex items-center gap-3 group"
                        >
                            <img
                                src={logo}
                                alt="Arivan Trust Logo"
                                className="h-14 w-14 transition-transform duration-300 group-hover:scale-105"
                            />
                            <div>
                                <h1
                                    className="font-bold text-[1.15rem] text-[#1F6F5E] tracking-[0.06em] leading-tight"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    ARIVAN TRUST
                                </h1>
                                <p
                                    className="text-[10px] text-[#5A6A68] tracking-[0.12em] uppercase font-light leading-none mt-0.5"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    Empowering Education, Enriching Lives
                                </p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-7">
                            <div className="h-5 w-px bg-[#1F6F5E]/15" />

                            {/* Home Link - Fixed to go to top */}
                            <Link
                                to="/"
                                onClick={handleHomeClick}
                                className={`text-sm transition-colors font-medium relative group pb-0.5 ${isActive('/') ? 'text-[#1F6F5E]' : 'text-[#4A5A58] hover:text-[#1F6F5E]'
                                    }`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Home
                                <span className={`absolute bottom-0 left-0 h-px bg-[#1F6F5E] transition-all duration-300 rounded-full ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                            </Link>

                            {/* Our Activities Button */}
                            <button
                                onClick={() => scrollToSection('activities-section')}
                                className={`text-sm transition-colors font-medium relative group pb-0.5 cursor-pointer ${isActive('/', 'activities-section') ? 'text-[#1F6F5E]' : 'text-[#4A5A58] hover:text-[#1F6F5E]'
                                    }`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Our Activities
                                <span className={`absolute bottom-0 left-0 h-px bg-[#1F6F5E] transition-all duration-300 rounded-full ${isActive('/', 'activities-section') ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                            </button>

                            {/* Gallery Button */}
                            <button
                                onClick={() => scrollToSection('gallery-section')}
                                className={`text-sm transition-colors font-medium relative group pb-0.5 cursor-pointer ${isActive('/', 'gallery-section') ? 'text-[#1F6F5E]' : 'text-[#4A5A58] hover:text-[#1F6F5E]'
                                    }`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Gallery
                                <span className={`absolute bottom-0 left-0 h-px bg-[#1F6F5E] transition-all duration-300 rounded-full ${isActive('/', 'gallery-section') ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                            </button>

                            {/* About Link - Fixed to go to top */}
                            <Link
                                to="/about"
                                onClick={handleAboutClick}
                                className={`text-sm transition-colors font-medium relative group pb-0.5 ${isActive('/about') ? 'text-[#1F6F5E]' : 'text-[#4A5A58] hover:text-[#1F6F5E]'
                                    }`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                About
                                <span className={`absolute bottom-0 left-0 h-px bg-[#1F6F5E] transition-all duration-300 rounded-full ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                            </Link>

                            {/* Contact Link - Fixed to go to top */}
                            <Link
                                to="/contact"
                                onClick={handleContactClick}
                                className={`text-sm transition-colors font-medium relative group pb-0.5 ${isActive('/contact') ? 'text-[#1F6F5E]' : 'text-[#4A5A58] hover:text-[#1F6F5E]'
                                    }`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Contact
                                <span className={`absolute bottom-0 left-0 h-px bg-[#1F6F5E] transition-all duration-300 rounded-full ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                            </Link>
                        </nav>

                        {/* Mobile: Menu Only */}
                        <div className="md:hidden flex items-center">
                            {/* Mobile menu button */}
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="p-2 text-[#1F6F5E] hover:bg-[#E6F2EF] rounded-lg transition-colors"
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    {mobileOpen && (
                        <div className="md:hidden border-t border-[#1F6F5E]/10 py-3 space-y-1">
                            {/* Home - Mobile */}
                            <Link
                                to="/"
                                onClick={handleHomeClick}
                                className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${isActive('/') ? 'text-[#1F6F5E] bg-[#F6F8F7]' : 'text-[#4A5A58] hover:text-[#1F6F5E] hover:bg-[#F6F8F7]'
                                    }`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Home
                            </Link>

                            {/* Our Activities - Mobile */}
                            <button
                                onClick={() => scrollToSection('activities-section')}
                                className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-colors cursor-pointer ${isActive('/', 'activities-section') ? 'text-[#1F6F5E] bg-[#F6F8F7]' : 'text-[#4A5A58] hover:text-[#1F6F5E] hover:bg-[#F6F8F7]'
                                    }`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Our Activities
                            </button>

                            {/* Gallery - Mobile */}
                            <button
                                onClick={() => scrollToSection('gallery-section')}
                                className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-colors cursor-pointer ${isActive('/', 'gallery-section') ? 'text-[#1F6F5E] bg-[#F6F8F7]' : 'text-[#4A5A58] hover:text-[#1F6F5E] hover:bg-[#F6F8F7]'
                                    }`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Gallery
                            </button>

                            {/* About - Mobile */}
                            <Link
                                to="/about"
                                onClick={handleAboutClick}
                                className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${isActive('/about') ? 'text-[#1F6F5E] bg-[#F6F8F7]' : 'text-[#4A5A58] hover:text-[#1F6F5E] hover:bg-[#F6F8F7]'
                                    }`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                About
                            </Link>

                            {/* Contact - Mobile */}
                            <Link
                                to="/contact"
                                onClick={handleContactClick}
                                className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${isActive('/contact') ? 'text-[#1F6F5E] bg-[#F6F8F7]' : 'text-[#4A5A58] hover:text-[#1F6F5E] hover:bg-[#F6F8F7]'
                                    }`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Contact
                            </Link>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};

export default NavBar;