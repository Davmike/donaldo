import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Music2 } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-[#1554A4] text-guge">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-6xl mx-auto">

                    {/* 3 Column Layout */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-12 mb-12">

                        {/* LEFT — Logo + Text */}
                        <div className="flex flex-col items-start gap-4 md:w-1/3">
                            <img
                                src='../../public/assets/donaldologo.png'
                                alt="Donald Duck Logo"
                                className="w-16 h-16 rounded-full border-2 border-yellow-400"
                            />
                            <p className="text-white text-lg font-semibold leading-relaxed">
                                სადაც ოცნებები ხდება და<br />თავგადასავლები იწყება!
                            </p>
                        </div>

                        {/* MIDDLE — Contact */}
                        <div className="flex flex-col gap-4 md:w-1/3">
                            <h3 className="text-white font-bold text-[18px] mb-1">საკონტაქტო</h3>

                            <div className="flex items-start gap-2">
                                <MapPin size={20} className="text-white mt-1" />
                                <p className="text-white/90 text-[16px]">ზურაბ გორგილაძის ქ. 88, ბათუმი</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Phone size={20} className="text-white" />
                                <a href="tel:+995555123456" className="text-white/90 text-[16px] hover:text-white">
                                    +995 555 123 456
                                </a>
                            </div>

                            <div className="flex items-center gap-2">
                                <Mail size={20} className="text-white" />
                                <a href="mailto:info@donaldoland.ge" className="text-white/90 text-[16px] hover:text-white">
                                    info@donaldoland.ge
                                </a>
                            </div>
                        </div>

                        {/* RIGHT — Social */}
                        <div className="flex flex-col md:w-1/3">
                            <h3 className="text-white font-bold text-xl mb-3">გამოგვყევით:</h3>
                            <div className="flex gap-4">
                                <a href="#" className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition">
                                    <Facebook size={24} className="text-white" />
                                </a>
                                <a href="#" className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition">
                                    <Instagram size={24} className="text-white" />
                                </a>
                                <a href="#" className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition">
                                    <Youtube size={24} className="text-white" />
                                </a>
                                <a href="#" className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition">
                                    <Music2 size={24} className="text-white" />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Bottom */}
                    <div className="border-t border-white/20 pt-8">
                        <p className="text-center text-white/70 text-sm">
                            © 2025 DonaldoLand. All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
