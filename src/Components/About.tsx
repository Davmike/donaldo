import { useLanguage } from "../contexts/LanguageContext";
import test from "../../public/assets/test.jpg"

function About() {
    const { t } = useLanguage();

    return (
        <div id="about" className="relative overflow-hidden">
            <div className="absolute top-20 right-10 w-32 h-32 bg-[#D4A5A5]/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 left-10 w-40 h-40 bg-[#9FB8D4]/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#F4D2A8]/30 rounded-full blur-2xl"></div>

            <div className="container mx-auto px-4 py-16 md:py-24">
                <h1 className="text-ashesha text-[64px] font-bold text-[#F67524] mb-8 text-center">
                    Cvens Sesaxeb
                </h1>

                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="w-full md:w-1/2 relative z-10">
                            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-[472px] max-h-[542px]">
                                <img
                                    src={test}
                                    alt="Kids Play Area"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 relative z-10">
                            <h3 className="text-[24px] md:text-3xl font-bold text-[#1554A4] mb-6 leading-tight text-guge">
                                {t.about.welcome}
                            </h3>

                            <div className="rounded-2xl mb-6">
                                <p className="text-[#5C6983] text-[20px] leading-relaxed text-guge">
                                    {t.about.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8 text-[#5C6983] text-[16px] text-guge">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D66B4A] text-xl mt-1">•</span>
                                    <span className="text-gray-700 text-base">
                                        {t.about.point1}
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D66B4A] text-xl mt-1">•</span>
                                    <span className="text-gray-700 text-base">
                                        {t.about.point2}
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D66B4A] text-xl mt-1">•</span>
                                    <span className="text-gray-700 text-base">
                                        {t.about.point3}
                                    </span>
                                </li>
                            </ul>
                            {/* 
                            <div className="w-full flex md:justify-end">
                                <button className="w-full md:w-auto px-12 py-4 bg-[#1554A4] hover:bg-[#3D5A8A] transition-colors text-white font-bold rounded-full text-[24px] shadow-lg text-guge">
                                    {t.about.button}
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
