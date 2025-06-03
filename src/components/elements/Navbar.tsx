import GooeyNav from "../ui/Nav";

export default function Navbar() {

    const items = [
        { label: "Home", href: "src/home/Page.tsx" },
        { label: "Song Suggestor", href: "#" },
        { label: "About", href: "#About" },
    ];
    return (
        <div className="fixed top-8 flex w-[80%] rounded-2xl bg-white/20 backdrop-blur-3xl justify-between pt-1 z-[20]">
            <div className="relative flex items-center justify-center">
                <img src="src/assets/images/img1.png" className="w-24  z-10 pointer-events-none select-none" />
                <div className="flex items-center justify-center ">
                <p className="text-gray-200 text-2xl p-1 text-center">
                    Lift My Mind
                </p>
                </div>
            </div>
            <div className="flex items-center font-bold justify-center">
            <GooeyNav
                items={items}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={0}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
            </div>
        </div>
    );
}
