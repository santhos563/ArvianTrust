import logo from "../../assets/logo.jpeg";
import { Heart, Menu } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <main className="w-full sticky top-0 z-50 border-b border-green-100 ">

            <p className="w-full text-center bg-[#0f3d35]  py-1 text-transform uppercase text-[11px] text-gray-300 tracking-widest">
                Registered Charitable Trust · Tamil Nadu, India·Supporting underprivileged children through education
            </p>
            <main className="py-3 px-[5%] md:px-[10%] bg-white w-full">
                <div className="flex justify-between items-center w-full">
                    <section className="flex gap-4 items-center ">
                        <img src={logo} alt="logo" className="w-[56px] h-[56px]" />
                        <nav className="leading-5">
                            <h1 style={{ fontFamily: "Playfair Display, serif" }} className="text-[#1f6f5e] text-[20px] font-bold">ARIVAN TRUST</h1>
                            <p className="text-[#5a6a68] text-[12px] font-medium">Empowering Education, Enriching Lives</p>
                        </nav>
                    </section>
                    <nav className="hidden md:flex gap-8 items-center">
                        <Link to="/" className=" text-[16px] hover:text-[#1f6f5e] transition-transform duration-400 font-medium">Home</Link>
                        <Link to="/about" className=" text-[16px] hover:text-[#1f6f5e] transition-transform duration-400 font-medium">About</Link>
                        <Link to="/contact" className=" text-[16px] hover:text-[#1f6f5e] transition-transform duration-400 font-medium">Contact</Link>
                        <a href="#donate-section" className="bg-[#d67b5a] text-white px-6 py-2.5 rounded-full hover:bg-[#bf694d] transition-all duration-300 font-semibold flex items-center gap-2 text-[16px] shadow-sm">
                            <Heart size={14} />
                            Donate
                        </a>
                    </nav>
                    <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Open menu">
                        <Menu size={32} />
                    </button>
                </div>
                {open && (
                    <nav className="items-center flex flex-col gap-4 mt-3 md:hidden bg-white rounded shadow px-4 py-3 animate-fade-in z-50">
                        <Link to="/" className="text-[16px] hover:text-[#1f6f5e] font-medium" onClick={() => setOpen(false)}>Home</Link>
                        <Link to="/about" className="text-[16px] hover:text-[#1f6f5e] font-medium" onClick={() => setOpen(false)}>About</Link>
                        <Link to="/contact" className="text-[16px] hover:text-[#1f6f5e] font-medium" onClick={() => setOpen(false)}>Contact</Link>
                        <a href="#donate-section" className="bg-[#d67b5a] text-white px-6 py-3 rounded-full hover:bg-[#bf694d] transition-all duration-300 font-semibold flex items-center justify-center gap-2 text-[16px] shadow-sm mt-2" onClick={() => setOpen(false)}>
                            <Heart size={14} />
                            Donate
                        </a>
                    </nav>
                )}
            </main>
        </main>

    );
};

export default NavBar;





