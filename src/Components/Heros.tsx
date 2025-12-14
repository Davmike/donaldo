import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from "../contexts/LanguageContext";
import spiderman from "../../public/assets/spiderman.png"
import ironMan from "../../public/assets/ironman.png"
import batman from "../../public/assets/batman.png"
import steve from "../../public/assets/steve.png"
import sonic from "../../public/assets/sonic.png"
import miki from "../../public/assets/miki.png"
import mini from "../../public/assets/mini.png"
import joze from "../../public/assets/joze.png"
import pepa from "../../public/assets/pepa.png"
import robot from "../../public/assets/robor.png"
import panda from "../../public/assets/panda.png"
import pinkciyvi from "../../public/assets/SquirrelPink.png"
import blueciyvi from "../../public/assets/SquirrelBlue.png"
import datunia from "../../public/assets/bear.png"

interface Hero {
    id: number;
    name: string;
    description: string;
    fullDescription: string[];
    price: number;
    originalPrice?: number;
    discount?: string;
    image: string;
}


function Heros({ addToCart, cartItems }: any) {
    const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const { t } = useLanguage();

    const heroes: Hero[] = [
        { id: 1, name: t.hero1.name, description: t.hero1.description, fullDescription: t.hero1.fullDescription, price: 40, image: spiderman },
        { id: 2, name: t.hero2.name, description: t.hero2.description, fullDescription: t.hero2.fullDescription, price: 35, image: ironMan },
        { id: 3, name: t.hero3.name, description: t.hero3.description, fullDescription: t.hero3.fullDescription, price: 35, image: batman },
        { id: 4, name: t.hero4.name, description: t.hero4.description, fullDescription: t.hero4.fullDescription, price: 60, image: steve },
        { id: 5, name: t.hero5.name, description: t.hero5.description, fullDescription: t.hero5.fullDescription, price: 50, image: joze },
        { id: 6, name: t.hero6.name, description: t.hero6.description, fullDescription: t.hero6.fullDescription, price: 60, image: sonic },
        { id: 7, name: t.hero7.name, description: t.hero7.description, fullDescription: t.hero7.fullDescription, price: 35, image: miki },
        { id: 8, name: t.hero8.name, description: t.hero8.description, fullDescription: t.hero8.fullDescription, price: 35, image: mini },
        { id: 9, name: t.hero9.name, description: t.hero9.description, fullDescription: t.hero9.fullDescription, price: 50, image: joze },
        { id: 10, name: t.hero10.name, description: t.hero10.description, fullDescription: t.hero10.fullDescription, price: 50, image: pepa },
        { id: 11, name: t.hero11.name, description: t.hero11.description, fullDescription: t.hero11.fullDescription, price: 100, image: robot },
        { id: 12, name: t.hero12.name, description: t.hero12.description, fullDescription: t.hero12.fullDescription, price: 70, image: panda },
        { id: 13, name: t.hero13.name, description: t.hero13.description, fullDescription: t.hero13.fullDescription, price: 60, image: pinkciyvi },
        { id: 14, name: t.hero14.name, description: t.hero14.description, fullDescription: t.hero14.fullDescription, price: 60, image: blueciyvi },
        { id: 15, name: t.hero15.name, description: t.hero15.description, fullDescription: t.hero15.fullDescription, price: 70, image: datunia },
    ];


    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : heroes.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < heroes.length - 1 ? prev + 1 : 0));
    };

    const handleSelectHero = (hero: Hero) => {
        setSelectedHero(hero);
    };

    const handleBack = () => {
        setSelectedHero(null);
    };

    if (selectedHero) {
        return (
            <div className="min-h-screen py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-ashesha text-4xl lg:text-5xl font-bold text-center mb-8 text-[#F67524]">
                        gmirebi
                    </h1>
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 text-[#4169E1] mb-8 hover:opacity-80 transition-opacity"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-lg text-guge" onClick={handlePrevious}>{t.hero1.back}</span>
                    </button>

                    <div className="rounded-3xl border text-guge">
                        <div className="bg-[#1554A4] rounded-3xl overflow-hidden">
                            <div className="flex flex-col lg:flex-row items-start gap-8 p-8 lg:p-12">
                                <div className="w-full lg:w-1/3 flex justify-center">
                                    <div className="w-48 h-72 bg-white/10 rounded-2xl flex items-start justify-center p-2">
                                        <img
                                            src={selectedHero.image}
                                            className="mt-2 h-64 w-40 object-contain rounded-xl"
                                        />
                                    </div>

                                </div>

                                <div className="w-full lg:w-2/3 text-white">
                                    <h2 className="text-3xl lg:text-3xl font-bold mb-6">
                                        {selectedHero.name}
                                    </h2>

                                    <div className="space-y-4 mb-8">
                                        <p className="text-[16px] lg:text-lg leading-relaxed text-[#B4C4E5]">
                                            {selectedHero.fullDescription[0]}
                                        </p>
                                        <div className="space-y-3">
                                            <p className="font-semibold text-[16px] text-[#B4C4E5]">{t.hero1.agwera}:</p>
                                            <ul className="space-y-2 list-none">
                                                {selectedHero.fullDescription.slice(1).map((desc, index) => (
                                                    <li key={index} className="flex items-start gap-2">
                                                        <span className="text-[#F8934A] mt-1">•</span>
                                                        <span className="text-sm lg:text-base leading-relaxed text-[#B4C4E5]">
                                                            {desc}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                                        <div className="text-2xl lg:text-3xl font-bold text-[#FFD472]">
                                            {t.hero1.price}: {selectedHero.price}₾
                                        </div>
                                        <div className="flex gap-3">
                                            <button onClick={handleBack} className="px-6 py-3 text-white rounded-full transition-colors border">
                                                {t.hero1.back}
                                            </button>
                                            <button
                                                onClick={() =>
                                                    addToCart({
                                                        id: selectedHero.id,
                                                        name: selectedHero.name,
                                                        price: selectedHero.price,
                                                        originalPrice: selectedHero.originalPrice,
                                                        image: selectedHero.image,
                                                        description: selectedHero.description,
                                                        section: "Heroes"

                                                    })
                                                }
                                                disabled={cartItems.some(
                                                    (item: { id: number; section: string; }) => item.id === selectedHero.id && item.section === "Heroes"
                                                )}
                                                className={`
        px-8 py-3 border border-black rounded-full font-semibold flex items-center gap-2
        ${cartItems.some(
                                                    (item: { id: number; section: string; }) => item.id === selectedHero.id && item.section === "Heroes"
                                                )
                                                        ? "bg-gray-400 text-white cursor-not-allowed"
                                                        : "bg-[#F67524] text-white hover:bg-[#E88239] cursor-pointer"
                                                    }
    `}
                                            >
                                                {cartItems.some(
                                                    (item: { id: number; section: string; }) => item.id === selectedHero.id && item.section === "Heroes"
                                                )
                                                    ? t.hero1.added
                                                    : t.hero1.bookNow}
                                            </button>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-8 px-4 text-guge">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-ashesha text-4xl lg:text-5xl font-bold text-center mb-8 text-[#F67524]">
                    gmirebi
                </h1>

                <div className="flex justify-center items-center gap-4 mb-12">
                    <div className="flex items-center gap-3 bg-white rounded-full px-3 py-2 border text-guge text-[20px] md:text-[24px]">
                        <span className="text-[#1554A4] font-medium">{t.hero1.gasvla}</span>
                        <button className="bg-[#F67524] text-white px-3 py-4 rounded-full font-medium hover:bg-[#E88239] transition-colors">
                            {t.hero1.adgilze}
                        </button>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                            <button
                                onClick={handlePrevious}
                                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#F8934A] hover:text-[#F8934A] transition-colors bg-white"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#F8934A] hover:text-[#F8934A] transition-colors bg-white"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="overflow-hidden">
                            <div
                                className="flex gap-6 transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / 4)}%)`
                                }}
                            >
                                {heroes.map((hero) => (
                                    <div
                                        key={hero.id}
                                        className="shrink-0 w-1/4"
                                    >
                                        <div className="rounded-3xl border">
                                            <div className="bg-[#1554A4] rounded-3xl overflow-hidden">
                                                <div className="relative h-64 bg-white/10 flex items-start justify-center p-4">
                                                    <img
                                                        src={hero.image}
                                                        alt=""
                                                        className="mt-4 h-48 w-48 object-contain"
                                                    />
                                                    {hero.discount && (
                                                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                                            {hero.discount}
                                                        </div>
                                                    )}
                                                </div>


                                                <div className="p-6">
                                                    <h3 className="text-xl font-bold mb-2 text-[#FFD472]">{hero.name}</h3>
                                                    <p className="text-sm mb-4 line-clamp-2 text-[#B4C4E5]">
                                                        {hero.description}

                                                    </p>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center gap-2">
                                                            {hero.originalPrice && (
                                                                <span className="text-sm line-through opacity-70 text-[#FF2C2C]">
                                                                    {hero.originalPrice}₾
                                                                </span>
                                                            )}
                                                            <span className="text-2xl font-bold text-[#FFD472]">{hero.price}₾</span>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => handleSelectHero(hero)}
                                                        className="w-full bg-[#F67524] text-white py-3 text-[20px] rounded-full font-semibold hover:bg-[#E88239] transition-colors"
                                                    >
                                                        {t.hero1.viewAll}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            {/* <button className="flex items-center gap-2 text-[#4169E1] font-medium hover:opacity-80 transition-opacity">
                                <span>ყველას ნახვა</span>
                                <ChevronRight className="w-5 h-5" />
                            </button> */}
                        </div>
                    </div>
                </div>

                <div className="lg:hidden">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-between w-full mb-6 px-4">
                            <button
                                onClick={handlePrevious}
                                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:text-[#F8934A] transition-colors bg-white"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:text-[#F8934A] transition-colors bg-white"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="w-full max-w-sm">
                            <div className="border rounded-3xl">
                                <div className="bg-[#1554A4] rounded-3xl overflow-hidden">
                                    <div className="relative h-80 bg-white/10 flex items-start justify-center p-4">
                                        <img
                                            src={heroes[currentIndex].image}
                                            alt={heroes[currentIndex].name}
                                            className="mt-4 h-64 w-64 object-contain rounded-xl"
                                        />
                                        {heroes[currentIndex].discount && (
                                            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                                {heroes[currentIndex].discount}
                                            </div>
                                        )}
                                    </div>


                                    <div className="p-6">
                                        <h3 className="font-bold mb-2 text-[#FFD472] text-[24px]">
                                            {heroes[currentIndex].name}
                                        </h3>
                                        <p className="text-[16px] mb-4 line-clamp-2 text-[#B4C4E5]">
                                            {heroes[currentIndex].description}
                                        </p>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                {heroes[currentIndex].originalPrice && (
                                                    <span className="text-[18px] line-through opacity-70 text-[#FF2C2C]">
                                                        {heroes[currentIndex].originalPrice}₾
                                                    </span>
                                                )}
                                                <span className="text-2xl font-bold text-[#FFD472]">
                                                    {heroes[currentIndex].price}₾
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleSelectHero(heroes[currentIndex])}
                                            className="w-full bg-[#F67524] text-white py-3 text-[24px] rounded-full font-semibold hover:bg-[#E88239] transition-colors"
                                        >
                                            დამატება
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Heros;
