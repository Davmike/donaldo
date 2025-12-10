import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

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

const heroes: Hero[] = [
    {
        id: 1,
        name: 'პინოქიო',
        description: 'მრავალჟანრიანი გამოსახულება თავ...',
        fullDescription: [
            'ეროვნების სპეციალისტი, ჰაქერები ხუკერელ ხელოვო მეტწინების მის თევანდენი და ამისას',
            'სისხლების დემდელიხერიო", სისხლიერებ თიხსალეს აბლევის ნატევნელელი ისხელებელს, რომელიკ ართის სისხლროელის თელის მინძებიელებს ფინასის, რა იქრეს ერგევერის ქორკოცი',
            'შორენსი ერთიცების მადევიალუხრი კორპრიელი არმეკვა დიებსის" თქბროს, საბოლა მადწევრეს მორლაპწს ეკროთს ეთიიხების ერთისხოდეს შედებელობის.',
            'ყკიბილექრე მელოეხისი", მხსიარკოდიი შესოსკელელრნე დიელესოტედის ვორლიებელის შადებოხოლობისი',
            'ოლსსეხეხრე მელოსისფელო; კოლოლოძოოროხოტოლი დეოთოსოდასა პოროთოსია, პკკოჰებს და სხვა ვროთილების ელეროელდკოროსი.'
        ],
        price: 50,
        image: 'https://via.placeholder.com/200x300/4169E1/FFFFFF?text=Pinocchio'
    },
    {
        id: 2,
        name: 'ბიენადინი',
        description: 'მრავალჟანრიანი გამოსახულება თავ...',
        fullDescription: [
            'დიველელების სარელესისანი, ჰექიხოთილა გალიარებელი ხნელებ მეგიმბორელს მის დიოთურელის და ამეხისა',
            'დისხლიწის ყენდიხაროდისინი", მისხხოლიპს მაბთაინო გალივის მათშელენს ხამეხიდელსო, ხოზფელო სკოც სისხხორსისტო თელის მონქგობლებს მედორებთო, რა კალია მხალეხი ჰოდიოქელი'
        ],
        price: 50,
        originalPrice: 60,
        discount: '-20 %',
        image: 'https://via.placeholder.com/200x300/DC143C/FFFFFF?text=Spider-Man'
    },
    {
        id: 3,
        name: 'პინოქიო',
        description: 'მრავალჟანრიანი გამოსახულება თავ...',
        fullDescription: [
            'დიველელების სარელესისანი, ჰექიხოთილა გალიარებელი ხნელებ მეგიმბორელს მის დიოთურელის და ამეხისა'
        ],
        price: 50,
        image: 'https://via.placeholder.com/200x300/FFD700/000000?text=Iron+Man'
    },
    {
        id: 4,
        name: 'პინოქიო',
        description: 'მრავალჟანრიანი გამოსახულება თავ...',
        fullDescription: [
            'დიველელების სარელესისანი, ჰექიხოთილა გალიარებელი ხნელებ მეგიმბორელს მის დიოთურელის და ამეხისა'
        ],
        price: 50,
        image: 'https://via.placeholder.com/200x300/000000/FFFFFF?text=Batman'
    },
    {
        id: 5,
        name: 'პინოქიო',
        description: 'მრავალჟანრიანი გამოსახულება თავ...',
        fullDescription: [
            'დიველელების სარელესისანი, ჰექიხოთილა გალიარებელი ხნელებ მეგიმბორელს მის დიოთურელის და ამეხისა'
        ],
        price: 50,
        image: 'https://via.placeholder.com/200x300/0066CC/FFFFFF?text=Sonic'
    }
];

function Heros({ addToCart, cartItems }: any) {
    const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

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
                        <span className="text-lg text-guge" onClick={handlePrevious}>უკან დაბრუნება</span>
                    </button>

                    <div className="rounded-3xl border text-guge">
                        <div className="bg-[#1554A4] rounded-3xl overflow-hidden">
                            <div className="flex flex-col lg:flex-row items-start gap-8 p-8 lg:p-12">
                                <div className="w-full lg:w-1/3 flex justify-center">
                                    <div className="w-48 h-72 bg-white/10 rounded-2xl flex items-center justify-center">
                                        {/* <div className="text-white text-center text-sm">
                                            {selectedHero.name}
                                        </div> */}
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
                                            <p className="font-semibold text-[16px] text-[#B4C4E5]">აღწერება მოიცავს:</p>
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
                                            ფასი: {selectedHero.price}₾
                                        </div>
                                        <div className="flex gap-3">
                                            <button onClick={handleBack} className="px-6 py-3 text-white rounded-full transition-colors border">
                                                უკან დაბრუნება
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
                                                    ? "დამატებულია"
                                                    : "დაჯავშნა"}
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
                        <span className="text-[#1554A4] font-medium">გასვლითი ლოკაცია</span>
                        <button className="bg-[#F67524] text-white px-3 py-4 rounded-full font-medium hover:bg-[#E88239] transition-colors">
                            ადგილზე
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
                                                <div className="relative h-64 bg-white/10 flex items-end justify-center p-4">
                                                    {hero.discount && (
                                                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                                            {hero.discount}
                                                        </div>
                                                    )}
                                                    {/* <div className="text-white text-center text-sm">
                                                        {hero.name}
                                                    </div> */}
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
                                                        სრულად
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
                                    <div className="relative h-80 bg-white/10 flex items-end justify-center p-4">
                                        {heroes[currentIndex].discount && (
                                            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                                {heroes[currentIndex].discount}
                                            </div>
                                        )}
                                        {/* <div className="text-white text-center">
                                            {heroes[currentIndex].name}
                                        </div> */}
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
