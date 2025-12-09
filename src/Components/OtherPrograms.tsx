import { useState } from 'react';

interface Program {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    discount?: string;
    image: string;
    borderColor: 'orange' | 'blue';
    buttonColor: 'orange' | 'blue';
}

const programs: Program[] = [
    {
        id: 1,
        name: 'ბავშლის დაშინებ მთა',
        price: 200,
        originalPrice: 200,
        discount: '-20 %',
        image: 'https://via.placeholder.com/300x200/E8E8E8/CCCCCC?text=Program+1',
        borderColor: 'orange',
        buttonColor: 'orange'
    },
    {
        id: 2,
        name: 'სახელი ატრაქციის თამ',
        price: 200,
        originalPrice: 200,
        discount: '-20 %',
        image: 'https://via.placeholder.com/300x200/E8E8E8/CCCCCC?text=Program+2',
        borderColor: 'blue',
        buttonColor: 'blue'
    },
    {
        id: 3,
        name: 'დათამაშები, ატრაქციებ',
        price: 100,
        image: 'https://via.placeholder.com/300x200/E8E8E8/CCCCCC?text=Program+3',
        borderColor: 'blue',
        buttonColor: 'blue'
    },
    {
        id: 4,
        name: 'ავტორთზე ძმა',
        price: 110,
        image: 'https://via.placeholder.com/300x200/E8E8E8/CCCCCC?text=Program+4',
        borderColor: 'orange',
        buttonColor: 'orange'
    },
    {
        id: 5,
        name: 'ავტორ ატრაქცია (3რმ...',
        price: 250,
        image: 'https://via.placeholder.com/300x200/E8E8E8/CCCCCC?text=Program+5',
        borderColor: 'orange',
        buttonColor: 'orange'
    },
    {
        id: 6,
        name: 'დათამაშებელ მოზენ...',
        price: 30,
        image: 'https://via.placeholder.com/300x200/E8E8E8/CCCCCC?text=Program+6',
        borderColor: 'blue',
        buttonColor: 'blue'
    },
    {
        id: 7,
        name: 'დათამაშებელ მოზენ, ატრაქციები რთელ (ლეზე დასახელებ)',
        price: 50,
        image: 'https://via.placeholder.com/300x200/E8E8E8/CCCCCC?text=Program+7',
        borderColor: 'blue',
        buttonColor: 'blue'
    },
    {
        id: 8,
        name: 'სახელი, ატრაქცია მოზენტებ რთელ ყვავ დასახელებელ',
        price: 50,
        image: 'https://via.placeholder.com/300x200/E8E8E8/CCCCCC?text=Program+8',
        borderColor: 'blue',
        buttonColor: 'blue'
    },
    {
        id: 9,
        name: 'ავტორთი, ბავშ მოტრელებ',
        price: 80,
        image: 'https://via.placeholder.com/300x200/E8E8E8/CCCCCC?text=Program+9',
        borderColor: 'orange',
        buttonColor: 'orange'
    },
    {
        id: 10,
        name: 'სახელი',
        price: 450,
        image: 'https://via.placeholder.com/300x200/E8E8E8/CCCCCC?text=Program+10',
        borderColor: 'orange',
        buttonColor: 'orange'
    },
    {
        id: 11,
        name: 'დათას პროგრამის თამ (დამატებული 1 საათი)',
        price: 200,
        image: 'https://via.placeholder.com/300x200/E8E8E8/CCCCCC?text=Program+11',
        borderColor: 'orange',
        buttonColor: 'orange'
    }
];

function OtherPrograms({ addToCart, cartItems }: any) {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const getCardClasses = (program: Program) => {
        const borderClass = program.borderColor === 'orange'
            ? 'border-[#F8934A]'
            : 'border-[#4169E1]';

        return `${borderClass}`;
    };

    const getButtonClasses = (program: Program) => {
        const baseClasses = 'w-full py-3 rounded-full font-semibold transition-all';

        if (program.buttonColor === 'orange') {
            return `${baseClasses} bg-[#F8934A] text-white hover:bg-[#E88239]`;
        } else {
            return `${baseClasses} bg-[#4169E1] text-white hover:bg-[#2E52B5]`;
        }
    };

    return (
        <div id="otherprograms" className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-[#F67524] text-ashesha">
                    sxva programebi
                </h1>

                <div className="hidden lg:block text-guge">
                    <div className="grid grid-cols-2 gap-6">
                        {programs.map((program) => (
                            <div
                                key={program.id}
                                onMouseEnter={() => setHoveredId(program.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={`border-4 rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer transform ${getCardClasses(program)} ${hoveredId === program.id ? 'shadow-xl scale-105' : ''
                                    }`}
                            >
                                <div className="relative h-48 bg-linear-to-b from-gray-200 to-gray-300 flex items-center justify-center">
                                    <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width=%22100%22%20height=%22100%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect%20width=%22100%22%20height=%22100%22%20fill=%22%23E8E8E8%22/%3E%3C/svg%3E')] bg-repeat" />
                                    <span className="absolute text-gray-400 text-sm">ფოტო</span>
                                </div>

                                {/* {program.discount && (
                                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                                        {program.discount}
                                    </div>
                                )} */}

                                <div
                                    className={`p-4 ${program.borderColor === 'orange'
                                        ? 'bg-[#FFD472]'
                                        : 'bg-[#B4C4E5]'
                                        }`}
                                >
                                    <div className="mb-4 flex items-center justify-between">
                                        <span
                                            className={`font-bold text-lg ${program.borderColor === 'orange'
                                                ? 'text-[#1554A4]'
                                                : 'text-[#1554A4]'
                                                }`}
                                        >
                                            {program.price}₾
                                        </span>
                                        {program.originalPrice && program.originalPrice !== program.price && (
                                            <span className="text-sm text-[#1554A4] line-through">
                                                {program.originalPrice}₾
                                            </span>
                                        )}
                                    </div>
                                    <button
                                        onClick={() =>
                                            addToCart({
                                                id: program.id,
                                                name: program.name,
                                                price: program.price,
                                                image: program.image,
                                                section: "Other Programs"
                                            })
                                        }
                                        disabled={cartItems.some((i: { id: number; }) => i.id === program.id)}
                                        className={`${getButtonClasses(program)} flex items-center justify-center gap-2 ${cartItems.some((i: { id: number; }) => i.id === program.id)
                                            ? "opacity-60 cursor-not-allowed"
                                            : "cursor-pointer"
                                            }`}
                                    >
                                        {cartItems.some((i: { id: number; }) => i.id === program.id) ? "დამატებულია" : program.name}
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:hidden text-guge">
                    <div className="flex flex-col gap-6">
                        {programs.map((program) => (
                            <div
                                key={program.id}
                                className={`border border-black rounded-2xl overflow-hidden transition-all duration-300 ${getCardClasses(program)}`}
                            >
                                <div className="relative h-40 bg-linear-to-b from-gray-200 to-gray-300 flex items-center justify-center">
                                    <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width=%22100%22%20height=%22100%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect%20width=%22100%22%20height=%22100%22%20fill=%22%23E8E8E8%22/%3E%3C/svg%3E')] bg-repeat" />
                                    <span className="absolute text-gray-400 text-sm">ფოტო</span>
                                </div>

                                {/* {program.discount && (
                                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                                        {program.discount}
                                    </div>
                                )} */}

                                <div
                                    className={`p-4 ${program.borderColor === 'orange'
                                        ? 'bg-[#FFD472]'
                                        : 'bg-[#B4C4E5]'
                                        }`}
                                >
                                    <div className="mb-4 flex items-center justify-between">
                                        <span
                                            className={`font-bold text-[20px] ${program.borderColor === 'orange'
                                                ? 'text-[#F8934A]'
                                                : 'text-[#4169E1]'
                                                }`}
                                        >
                                            {program.price}₾
                                        </span>
                                        {program.originalPrice && program.originalPrice !== program.price && (
                                            <span className="text-[28px] text-[#1554A4] line-through">
                                                {program.originalPrice}₾
                                            </span>
                                        )}
                                    </div>
                                    <button className={getButtonClasses(program)}>
                                        {program.name}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtherPrograms;
