import logo from "../../assets/logo.jpeg";
import {
    Mail, MapPin, Heart
} from "lucide-react";
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
                    <nav>

                        <h3 style={{ fontFamily: "Playfair Display, serif" }} className="text-white text-xl font-bold mb-4">Contact</h3>
                        <ul className="flex flex-col gap-3">
                            <li className="flex items-center gap-2 text-lg"><Mail size={20} /> info@arivantrust.org</li>
                            <li className="flex items-center gap-2 text-lg"><MapPin size={20} /> Tamil Nadu, India</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="px-10 max-w-6xl mx-auto pt-6 text-center flex justify-between text-[#b6e0d3] text-[16px]">
                <p>
                    © 2026 Arivan Trust. All Rights Reserved.
                </p>
                <p>Developed with ❤️ by Arivan Trust</p>
            </div>
        </footer>
    );
};

export default Footer;
