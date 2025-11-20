import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface Category {
    id: string;
    name: string;
    imageUrl: string;
    type: 'children' | 'parents'; // დამატებული type
}

interface MenuItem {
    id: string;
    categoryId: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    discountPercentage?: number;
    imageUrl: string;
    type: 'children' | 'parents'; // დამატებული type
}

const categories: Category[] = [
    { id: '1', name: 'დესერტები', imageUrl: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800', type: 'children' },
    { id: '2', name: 'ცხელი კერძები', imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800', type: 'parents' },
    { id: '3', name: 'სასმელები', imageUrl: 'https://images.pexels.com/photos/1553969/pexels-photo-1553969.jpeg?auto=compress&cs=tinysrgb&w=800', type: 'children' },
    { id: '4', name: 'ცივი კერძები', imageUrl: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=800', type: 'parents' },
    { id: '5', name: 'ცომეული', imageUrl: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800', type: 'children' },
    { id: '6', name: 'გარნირი', imageUrl: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800', type: 'parents' },
];

const menuItems: MenuItem[] = [
    { id: '1', categoryId: '1', name: 'ხილის პონჩიკი', description: 'ვანილი, ცვების, სახვევი...', price: 30, originalPrice: 36, discountPercentage: 20, imageUrl: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400', type: 'children' },
    { id: '2', categoryId: '1', name: 'შოკოლადის დონატი', description: 'ვანილი, ცვების, სახვევი...', price: 30, imageUrl: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400', type: 'children' },
    { id: '3', categoryId: '2', name: 'ხაშლამა', description: 'ხორცი, კარტოფილი, სახვევი...', price: 45, imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400', type: 'parents' },
];

function Menu() {
    const [activeTab, setActiveTab] = useState<'parents' | 'children'>('parents');
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
    const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);

    // ფილტრავს კატეგორიებს activeTab-ის მიხედვით
    const filteredCategories = categories.filter(cat => cat.type === activeTab);

    // როდესაც აირჩევ კატეგორიას ან activeTab შეიცვლება
    useEffect(() => {
        if (selectedCategory) {
            const items = menuItems.filter(
                item => item.categoryId === selectedCategory.id && item.type === activeTab
            );
            setFilteredItems(items);
            setExpandedCategories(new Set([selectedCategory.id]));
        }
    }, [selectedCategory, activeTab]);

    const handleCategoryClick = (category: Category) => {
        setSelectedCategory(category);
    };

    const handleBack = () => {
        setSelectedCategory(null);
        setExpandedCategories(new Set());
        setFilteredItems([]);
    };

    const handleTabClick = (tab: 'children' | 'parents') => {
        setActiveTab(tab);
        setSelectedCategory(null);
        setFilteredItems([]);
        setExpandedCategories(new Set());
    };

    const groupedItems = filteredCategories.reduce((acc, category) => {
        const items = filteredItems.filter(item => item.categoryId === category.id);
        if (items.length > 0) {
            acc[category.id] = { category, items };
        }
        return acc;
    }, {} as Record<string, { category: Category; items: MenuItem[] }>);

    return (
        <div id="menu" className="min-h-screen relative overflow-hidden">
            {/* UI სტილები შენარჩუნებულია შენს კოდში */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-[#F67524] text-ashesha">
                    meniu
                </h1>

                {!selectedCategory ? (
                    <>
                        <div className="flex justify-center gap-4 md:gap-8 mb-12 md:mb-16 text-guge">
                            <button
                                onClick={() => handleTabClick('children')}
                                className={`px-2 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-medium transition-all cursor-pointer ${activeTab === 'children'
                                    ? 'bg-[#4a6fa5] text-white shadow-lg'
                                    : 'bg-white/60 text-[#4a6fa5] hover:bg-white/80'
                                    }`}
                            >
                                ბავშვებისთვის
                            </button>
                            <button
                                onClick={() => handleTabClick('parents')}
                                className={`px-2 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-medium transition-all cursor-pointer ${activeTab === 'parents'
                                    ? 'bg-[#4a6fa5] text-white shadow-lg'
                                    : 'bg-white/60 text-[#4a6fa5] hover:bg-white/80'
                                    }`}
                            >
                                მშობლებისთვის
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto text-guge">
                            {filteredCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategoryClick(category)}
                                    className="relative h-32 md:h-40 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group cursor-pointer"
                                >
                                    <img
                                        src={category.imageUrl}
                                        alt={category.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="bg-white/90 px-6 md:px-8 py-2 md:py-3 rounded-full text-[#4a6fa5] font-semibold text-base md:text-lg shadow-md">
                                            {category.name}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <button
                            onClick={handleBack}
                            className="flex items-center gap-2 text-[#4a6fa5] font-medium mb-6 md:mb-8 hover:gap-3 transition-all px-4 py-2 rounded-full text-[16px] md:text-24px cursor-pointer text-guge"
                        >
                            <ArrowLeft size={20} />
                            უკან დაბრუნება
                        </button>

                        <div className="space-y-12 text-guge">
                            {Object.values(groupedItems).map(({ category, items }) => (
                                <div key={category.id} className="space-y-4">
                                    <h2 className="text-2xl md:text-[30px] font-bold text-[#4a6fa5]">{category.name}</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {items.map((item) => (
                                            <div
                                                key={item.id}
                                                className=" rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                                            >
                                                <div className="flex gap-4 p-4">
                                                    <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                                                        <img
                                                            src={item.imageUrl}
                                                            alt={item.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        {item.discountPercentage && (
                                                            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                                                -{item.discountPercentage}%
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex-1 flex flex-col justify-between">
                                                        <div>
                                                            <h3 className="font-semibold md:text-[20px] text-[#4a6fa5] mb-1">
                                                                {item.name}
                                                            </h3>
                                                            <p className="text-sm md:text-[16px] text-[#5C6983]">{item.description}</p>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-lg md:text-[25px] font-bold text-[#1554A4]">
                                                                {item.price}₾
                                                            </span>
                                                            {item.originalPrice && (
                                                                <span className="text-sm text-red-500 line-through">
                                                                    {item.originalPrice}₾
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Menu;
