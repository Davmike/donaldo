import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Music2 } from 'lucide-react';
import { useLanguage } from "../contexts/LanguageContext";
import logo from "../../public/assets/logo1.png"

function Footer() {

    const { t } = useLanguage();

    return (
        <footer className="bg-[#1554A4] text-guge relative">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-6xl mx-auto">

                    {/* 3 Column Layout */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-12 mb-12">

                        {/* LEFT — Logo + Text */}
                        <div className="flex flex-col items-start gap-4 md:w-1/3">
                            <img
                                src={logo}
                                alt="Donald Duck Logo"
                                className="w-16 h-16"
                            />
                            <p className="text-white text-lg font-semibold leading-relaxed">
                                {t.footer.slogan}<br />{t.footer.slogan1}
                            </p>
                        </div>

                        {/* MIDDLE — Contact */}
                        <div className="flex flex-col gap-4 md:w-1/3">
                            <h3 className="text-white font-bold text-[18px] mb-1">{t.footer.contactTitle}</h3>

                            <div className="flex items-start gap-2">
                                <MapPin size={20} className="text-white mt-1" />
                                <p className="text-white/90 text-[16px]">{t.footer.address}</p>
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
                                    {t.footer.email}
                                </a>
                            </div>
                        </div>

                        {/* RIGHT — Social */}
                        <div className="flex flex-col md:w-1/3">
                            <h3 className="text-white font-bold text-xl mb-3">{t.footer.followUs}:</h3>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/profile.php?id=100093144237657" target='_blank' className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition">
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
                            {t.footer.copyright}
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
