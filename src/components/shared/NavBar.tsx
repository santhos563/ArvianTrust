import logo from "../../assets/logo.jpeg";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <main className="py-3 px-[5%] md:px-[10%] bg-white w-full">
            <div className="flex justify-between items-center w-full">
                <section className="flex gap-4 items-center ">
                    <img src={logo} alt="logo" className="w-[56px] h-[56px]" />
                    <nav className="leading-5">
                        <h1 style={{ fontFamily: "Playfair Display, serif" }} className="text-[#1f6f5e] text-[20px] font-bold">ARIVAN TRUST</h1>
                        <p className="text-[#5a6a68] text-[12px] font-medium">Empowering Education, Enriching Lives</p>
                    </nav>
                </section>
                <nav className="hidden md:flex gap-8">
                    <Link to="/" className=" text-[16px] hover:text-[#1f6f5e] transition-transform duration-400 font-medium">Home</Link>
                    <Link to="/about" className=" text-[16px] hover:text-[#1f6f5e] transition-transform duration-400 font-medium">About</Link>
                    <Link to="/contact" className=" text-[16px] hover:text-[#1f6f5e] transition-transform duration-400 font-medium">Contact</Link>
                </nav>
                <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Open menu">
                    <Menu size={32} />
                </button>
            </div>
            {open && (
                <nav className="flex flex-col gap-4 mt-3 md:hidden bg-white rounded shadow px-4 py-3 animate-fade-in z-50">
                    <Link to="/" className="text-[16px] hover:text-[#1f6f5e] font-medium" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/about" className="text-[16px] hover:text-[#1f6f5e] font-medium" onClick={() => setOpen(false)}>About</Link>
                    <Link to="/contact" className="text-[16px] hover:text-[#1f6f5e] font-medium" onClick={() => setOpen(false)}>Contact</Link>
                </nav>
            )}
        </main>
    );
};

export default NavBar;





