<<<<<<< HEAD
import { Activities } from "../../components/shared/Activities";
import { Gallery } from "../../components/shared/Gallery";
// import { DonateSection } from "../../components/shared/DonateSection";
import { Hero } from "../../components/shared/Hero";

const HomeMain = () => {
    return (
        <div className="home-main w-full">


            <Hero />
            {/* Activities Section - From your design files */}
            <Activities />

            {/* Gallery Section - From your design files */}
            <Gallery />

            {/* Donate Section - From your design files */}
            {/* <div id="donate-section">
                <DonateSection />
            </div> */}


=======
import NavBar from "../../components/shared/NavBar";
import HeroImage from "../../assets/heroImage.jpg";
const HomeMain = () => {
    return (
        <div className="home-main w-full">
            {/* <NavBar /> */}
            <section className="w-full mb-50 bg-[#1f6f5e] flex flex-col md:flex-row items-center gap-10 md:gap-[10%] px-[5%] md:px-[10%] py-10">
                <div className="flex flex-col gap-8 flex-1 min-w-[250px] max-w-[600px]">
                    <p style={{ fontFamily: "Playfair Display, serif" }} className="text-white text-[40px] md:text-[60px] font-bold leading-10 md:leading-20">
                        Empowering
                        Education,
                        Enriching Lives
                    </p>
                    <p className="text-[18px] md:text-[20px] text-white">
                        Supporting underprivileged and parent-less students with educational assistance, school uniforms, and essential learning materials.
                    </p>
                    <nav className="z-10 flex gap-5">
                        <button className="bg-[#284e47] text-white px-6 py-3 rounded-[8px] hover:cursor-pointer hover:bg-[#0f3d35] hover:-translate-y-1 mt-4 transition-transform duration-400">Learn more</button>
                        <button className="bg-white text-[#104037] px-6 py-3 rounded-[8px] hover:cursor-pointer mt-4 hover:-translate-y-1 transition-transform duration-400">Get involved</button>
                    </nav>
                </div>
                <div className="flex-1 flex justify-center items-center min-w-[220px] max-w-[450px] w-full md:w-[95%] h-auto aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden hover:scale-108 transition-transform duration-400">
                    <img src={HeroImage} alt="Hero" className="w-full h-full object-cover max-h-[320px] md:max-h-[400px]" />
                </div>
            </section>
>>>>>>> 8dab6d5449b24aff156a556c78adca3579567237
        </div>
    )
}

export default HomeMain;