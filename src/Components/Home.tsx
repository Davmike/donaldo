import HomeNext from "./HomeNext";
import Services from "./Services";
import About from "./About";

function Home() {
    return (
        <div id="home">
            <section className="h-screen w-full overflow-hidden flex flex-col items-center justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/assets/intro.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative mt-[150px] justify-center z-10 flex flex-col h-full w-full gap-8 md:gap-12 px-[26px]">

                    <div className="flex flex-col items-start text-left gap-4 md:gap-6 max-w-2xl">
                        <h1 className="text-ashesha text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-400 leading-tight">
                            sauketeso momentebi iqmneba aq!
                        </h1>
                        <p className="text-guge text-base text-left md:text-lg text-gray-300 leading-relaxed">
                            დაბადების დღეები, გასართობი ზონები და დაუვიწყარი გართობა ყველა ბავშვისთვის.
                        </p>
                    </div>

                    <button className="text-guge z-20 px-8 md:px-12 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold rounded-2xl text-base md:text-lg shadow-lg hover:shadow-xl md:max-w-[300px]">
                        დაგეგმე წვეულება
                    </button>
                </div>
            </section>
            <HomeNext />
            <Services />
            <About />
        </div>
    );
}

export default Home;
