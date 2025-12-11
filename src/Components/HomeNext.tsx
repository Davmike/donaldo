import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import thumb from "../../public/assets/thumbtack.png"
import thumbBlue from "../../public/assets/thumbtackBlue.png"
import vector from "../../public/assets/Vector 1.png"
import { useLanguage } from "../contexts/LanguageContext";

function HomeNext() {
    const { t } = useLanguage();

    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(0);


    const cards = [
        {
            id: 1,
            title: t.homenext.otherPrograms,
            color: 'bg-[#FFD472]',
            textColor: 'text-orange-500',
            buttonColor: "#F67524",
            path: "/otherProgram",
            img: thumb
        },
        {
            id: 2,
            title: t.homenext.heroes,
            color: 'bg-[#B4C4E5]',
            textColor: 'text-blue-700',
            buttonColor: "#1554A4",
            path: "/heros",
            img: thumbBlue
        },
        {
            id: 3,
            title: t.homenext.gallery,
            color: 'bg-[#FFD472]',
            textColor: 'text-orange-500',
            buttonColor: "#F67524",
            path: "/gallery",
            img: thumb
        },
        {
            id: 4,
            title: t.homenext.menu,
            color: 'bg-[#B4C4E5]',
            textColor: 'text-blue-700',
            buttonColor: "#1554A4",
            path: "/menu",
            img: thumbBlue
        }
    ];


    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="min-h-screen w-full bg-linear-to-br px-4 py-16 md:py-24 overflow-hidden text-guge">
            <div className="max-w-6xl mx-auto">
                <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute top-40 right-20 w-32 h-32 bg-pink-200 rounded-full opacity-40 blur-2xl"></div>
                <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-blue-100 rounded-full opacity-40 blur-xl"></div>

                <div className="relative z-10 overflow-visible">
                    <div className="mb-12 md:mb-16 cursor-pointer relative max-w-[854px] mx-auto">
                        <div className=" bg-linear-to-br max-w-[854px] mx-auto bg-[#1554A4] rounded-3xl p-6 md:p-8 shadow-xl overflow-hidden">
                            {/* ვექტორი გვირგვინივით */}
                            <img
                                src={vector}
                                alt="Vector"
                                className="absolute -top-11 md:-top-13 -right-11 md:-right-13 w-20 h-20 md:w-24 md:h-24 transform rotate-15 z-20"
                            />

                            <div className=" z-10 cursor-pointer">
                                <div className="w-full h-40 md:h-48 bg-gray-100 rounded-2xl mb-6 flex items-center justify-center">
                                    <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 rounded-2xl opacity-40"></div>
                                </div>

                                <div onClick={() => navigate("/birthdayPrograms")} className="bg-[#B4C4E5] rounded-full py-3 md:py-4 px-6 text-center cursor pointer">
                                    <p className="text-[#1554A4] text-[20px] md:text-[24px] font-semibold text-sm md:text-base">
                                        {t.homenext.birthdayPrograms}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                            ჩვენი სერვისები
                        </h2> */}

                        <div className="hidden md:grid grid-cols-4 gap-6  max-w-[1108px] cursor-pointer relative">
                            {cards.map((card) => (
                                <div
                                    key={card.id}
                                    className={`${card.color} relative rounded-2xl p-6 shadow-lg  border border-black`}
                                >
                                    <div className="absolute -top-5 -right-5 w-10 h-10">
                                        <img src={card.img} alt="" />
                                    </div>

                                    <div className="w-full h-24 bg-white rounded-xl mb-4 opacity-60"></div>

                                    <button
                                        onClick={() => navigate(card.path)}
                                        style={{ backgroundColor: card.buttonColor }}
                                        className={`w-full ${card.textColor.replace('text', 'bg')} text-white font-semibold py-3 text-[20px] rounded-full shadow-md hover:shadow-lg hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer`}
                                    >
                                        {card.title}
                                    </button>

                                </div>
                            ))}
                        </div>

                        <div className="md:hidden">
                            <div className="relative">
                                <div className={`${cards[currentSlide].color} rounded-2xl p-6 shadow-lg border-2 border-yellow-400 transition-all duration-300`}>
                                    {/* ფოტოს relative parent უკვე ქარდზეა */}
                                    <div className="absolute -top-5 -right-5 w-10 h-10">
                                        <img src={cards[currentSlide].img} alt={cards[currentSlide].title} className="w-full h-full object-contain" />
                                    </div>

                                    <div className="w-full h-32 bg-white rounded-xl mb-4 opacity-60"></div>

                                    <button style={{ backgroundColor: cards[currentSlide].buttonColor }}
                                        className={`w-full ${cards[currentSlide].textColor.replace('text', 'bg')} text-white text-[20px] font-normal md:text-[28px] py-3 rounded-full hover:opacity-90 transition-opacity`}>
                                        {cards[currentSlide].title}
                                    </button>
                                </div>

                                <div className="flex items-center justify-between mt-6 gap-4">
                                    <button
                                        onClick={handlePrev}
                                        className="shrink-0 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200"
                                    >
                                        <ChevronLeft size={24} className="text-gray-700" />
                                    </button>

                                    <div className="flex gap-2 justify-center flex-1">
                                        {cards.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentSlide(idx)}
                                                className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={handleNext}
                                        className="shrink-0 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200"
                                    >
                                        <ChevronRight size={24} className="text-gray-700" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default HomeNext;
