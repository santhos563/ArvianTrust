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


        </div>
    )
}

export default HomeMain;
