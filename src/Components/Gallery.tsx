import { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from "../contexts/LanguageContext";


function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState('photo');
    const [currentPage, setCurrentPage] = useState(1);
    const [, setActiveSidebar] = useState<string | null>(null);

    const { t } = useLanguage();

    const CATEGORIES = [
        { id: 'photo', title: t.gallery1.photo },
        { id: 'video', title: t.gallery1.video },
        { id: 'photo_studio', title: t.gallery1.photo_studio },
    ];

    const ITEMS_PER_PAGE = 6;


    const GALLERY_DATA = {
        photo: [
            {
                id: 1,
                image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: false,
            },
            {
                id: 2,
                image: 'https://images.pexels.com/photos/1648374/pexels-photo-1648374.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: false,
            },
            {
                id: 3,
                image: 'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: false,
            },
            {
                id: 4,
                image: 'https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: false,
            },
            {
                id: 5,
                image: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: false,
            },
            {
                id: 6,
                image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: false,
            },
            {
                id: 7,
                image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: false,
            },
            {
                id: 8,
                image: 'https://images.pexels.com/photos/1739970/pexels-photo-1739970.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: false,
            },
        ],
        video: [
            {
                id: 1,
                image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: true,
            },
            {
                id: 2,
                image: 'https://images.pexels.com/photos/1648374/pexels-photo-1648374.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: true,
            },
            {
                id: 3,
                image: 'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: true,
            },
            {
                id: 4,
                image: 'https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: true,
            },
            {
                id: 5,
                image: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: true,
            },
        ],
        photo_studio: [
            {
                id: 1,
                image: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: false,
            },
            {
                id: 2,
                image: 'https://images.pexels.com/photos/1648374/pexels-photo-1648374.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: false,
            },
            {
                id: 3,
                image: 'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: false,
            },
            {
                id: 4,
                image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: false,
            },
            {
                id: 5,
                image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: false,
            },
            {
                id: 6,
                image: 'https://images.pexels.com/photos/1739970/pexels-photo-1739970.jpeg?auto=compress&cs=tinysrgb&w=800',
                isVideo: false,
            },
        ],
    };

    const items = selectedCategory ? GALLERY_DATA[selectedCategory as keyof typeof GALLERY_DATA] : [];
    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleCategorySelect = (categoryId: string) => {
        setSelectedCategory(categoryId);
        setCurrentPage(1);
        setActiveSidebar(categoryId);
    };

    // const handleBack = () => {
    //     setSelectedCategory('photo');
    //     setCurrentPage(1);
    //     setActiveSidebar(null);
    // };

    // const handleSidebarToggle = (categoryId: string) => {
    //     if (activeSidebar === categoryId) {
    //         setActiveSidebar(null);
    //     } else {
    //         setActiveSidebar(categoryId);
    //         setSelectedCategory(categoryId);
    //         setCurrentPage(1);
    //     }
    // };

    if (!selectedCategory) {
        return (
            <div
                id="gallery"
                className="min-h-screen relative overflow-hidden flex items-center justify-center"
            >
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-10 left-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-300 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-md mx-auto px-6 py-12 flex flex-col items-center w-full">
                    <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-[#F67524] text-ashesha">
                        galerea
                    </h1>

                    <div className="w-full space-y-4 mb-8">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => handleCategorySelect(category.id)}
                                className="w-full text-[#4a5c7f] font-medium py-4 px-6 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer text-base"
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>

                    <div className="w-full bg-white rounded-3xl p-1  shadow-lg">
                        <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Featured"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>


                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-300 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex lg:flex-col gap-6 max-w-7xl mx-auto px-6 py-8">
                <div className="hidden lg:block space-y-2">

                    <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-[#F67524] text-ashesha">
                        galerea
                    </h1>

                    <div className="flex flex-row text-guge gap-2.5 justify-center mb-10">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => handleCategorySelect(category.id)}
                                className={`py-6 px-11 border rounded-[20px] text-[18px] font-medium transition-all duration-200 cursor-pointer ${selectedCategory === category.id
                                    ? 'bg-[#FFD77A] text-[#4a5c7f]'
                                    : 'bg-white text-[#4a5c7f]'
                                    }`}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* mobile */}
                <div className="flex-1">
                    <div className="lg:hidden mb-6">
                        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-[#F67524] text-ashesha">
                            galerea
                        </h1>

                        <div className="w-full space-y-3 mb-6 text-guge">
                            {CATEGORIES.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategorySelect(category.id)}
                                    className={`w-full py-2 px-6 border rounded-full text-[18px] font-medium transition-all duration-200 cursor-pointer ${selectedCategory === category.id
                                        ? 'bg-[#FFD77A] text-[#4a5c7f] shadow-sm'
                                        : 'bg-white text-[#4a5c7f] shadow-sm'
                                        }`}
                                >
                                    {category.title}
                                </button>
                            ))}
                        </div>

                        {/* <button
                            onClick={handleBack}
                            className="flex items-center gap-2 text-[#4a5c7f] font-medium mb-6 cursor-pointer"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            უკან დაბრუნება
                        </button> */}
                    </div>

                    {/* <div className="hidden lg:block mb-6">
                        <button
                            onClick={handleBack}
                            className="flex items-center gap-2 text-[#4a5c7f] font-medium cursor-pointer hover:text-[#3a4c6f] transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            უკან დაბრუნება
                        </button>
                    </div> */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {paginatedItems.map((item) => (
                            <div key={item.id} className="relative rounded-3xl overflow-hidden shadow-lg aspect-4/3 cursor-pointer group">
                                <img
                                    src={item.image}
                                    alt={`Gallery item ${item.id}`}
                                    className="w-full h-full object-cover"
                                />
                                {item.isVideo && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-200">
                                        <div className="w-14 h-14 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
                                            <Play className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-8 mb-4">
                            <button
                                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="w-8 h-8 flex items-center justify-center text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 ${currentPage === i + 1
                                        ? 'bg-[#f4a460] text-white shadow-md'
                                        : 'text-gray-600 hover:bg-gray-100 cursor-pointer'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="w-8 h-8 flex items-center justify-center text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Gallery;
