import RippleButton from "../components/elements/Btn1";
import MyVantaComponent from "../components/ui/background";

interface CandItem {
    icon: string;
    title: string;
    description: string;
}

export default function WhatWeDo() {


    const Canditems = [
        {
            icon: "🧠",
            title: "Understand Your Mood Health",
            description: "We focus on We start with a quick and intuitive form to gauge how you're feeling — from calm to stressed, joyful to low.",
        },
        {
            icon: "🔍",
            title: "Recommend the Song",
            description: "Based on your mood, we match you with a song scientifically shown to support emotional well-being.",
        },
        {
            icon: "🧘",
            title: "Enhance Inner Peace",
            description: "Regularly listening to mood-based music can reduce stress, improve focus, and promote a better mental state.",
        },
        {
            icon: "🎶",
            title: "Enjoy the Soundtrack",
            description: "Immerse yourself in a personalized musical experience designed to uplift and soothe your mind.",
        },
    ]
    return (
        <>
            <div className="absolute  bg-black inset-0 ">
                <MyVantaComponent />
            </div>
            <div className="relative w-full bg-transparent backdrop-blur-sm h-screen flex flex-col items-center justify-center ">
                <p className="relative w-7xl left-1/2-translate-x-1/2 bg-clip-text  bg-gradient-to-b via-emerald-200 from-emerald-50 to-emerald-900 text-[700%] z-20 text-transparent font-extrabold text-center pointer-events-none select-none">
                    WHAT WE DO
                </p>
                <div className="w-[80%]  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {Canditems.map((item: CandItem, index: number) => (
                        <div
                            key={index}
                            className={`
                                relative group
                                p-1 h-[400px]
                                rounded-xl
                                backdrop-blur-sm
                                border border-white/10
                                flex
                                justify-center
                                items-center
                            `}
                            >
                            <div className="relative h-full flex justify-center  flex-col bg-black/40 rounded-lg p-6">
                                <div className="text-5xl mb-6 ">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 flex-grow">
                                    {item.description}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-gray-200 text-xl mt-6 text-center">
                    Based on your mood, we’ll recommend a song that uplifts and empowers.
                </p>
                <RippleButton
                    className="font-jost m-8 duration-[600ms] relative flex items-center justify-center overflow-hidden rounded-full bg-[#036041] p-[1.3rem] text-[1.2rem] font-extrabold text-[#D0E3DD] transition hover:text-white hover:bg-[#D0E3DD] hover:shadow-lg hover:shadow-[#D0E3DD] hover:scale-105 uppercase"
                    onClick={() => window.location.href = '/song'}
                >
                    Get Your Recommendations ♫
                </RippleButton>
            </div>
        </>
    );
}