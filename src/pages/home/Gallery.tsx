
const Gallery = () => {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
            alt: "Volunteers with food supplies",
            className: "md:col-span-2 md:row-span-2",
        },
        {
            url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop",
            alt: "Volunteer teaching students",
            className: "md:col-span-1 md:row-span-1",
        },
        {
            url: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
            alt: "Community support",
            className: "md:col-span-1 md:row-span-1",
        },
        {
            url: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2070&auto=format&fit=crop",
            alt: "Children playing together",
            className: "md:col-span-1 md:row-span-1",
        },
        {
            url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop",
            alt: "Knowledge sharing",
            className: "md:col-span-1 md:row-span-1",
        },
        {
            url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop",
            alt: "Happy moments",
            className: "md:col-span-1 md:row-span-1",
        },
        {
            url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",
            alt: "Collective efforts",
            className: "md:col-span-1 md:row-span-1",
        },
        {
            url: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=2070&auto=format&fit=crop",
            alt: "Unity and hope",
            className: "md:col-span-1 md:row-span-1",
        },
        {
            url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop",
            alt: "Building future",
            className: "md:col-span-1 md:row-span-1",
        },
    ];

    return (
        <section className="w-full py-20 px-[5%] md:px-[10%] bg-[#f6f8f7] flex flex-col items-center gap-12">
            {/* Header */}
            <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
                <h2 style={{ fontFamily: "Playfair Display, serif" }} className="text-[#104037] text-4xl md:text-5xl font-bold">
                    Together We <span className="underline decoration-[#1f6f5e]/30 underline-offset-8">Make a Difference</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-4">
                    Every person contributes in their own way — with time, resources, skills, or simply a caring heart. Together, we create moments of joy and hope for those who need it most.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-2xl group ${image.className}`}
                    >
                        <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                            <span className="text-white text-sm font-medium">{image.alt}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Quote */}
            <div className="max-w-2xl text-center mt-8">
                <p className="text-gray-500 italic text-sm md:text-base leading-relaxed">
                    "Every person has something beautiful to give — their time, their skills, their love. Together, we create a world where everyone belongs."
                </p>
            </div>
        </section>
    );
};

export default Gallery;
