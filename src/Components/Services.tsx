import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Check, ShoppingCart } from 'lucide-react';
import { useLanguage } from "../contexts/LanguageContext";

interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
    originalPrice: string;
    discount: string;
    buttonText: string;
    color: 'yellow' | 'blue';
    details: string;
    benefits: string[];
    faq: string;
    faqAnswer: string;
    packages: Array<{
        name: string;
        discount?: string;
        period: string;
        price: string;
        originalPrice?: string;
        color: 'yellow' | 'blue';
    }>;
}



function Services({ addToCart, cartItems }: any) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const { t } = useLanguage();

    const services: Service[] = [
        {
            id: 1,
            title: t.service1.title,
            description: t.service1.description,
            image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg',
            price: '80₾',
            originalPrice: '80₾',
            discount: '-20%',
            buttonText: t.service1.button,
            color: 'yellow',
            details: t.service1.details,
            benefits: [...t.service1.benefits],
            faq: t.service1.faq,
            faqAnswer: t.service1.faqAnswer,
            packages: [
                { name: 'ექვსი ნიშიერი', discount: '-20%', period: '6 ღრმან', price: '15 ₾', originalPrice: '20 ₾', color: 'blue' },
                { name: 'ექვსი ღრმ, ნაწილი', discount: '-20%', period: '6 ღრმ, ნაწილი', price: '15 ₾', originalPrice: '20 ₾', color: 'yellow' },
            ],
        },
        {
            id: 2,
            title: t.service2.title,
            description: t.service2.description,
            image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg',
            price: '120₾',
            originalPrice: '150₾',
            discount: '-20%',
            buttonText: t.service2.button,
            color: 'blue',
            details: t.service2.details,
            benefits: [...t.service2.benefits],
            faq: t.service2.faq,
            faqAnswer: t.service2.faqAnswer,
            packages: [
                { name: 'ორი ნიშიერი', discount: '-20%', period: '2 სამენი', price: '25 ₾', originalPrice: '30 ₾', color: 'blue' },
                { name: 'ათი ღრმის კრეფი', period: '10 ღრმის კრეფი', price: 'XX ₾', color: 'yellow' },
            ],
        },
        {
            id: 3,
            title: t.service3.title,
            description: t.service3.description,
            image: 'https://images.pexels.com/photos/3307758/pexels-photo-3307758.jpeg',
            price: '200₾',
            originalPrice: '250₾',
            discount: '-20%',
            buttonText: t.service3.button,
            color: 'yellow',
            details: t.service3.details,
            benefits: [...t.service3.benefits],
            faq: t.service3.faq,
            faqAnswer: t.service3.faqAnswer,
            packages: [
                { name: 'კორპორატიული', discount: '-20%', period: 'კორპორატიული', price: '500 ₾', originalPrice: '600 ₾', color: 'blue' },
                { name: 'ექსკლუზივი', period: 'ექსკლუზივი', price: 'XX ₾', color: 'yellow' },
            ],
        },
        {
            id: 4,
            title: t.service4.title,
            description: t.service4.description,
            image: 'https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg',
            price: '300₾',
            originalPrice: '350₾',
            discount: '-20%',
            buttonText: t.service4.button,
            color: 'blue',
            details: t.service4.details,
            benefits: [...t.service4.benefits],
            faq: t.service4.faq,
            faqAnswer: t.service4.faqAnswer,
            packages: [
                { name: 'ენტერპრაიზ', discount: '-20%', period: 'ენტერპრაიზ', price: '1000 ₾', originalPrice: '1200 ₾', color: 'blue' },
                { name: 'კასტომ', period: 'კასტომ', price: 'კონტაქტი', color: 'yellow' },
            ],
        },
    ];


    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    };

    const handleServiceClick = (service: Service) => {
        setScrollPosition(window.scrollY);
        setSelectedService(service);
    };

    const handleBack = () => {
        setSelectedService(null);
        window.scrollTo(0, scrollPosition);
    };

    if (selectedService) {
        return (
            <section className="min-h-screen w-full px-4 py-8 md:py-16 text-guge" id='services'>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-ashesha text-[64px] font-bold text-[#F67524] mb-8 text-center">
                        {t.services.title}
                    </h1>
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 text-[#1554A4] text-[24px] font-normal mb-8 cursor-pointer hover:text-orange-700 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        {t.services.back}
                    </button>
                    <div className={`rounded-2xl p-4 md:p-6 mb-8 ${selectedService.color === 'yellow'
                        ? 'bg-[#FDEBC5]'
                        : 'bg-[#E0E4ED]'}`}>
                        <h3 className='text-[#1554A4] text-[24px] text-center font-normal'>{t.services.aboutService}</h3>
                        <p className="text-[#5C6983] text-[16px] md:text-base mt-2.5">
                            • {t.services.aboutServiceText1}<span className='text-[#F67524]'>{t.services.aboutServiceText2}</span>  <br />
                            • {t.services.aboutServiceText3}<span className='text-[#F67524]'>{t.services.aboutServiceText4}</span>
                        </p>
                    </div>

                    {/* <div
                        className="mb-8 overflow-x-auto scrollbar-hide"
                    >
                        <div
                            className="flex md:grid md:grid-cols-4 gap-4 px-1"
                            style={{ scrollSnapType: "x mandatory" }}
                        >
                            {selectedService.packages.map((pkg, idx) => (
                                <div
                                    key={idx}
                                    className={`min-w-[150px] md:min-w-0 flex-shrink-0 rounded-xl p-4 text-center scroll-snap-align-start ${pkg.color === "yellow"
                                        ? "bg-[#FFD472] text-yellow-900"
                                        : "bg-blue-400 text-blue-900"
                                        }`}
                                >
                                    {pkg.discount && (
                                        <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-2">
                                            {pkg.discount}
                                        </div>
                                    )}
                                    <p className="text-xs md:text-sm font-semibold mb-1">{pkg.period}</p>
                                    <p className="text-lg md:text-2xl font-bold mb-1">{pkg.price}</p>
                                    {pkg.originalPrice && (
                                        <p className="text-xs line-through opacity-70">{pkg.originalPrice}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div> */}


                    <div
                        className={`rounded-2xl p-6 md:p-8 mb-8 border border-black ${selectedService.color === 'yellow'
                            ? 'bg-[#FFD472]'
                            : 'bg-blue-200'
                            }`}
                    >
                        <h2 className="text-[24px] md:text-2xl font-bold mb-4 text-[#1554A4]">
                            {selectedService.details}
                        </h2>

                        <div className="w-full h-48 md:h-64 bg-white rounded-xl mb-6 opacity-60"></div>
                        <div className='bg-[#FDF7E9] p-5 rounded-2xl'>
                            <h3 className="text-lg md:text-xl font-bold mb-4 text-[#1554A4]">
                                {t.services.whatIncludes}
                            </h3>

                            <p className="text-[#56687F] mb-6 text-[16px] md:text-base">
                                {selectedService.faqAnswer}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {selectedService.benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                        <Check size={20} className="text-green-600 shrink-0 mt-1" />
                                        <span className="text-[#56687F] text-[16px] md:text-base">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <button onClick={handleBack} className={`flex-1 px-6 py-3 font-bold rounded-full cursor-pointer border-2 hover:bg-orange-50 transition-colors ${selectedService.color === 'yellow'
                                    ? 'text-[#F67524] border-[#F67524]'
                                    : 'text-[#1554A4] border-[#1554A4]'}`}>
                                    {t.services.back}
                                </button>
                                <button
                                    onClick={() =>
                                        addToCart({
                                            id: selectedService.id,
                                            name: selectedService.title,
                                            price: Number(selectedService.price.replace('₾', '').trim()),
                                            originalPrice: selectedService.originalPrice
                                                ? Number(selectedService.originalPrice.replace('₾', '').trim())
                                                : undefined,
                                            image: selectedService.image,
                                            section: "Service"
                                        })
                                    }
                                    disabled={cartItems.some(
                                        (i: { id: number; section: string; }) => i.id === selectedService.id && i.section === "Service"
                                    )}
                                    className={`
        flex-1 px-6 py-3 font-bold rounded-full cursor-pointer border border-black flex items-center justify-center gap-2
        ${cartItems.some(
                                        (i: { id: number; section: string; }) => i.id === selectedService.id && i.section === "Service"
                                    )
                                            ? "bg-gray-400 text-white cursor-not-allowed"
                                            : selectedService.color === "yellow"
                                                ? "bg-[#F67524] text-white hover:bg-orange-600"
                                                : "bg-[#1554A4] text-white hover:bg-blue-700"
                                        }
    `}
                                >
                                    <ShoppingCart size={18} />
                                    {cartItems.some(
                                        (i: { id: number; section: string; }) => i.id === selectedService.id && i.section === "Service"
                                    )
                                        ? t.services.added
                                        : t.services.bookNow}
                                </button>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen w-full px-4 py-16 md:py-24 overflow-hidden text-guge">
            <div className="max-w-6xl mx-auto">
                <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute top-40 right-20 w-32 h-32 bg-pink-200 rounded-full opacity-40 blur-2xl"></div>
                <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-blue-100 rounded-full opacity-40 blur-xl"></div>

                <h1 className="text-ashesha text-[64px] font-bold text-[#F67524] mb-12 md:mb-16 text-center">
                    servisebi
                </h1>

                <div className="hidden md:grid grid-cols-2 gap-6 relative z-10">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => handleServiceClick(service)}
                            className={`rounded-2xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border ${service.color === 'yellow'
                                ? 'bg-[#FFD472] border-black'
                                : 'bg-[#B4C4E5] border-black'
                                }`}
                        >
                            <div className="w-full h-32 bg-white rounded-xl mb-4 opacity-60"></div>

                            <div className="flex items-center justify-between mb-3">
                                <div className="bg-red-500 text-white text-[20px] font-bold px-2 py-1 rounded-full inline-block">
                                    {services[currentSlide].discount}
                                </div>
                                <span className="text-[16px] text-[#1554A4] cursor-pointer">{t.services.viewAll}→</span>
                            </div>

                            <p className="text-2xl font-bold mb-4 flex items-baseline gap-2">
                                <span className={service.color === 'yellow' ? 'text-yellow-900' : 'text-blue-900'}>
                                    {service.price}
                                </span>
                                <span className="text-[20px] line-through text-[#FF2C2C]">
                                    {services[currentSlide].originalPrice}
                                </span>
                            </p>

                            <button className={`w-full py-3 rounded-full font-bold text-white transition-all duration-300 cursor-pointer ${service.color === 'yellow'
                                ? 'bg-[#F67524] hover:bg-orange-600'
                                : 'bg-[#1554A4] hover:bg-blue-700'
                                }`}>
                                {service.description}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="md:hidden relative z-10">
                    <div className={`rounded-2xl p-6 border transition-all duration-300 ${services[currentSlide].color === 'yellow'
                        ? 'bg-[#FFD472] border-black'
                        : 'bg-[#B4C4E5] border-black'
                        }`}>
                        <div className="w-full h-40 bg-white rounded-xl mb-4 opacity-60"></div>

                        <div className="flex items-center justify-between" onClick={() => handleServiceClick(services[currentSlide])}>
                            <div className="bg-red-500 text-white text-[20px] font-bold px-2 py-1 rounded-full inline-block mb-2">
                                {services[currentSlide].discount}
                            </div>
                            <span className="text-[16px] text-[#1554A4] cursor-pointer">{t.services.viewAll}→</span>
                        </div>

                        <div className="flex items-baseline gap-2 mb-4">
                            <span className={`text-[30px] font-bold ${services[currentSlide].color === 'yellow'
                                ? 'text-[#1554A4]'
                                : 'text-blue-900'
                                }`}>
                                {services[currentSlide].price}
                            </span>
                            <span className="text-[20px] line-through text-[#FF2C2C]">
                                {services[currentSlide].originalPrice}
                            </span>
                        </div>

                        <button
                            onClick={() => handleServiceClick(services[currentSlide])}
                            className={`w-full h-[68px] text-[24px] py-3 rounded-full font-bold text-white transition-all duration-300 hover:shadow-lg cursor-pointer ${services[currentSlide].color === 'yellow'
                                ? 'bg-[#F67524] hover:bg-orange-600'
                                : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                        >
                            {services[currentSlide].buttonText}
                        </button>
                    </div>

                    <div className="flex items-center justify-between mt-6 gap-4">
                        <button
                            onClick={handlePrev}
                            className="shrink-0 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200 cursor-pointer"
                        >
                            <ChevronLeft size={24} className="text-gray-700" />
                        </button>

                        <div className="flex gap-2 justify-center flex-1">
                            {services.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-[#F67524] w-8' : 'bg-gray-300'
                                        }`}

                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="shrink-0 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200 cursor-pointer"
                        >
                            <ChevronRight size={24} className="text-gray-700" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
