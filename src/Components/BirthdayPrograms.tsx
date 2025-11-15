import { useState } from 'react';
import { ChevronLeft, Check, ArrowRight } from 'lucide-react';

interface Service {
    id: number;
    title: string;
    guests: string;
    duration: string;
    price: string;
    features: string[];
    description: string;
    image: string;
    color: 'blue' | 'orange' | 'light-blue';
}

const services: Service[] = [
    {
        id: 1,
        title: 'სამეფეხი 1',
        guests: '2 საათი',
        duration: '10 დამსაქმე',
        price: '250 ₾',
        features: ['1 წამყვანი', 'DJ', 'Laser Show', 'X-BOX', 'კარაოკე'],
        description: 'დაზღვეულის ფლირტირება კმ ზღვა აღმიოსებელი. 10-ს. ხარწილდელიკილა - 2 საათი; დამსაქმელი ახალი მოთხოვილებელი პროგრამა (მხარდელების გამოცემა, რომლებმა შეხვდნენ 1 ნამსხვევი, DJ - ის მენეჯერი ფელიციიდა, Laser Show-ს ექსპლორერი კარაოკე, X-BOX მედავითი, კარაოკე სემელთიდან',
        image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
        color: 'blue'
    },
    {
        id: 2,
        title: 'სამეფეხი 2',
        guests: '2 საათი',
        duration: '10 დამსაქმე',
        price: '250 ₾',
        features: ['2 ნამსხვევი', 'DJ', 'Laser Show', 'X-BOX', 'კარაოკე'],
        description: 'დაზღვეულის ფლირტირება კმ ზღვა აღმიოსებელი. 10-ს. ხარწილდელიკილა - 2 საათი; დამსაქმელი ახალი მოთხოვილებელი პროგრამა (მხარდელების გამოცემა, რომლებმა შეხვდნენ 2 ნამსხვევი, DJ - ის მენეჯერი ფელიციიდა, Laser Show-ს ექსპლორერი კარაოკე, X-BOX მედავითი, კარაოკე სემელთიდან',
        image: 'https://images.pexels.com/photos/1444716/pexels-photo-1444716.jpeg?auto=compress&cs=tinysrgb&w=600',
        color: 'blue'
    },
    {
        id: 3,
        title: 'სახელმწიფო',
        guests: '2 საათი',
        duration: '1-5 დამსაქმე',
        price: '250 ₾',
        features: ['1 ნამსხვევი', 'DJ', 'Laser Show', 'X-BOX', 'კარაოკე'],
        description: 'დაზღვეულის ფლირტირება კმ ზღვა აღმიოსებელი. 10-ს. ხარწილდელიკილა - 2 საათი; დამსაქმელი ახალი მოთხოვილებელი პროგრამა',
        image: 'https://images.pexels.com/photos/3452361/pexels-photo-3452361.jpeg?auto=compress&cs=tinysrgb&w=600',
        color: 'blue'
    },
    {
        id: 4,
        title: 'ფესტივალი',
        guests: '2 საათი',
        duration: '1-5 დამსაქმე',
        price: '250 ₾',
        features: ['2 "დეტალეთი" ნამსხვევი', 'DJ', 'Laser Show', 'X-BOX', 'კარაოკე'],
        description: 'დაზღვეულის ფლირტირება კმ ზღვა აღმიოსებელი. 10-ს. ხარწილდელიკილა - 2 საათი; დამსაქმელი ახალი მოთხოვილებელი პროგრამა',
        image: 'https://images.pexels.com/photos/3375971/pexels-photo-3375971.jpeg?auto=compress&cs=tinysrgb&w=600',
        color: 'blue'
    },
];

const getServiceColor = (id: number) => {
    if (id === 1) return 'bg-[#B4C4E5]';
    if (id === 2) return 'bg-[#B4C4E5]';
    if (id === 3) return 'bg-[#B4C4E5]';
    if (id === 4) return 'bg-[#B4C4E5]';
    return 'bg-[#3B5998]';
};


function BirthdayPrograms() {
    const [selectedService, setSelectedService] = useState<number | null>(null);
    // const [currentSlide, setCurrentSlide] = useState(0);

    // const handlePrevSlide = () => {
    //     setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    // };

    // const handleNextSlide = () => {
    //     setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    // };

    if (selectedService !== null) {
        const service = services.find((s) => s.id === selectedService)!;
        return (
            <section className="relative min-h-screen overflow-hidden pt-8 md:pt-16 pb-12">
                <div className="absolute top-20 right-10 w-32 h-32 bg-[#B4C4E5] rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 left-10 w-40 h-40 bg-[#E8994A]/15 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4">


                    <div className="max-w-6xl mx-auto text-ashesha">
                        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#F67524] mb-12">
                            dabadebis dRis programebi
                        </h1>
                        <button
                            onClick={() => setSelectedService(null)}
                            className="text-guge cursor-pointer flex items-center gap-2 text-[#4A6FA5] font-semibold mb-8 hover:opacity-70 transition-opacity"
                        >
                            <ChevronLeft size={20} />
                            უკან დაბრუნება
                        </button>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8 text-guge">
                            <div className="lg:col-span-1 space-y-3">
                                {services.map((svc) => (
                                    <button
                                        key={svc.id}
                                        onClick={() => setSelectedService(svc.id)}
                                        className={`cursor-pointer w-full px-4 py-3 rounded-2xl font-bold text-white transition-all ${svc.id === selectedService
                                            ? `${getServiceColor(svc.id)} shadow-lg`
                                            : 'bg-[#1554A4] hover:bg-white/40'
                                            } text-sm md:text-base`}
                                    >
                                        {svc.title}
                                    </button>
                                ))}
                            </div>

                            <div className="lg:col-span-3 text-guge">
                                <div className={`${getServiceColor(service.id)} rounded-3xl overflow-hidden shadow-2xl`}>
                                    <div className="p-6 md:p-8 text-white bg">
                                        <div className='flex flex-col items-center justify-center bg-[#1554A4] rounded-2xl mb-6 p-2'>
                                            <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                                            {/* <p className="text-sm md:text-base opacity-90 mb-6">
                                            {service.guests} • {service.duration}
                                        </p> */}
                                        </div>
                                        <div className="bg-white/20 rounded-2xl overflow-hidden mb-6">
                                            <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
                                        </div>

                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="text-guge flex items-center gap-3 text-[16px] md:text-base text-[#2B2E34]">
                                                    <Check size={18} className="shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <p className="text-[16px] md:text-[16px] mb-8 leading-relaxed text-[#2B2E34]">{service.description}</p>

                                        <div className="flex gap-3 text-guge">
                                            <button className="cursor-pointer flex-1 px-6 py-3 bg-[#1554A4] hover:bg-white/40 transition-colors rounded-full font-bold text-white">
                                                {service.price}
                                            </button>
                                            <button className="cursor-pointer flex-1 px-6 py-3 bg-[#1554A4] hover:bg-white/40 transition-colors rounded-full font-bold text-white">
                                                დაჯავშნა
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative min-h-screen overflow-hidden pt-8 md:pt-16 pb-12 text-guge">
            <div className="absolute top-20 right-10 w-32 h-32 bg-[#A8C5E8]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 left-10 w-40 h-40 bg-[#E8994A]/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#D4A5A5]/20 rounded-full blur-2xl"></div>

            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-[#F67524] mb-12 md:mb-16 text-ashesha">
                    dabadebis dRis programebi
                </h1>

                <div className="max-w-7xl mx-auto">
                    <div className="hidden lg:grid grid-cols-4 gap-6">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setSelectedService(service.id)}
                                className={`cursor-pointer group rounded-3xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:scale-105 border`}
                            >
                                <div className={`${getServiceColor(service.id)} p-6 text-white rounded-3xl h-full flex flex-col`}>
                                    <div className='flex flex-col items-center justify-center bg-[#1554A4] rounded-2xl mb-6 p-2'>
                                        <h3 className="text-xl font-bold">{service.title}</h3>
                                        {/* <p className="text-sm opacity-90 mb-4">{service.guests}</p>
                                        <p className="text-xs opacity-80 mb-6">{service.duration}</p> */}

                                    </div>
                                    <div className="bg-white/20 rounded-xl overflow-hidden mb-4 grow">
                                        <img src={service.image} alt={service.title} className="w-full h-40 object-cover" />
                                    </div>

                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-[14px] text-[#2B2E34]">
                                                <Check size={16} className="shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="text-[14px] text-[#1554A4] opacity-75 mb-4 flex items-center justify-end gap-1 hover:opacity-100">
                                        სრული ნახვა <ArrowRight size={14} />
                                    </p>
                                    <button className="cursor-pointer w-full px-4 py-3 bg-[#1554A4] hover:bg-[#2D4373] transition-colors rounded-full font-bold text-white text-sm mb-2">
                                        {service.price}
                                    </button>
                                    <button className="cursor-pointer w-full px-4 py-3 bg-[#1554A4] hover:bg-[#2D4373] transition-colors rounded-full font-bold text-white text-sm">
                                        დაჯავშნა
                                    </button>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="lg:hidden relative border">
                        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="shrink-0 snap-start w-80 md:w-80"
                                    onClick={() => setSelectedService(service.id)}
                                >
                                    <div className={`${getServiceColor(service.id)} p-6 rounded-3xl text-white cursor-pointer transition-all hover:shadow-xl h-full flex flex-col`}>
                                        <div className='flex flex-col items-center justify-center bg-[#1554A4] rounded-2xl mb-6 p-2'>
                                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                            {/* <p className="text-sm opacity-90 mb-1">{service.guests}</p>
                                            <p className="text-xs opacity-80 mb-6">{service.duration}</p> */}
                                        </div>
                                        <div className="bg-white/20 rounded-xl overflow-hidden mb-6 grow">
                                            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                                        </div>

                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-[16px] text-[#2B2E34]">
                                                    <Check size={18} className="shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <p className="text-[16px] opacity-75 mb-6 flex items-center justify-end gap-1 text-[#1554A4]">
                                            სრული ნახვა <ArrowRight size={16} />
                                        </p>

                                        <button className="w-full px-6 py-3 bg-[#1554A4] hover:bg-white/30 transition-colors rounded-full font-bold text-white text-lg mb-3 cursor-pointer">
                                            {service.price}
                                        </button>
                                        <button className="cursor-pointer w-full px-6 py-3 bg-[#1554A4] hover:bg-[#2D4373] transition-colors rounded-full font-bold text-white text-lg">
                                            დაჯავშნა
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default BirthdayPrograms;
