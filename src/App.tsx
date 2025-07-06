// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './home/Page';
import About from './About/Page';
import GooeyNav from './components/ui/Nav';
import myImage from './assets/images/img1.png';
import SongSuggestorPage from './Song-Suggestor/page';
import Footer from './components/elements/footer';

const items = [
    { label: "Home", href: "/" },
    { label: "Song-Suggestor", href: "/song" },
    { label: "About", href: "/about" },
];

function App() {
    return (
        <>
            <div className="fixed top-4 left-1/2 -translate-x-1/2 flex w-[95%] md:w-[80%] rounded-2xl bg-white/20 backdrop-blur-3xl pt-1 z-[20] items-center justify-between px-3 md:px-6 shadow-lg flex-col md:flex-row gap-2 md:gap-0">
                <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto justify-center md:justify-start">
                    <img src={myImage} className="w-12 h-12 md:w-20 md:h-20 object-contain pointer-events-none select-none" alt="Lift My Mind Logo" />
                    <p className="text-gray-200 text-lg md:text-2xl font-semibold text-center md:text-left">Lift My Mind</p>
                </div>
                <div className="flex items-center font-bold justify-center w-full md:w-auto">
                    <GooeyNav
                        items={items}
                        particleCount={15}
                        particleDistances={[90, 10]}
                        particleR={100}
                        initialActiveIndex={items.findIndex(item => item.href === window.location.pathname)}
                        animationTime={600}
                        timeVariance={300}
                        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                    />
                </div>
            </div>
            <div className="w-full pt-28 md:pt-36">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/song" element={<SongSuggestorPage />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
            <div className="bg-black w-full flex justify-center relative overflow-hidden">
                <Footer />
            </div>
        </>
    );
}

export default App;