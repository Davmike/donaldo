import { useEffect, useState } from 'react';
import { ShoppingCart, Menu, X, Globe } from 'lucide-react';
import { useNavigate, useLocation } from "react-router-dom";

function Header({ openCart, setOpenCart, totalItems }: any) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [language, setLanguage] = useState('KA'); // არჩეული ენა
    const [scrolled, setScrolled] = useState(false);

    const navigate = useNavigate();
    const location = useLocation(); // 👈 current path

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { text: 'მთავარი', path: '/' },
        { text: 'დაბადების დღე', path: '/birthdayPrograms' },
        { text: 'გმირები', path: '/heros' },
        { text: 'მენიუ', path: '/menu' },
        { text: 'სხვა პროგრამები', path: '/otherProgram' },
        { text: 'გალერეა', path: '/gallery' },
        { text: 'კონტაქტი', path: '/contact' },
    ];

    // 👇 Scroll listener — background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 👇 Update active menu on location change (refresh or navigation)
    useEffect(() => {
        const currentIndex = menuItems.findIndex(item => item.path === location.pathname);
        if (currentIndex !== -1) setActiveIndex(currentIndex);
    }, [location.pathname]);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 p-2.5 text-guge transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
                <div className="container mx-auto px-4">
                    {/* ცხელი ხაზი */}
                    <div className="flex justify-between items-center lg:block text-[#919baf] text-sm ">
                        <span>ცხელი ხაზი: </span>
                        <span className="ml-2">+995 543 21 12 34</span>
                    </div>

                    <div className="flex items-center justify-between py-3">
                        {/* ლოგო */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">LOGO</span>
                            </div>
                        </div>

                        {/* Desktop მენიუ */}
                        <nav className="hidden lg:flex items-center gap-6">
                            {menuItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        navigate(item.path);
                                    }}
                                    className={`transition-colors text-sm cursor-pointer ${activeIndex === index ? 'text-orange-500' : 'text-[#919baf] hover:text-orange-400'}`}
                                >
                                    {item.text}
                                </button>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            {/* ენის არჩევა */}
                            <div className="hidden lg:flex items-center gap-2 px-4 py-2 border border-orange-500 text-white rounded-full hover:bg-orange-500/10 transition-colors">
                                <Globe size={18} />
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="bg-transparent focus:outline-none text-white text-sm cursor-pointer"
                                >
                                    <option value="KA">KA</option>
                                    <option value="EN">EN</option>
                                    <option value="RUS">RUS</option>
                                </select>
                            </div>

                            <button className="relative p-2 hover:bg-white/10 transition-colors border-2 bg-gray-400 border-gray-400 rounded-full" onClick={() => setOpenCart(!openCart)}>
                                <ShoppingCart className="text-white" size={24} />
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </button>

                            <button
                                onClick={toggleMenu}
                                className="lg:hidden hover:bg-white/10 transition-colors p-2 border-2 border-white rounded-lg"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (
                                    <X className="text-white" size={28} />
                                ) : (
                                    <Menu className="text-white" size={28} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- მობილური მენიუ --- */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <nav className="bg-white border-t rounded-2xl border-gray-200 py-4 relative z-50">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col gap-1 items-start">
                                <div className="flex items-center justify-between mb-4">
                                    {/* მობილურზე ენის არჩევა */}
                                    <div className="flex items-center gap-2 px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg">
                                        <Globe size={18} />
                                        <select
                                            value={language}
                                            onChange={(e) => setLanguage(e.target.value)}
                                            className="bg-transparent focus:outline-none text-orange-500 text-sm cursor-pointer"
                                        >
                                            <option value="KA">KA</option>
                                            <option value="EN">EN</option>
                                            <option value="RUS">RUS</option>
                                        </select>
                                    </div>
                                </div>

                                {menuItems.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setActiveIndex(index);
                                            setIsMenuOpen(false);
                                            navigate(item.path);
                                        }}
                                        className={`py-3 text-lg transition-colors cursor-pointer ${activeIndex === index ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
                                    >
                                        {item.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/* --- Overlay --- */}
            {isMenuOpen && (
                <div
                    onClick={toggleMenu}
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                ></div>
            )}

            <div className="h-16"></div>
        </>
    );
}

export default Header;
