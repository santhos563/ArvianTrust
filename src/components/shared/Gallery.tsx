import { useTranslation } from 'react-i18next';
import gallery1 from "../../assets/image 9.png";
import gallery2 from "../../assets/image 13.jpeg";
import gallery3 from "../../assets/image 12.jpeg";
import gallery4 from "../../assets/image 10.jpeg";
import gallery5 from "../../assets/image 11.jpeg";
import gallery6 from "../../assets/imagg 14.jpeg";

export function Gallery() {
    const { t } = useTranslation();


    return (
        <section id="gallery-section" className="py-20 bg-[#F6F8F7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl md:text-4xl font-bold text-[#1F6F5E] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        {t('gallery.title')}
                    </h2>
                    <div className="w-24 h-1 bg-[#2E8B75] mx-auto mb-6"></div>
                    <p
                        className="text-lg text-[#5A6A68] max-w-3xl mx-auto"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        {t('gallery.description')}
                    </p>
                </div>

                {/* Masonry/Gallery Grid with scattered layout */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
                    {/* Image 1 - Large (top left) */}
                    <div className="col-span-2 row-span-2 md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src={gallery4}
                            alt={t('gallery.images.serving_food')}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Image 2 - Medium (top right) */}
                    <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-2xl shadow-lg transform translate-y-4 md:translate-y-0">
                        <img
                            src={gallery1}
                            alt={t('gallery.images.teaching')}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Image 3 - Small (middle row, right side) */}
                    <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-2xl shadow-lg transform -translate-y-2 md:translate-y-0">
                        <img
                            src={gallery2}
                            alt={t('gallery.images.receiving_clothes')}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Image 4 - Medium (middle row, left side) */}
                    <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-2xl shadow-lg transform -translate-x-2 md:translate-x-0">
                        <img
                            src={gallery3}
                            alt={t('gallery.images.elderly_care')}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Image 5 - Medium (middle row, center) */}
                    <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-2xl shadow-lg z-10 transform scale-105 md:scale-100">
                        <img
                            src={gallery5}
                            alt={t('gallery.images.distributing_books')}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Image 6 - Medium (bottom row, left) */}
                    <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-2xl shadow-lg transform translate-y-2 md:translate-y-0">
                        <img
                            src={gallery6}
                            alt={t('gallery.images.children_playing')}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Image 7 - Medium (bottom row, center) */}
                    {/* You can add another image here if needed */}
                </div>

                {/* Bottom Quote */}
                    <div className="mt-12 text-center">
                        <p className="text-[#5A6A68] max-w-2xl mx-auto italic text-lg">
                            "{t('gallery.quote')}"
                        </p>
                    </div>
            </div>
        </section>
    );
}