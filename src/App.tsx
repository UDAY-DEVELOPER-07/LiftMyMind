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
    { label: "Suggestor", href: "/song" },
    { label: "About", href: "/about" },
];

function App() {
    return (
        <>
            <div className="fixed top-2 left-1/2 -translate-x-1/2 flex w-[98%] sm:w-[95%] md:w-[80%] rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-3xl pt-1 z-[20] items-center justify-between px-2 sm:px-3 md:px-6 shadow-lg flex-col md:flex-row gap-2 md:gap-0">
            <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto justify-center md:justify-start">
                <img src={myImage} className="w-15 h-15 sm:w-15 sm:h-15 md:w-20 md:h-20 object-contain pointer-events-none select-none" alt="Lift My Mind Logo" />
                <p className="text-gray-200 text-xl sm:text-xl  md:text-2xl font-extrabold text-center md:text-left">Lift My Mind</p>
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
            <div className="w-full pt-20 sm:pt-24 md:pt-36">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/song" element={<SongSuggestorPage />} />
                <Route path="/about" element={<About />} />
            </Routes>
            </div>
            <div className="bottom-0 w-full h-fit bg-black/50 backdrop-blur-2xl text-gray-300 pt-4 text-center z-40">
                <Footer />
            </div>
        </>
    );
}

export default App;