import HeroImage from "../../assets/heroImage.jpg";
import Activities from "./Activities";
import Gallery from "./Gallery";
import Donation from "./JoinOurMission";

const HomeMain = () => {
    return (
        <div className="home-main bg-white w-full flex flex-col items-center justify-center">
            {/* <NavBar /> */}
            <section className="w-[99%] mb-20 bg-[#1f6f5e] flex flex-col md:flex-row items-center gap-10 md:gap-[10%] px-[5%] md:px-[10%] py-10 pt-20">
                <div className="flex flex-col gap-8 flex-1 min-w-[250px] max-w-[600px]">
                    <p style={{ fontFamily: "Playfair Display, serif" }} className="text-white text-[40px] md:text-[60px] font-bold leading-10 md:leading-15 ">
                        Helping Children
                        Grow Higher Through Education
                    </p>
                    <p className="text-[18px] md:text-[20px] text-white">
                        At Arivan Trust, we believe education is the ladder to a brighter future. We support underprivileged and orphaned children with books, stationery, school uniforms, nutritious meals, and festival clothes — giving them everything they need to learn, grow, and reach their highest potential.                    </p>
                    <nav className="z-10 flex gap-5">
                        <button className="bg-[#284e47] text-white px-6 py-3 rounded-[8px] hover:cursor-pointer hover:bg-[#0f3d35] hover:-translate-y-1 mt-4 transition-transform duration-400">Learn more</button>
                        <button className="bg-white text-[#104037] px-6 py-3 rounded-[8px] hover:cursor-pointer mt-4 hover:-translate-y-1 transition-transform duration-400">Get involved</button>
                    </nav>
                </div>

                <div className="w-full lg:w-[45%] flex justify-center  relative">
                    <div className="absolute inset-0 bg-[#1b6253] rounded-[40px] transform rotate-3 scale-105 transition-transform duration-500 hover:rotate-6"></div>
                    <img src={HeroImage} alt="Eco Packaging" className=" w-full h-auto max-w-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out relative rounded-2xl" />
                </div>
            </section>

            <Activities />
            <Gallery />
            <Donation />
        </div>
    )
}

export default HomeMain;