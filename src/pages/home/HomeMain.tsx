import { useTranslation } from 'react-i18next';
import { Activities } from "../../components/shared/Activities";
import { Gallery } from "../../components/shared/Gallery";
import { Hero } from "../../components/shared/Hero";
// import LanguageSwitcher from "../../components/shared/LanguageSwitcher";

const HomeMain = () => {
    const { t } = useTranslation();

    return (
        <div className="home-main w-full">
            {/* <LanguageSwitcher /> */}
            <Hero />
            
            {/* Activities Section */}
            <section className="activities-section py-16">
                <Activities />
            </section>

            {/* Gallery Section */}
            <section className="gallery-section py-16 bg-gray-50">
                <Gallery />
            </section>
        </div>
    )
}

export default HomeMain;