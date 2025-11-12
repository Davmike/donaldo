import { useState } from 'react';
import { ShoppingCart, Menu, X, Globe } from 'lucide-react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { text: 'მთავარი', color: 'text-orange-500' },
        { text: 'დაბადების დღე', color: 'text-blue-600' },
        { text: 'გმირები', color: 'text-blue-600' },
        { text: 'მენიუ', color: 'text-blue-600' },
        { text: 'სხვა პროგრამები', color: 'text-blue-600' },
        { text: 'გალერეა', color: 'text-blue-600' },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm p-2.5 text-guge">
                <div className="container mx-auto px-4">
                    {/* ცხელი ხაზი */}
                    <div className="flex justify-between items-center lg:block text-white text-sm ">
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

                        <nav className="hidden lg:flex items-center gap-6">
                            {menuItems.map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className={`${item.color} hover:opacity-80 transition-opacity text-sm`}
                                >
                                    {item.text}
                                </a>
                            ))}
                        </nav>

                        <div className="flex items-center gap-3">
                            {/* <div className="hidden md:block text-white text-sm lg:hidden">
                                +995 543 21 12 34
                            </div> */}

                            <button className="hidden lg:flex items-center gap-2 px-4 py-2 border border-orange-500 text-white rounded-full hover:bg-orange-500/10 transition-colors">
                                <Globe size={18} />
                                <span>KA</span>
                            </button>

                            <button className="relative p-2 hover:bg-white/10 transition-colors border-2 bg-gray-400 border-gray-400 rounded-full">
                                <ShoppingCart className="text-white" size={24} />
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                    0
                                </span>
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

                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <nav className="bg-white border-t rounded-2xl border-gray-200 py-4">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center justify-between mb-4">
                                    {/* <button className="p-2 border-2 border-blue-600 rounded-lg">
                                        <Menu className="text-blue-600" size={24} />
                                    </button> */}
                                    <button className="flex items-center gap-2 px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg">
                                        <Globe size={18} />
                                        <span>KA</span>
                                    </button>
                                </div>

                                {menuItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className={`${item.color} py-3 text-lg hover:bg-gray-50 transition-colors`}
                                    >
                                        {item.text}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <div className="h-16"></div>
        </>
    );
}

export default Header;
