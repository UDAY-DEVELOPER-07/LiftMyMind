
import MyVantaComponent from "../components/ui/background";
import RippleButton from "../components/elements/Btn1";
import img from "../assets/images/aboutimg.png"
export default function About() {
    const content = {
        title: "About Us",
        description: `At Lift My Mind, we believe music is more than just entertainment—it's a powerful tool for emotional well-being. Our platform is designed to help you better understand your mood and connect with music that supports your mental and emotional state.

We start with a simple, intuitive mood check-in to understand how you’re feeling—whether you’re joyful, stressed, calm, or low. Based on your input, we recommend scientifically backed songs that are tailored to your emotional needs.`
    };
    return (
    <>
        <div className="relative min-h-screen h-full w-full flex flex-col items-center justify-center bg-black overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <MyVantaComponent />
            </div>
            {/* Main Content */}
            <div className="absolute z-10 top-0 flex flex-col items-center px-4 md:px-8 mt-18 sm:mt-32 md:mt-20 lg:mt-24 w-full" >
                <h1 className="text-center bg-clip-text bg-gradient-to-b  from-white via-emerald-400 to-emerald-900 text-transparent font-extrabold text-7xl sm:text-8xl md:text-7xl lg:text-9xl tracking-tight select-none pointer-events-none">
                    {content.title}
                </h1>
                <h2 className="mt-8 text-center text-[#CADBD5] font-extrabold text-xl md:text-3xl lg:text-5xl select-none pointer-events-none">
                    Built to share peace of mind
                </h2>
                <p className="mt-6 max-w-5xl text-center text-white font-bold text-base md:text-xl lg:text-2xl select-none pointer-events-none">
                    {content.description}
                </p>
                <RippleButton
                    className="mt-10 font-jost flex items-center justify-center overflow-hidden rounded-full bg-[#036041] px-8 py-4 text-base md:text-lg font-extrabold text-[#D0E3DD] transition duration-300 hover:text-white hover:bg-[#D0E3DD] hover:shadow-lg hover:shadow-[#D0E3DD] hover:scale-105 uppercase z-20"
                    onClick={() => window.open('https://github.com/UDAY-DEVELOPER-07/LiftMyMind.git')}
                >
                    Contribute on GitHub
                </RippleButton>
            </div>
            <img
                src={img}
                alt="About Decorative Left"
                className="hidden md:block absolute left-[-17%] bottom-15 w-0 md:w-1/3 max-w-xl z-10  pointer-events-none select-none"
            />
            <img
                src={img}
                alt=""
                className="hidden md:block absolute right-[-17%] bottom-15 w-1/3 max-w-xl z-10 pointer-events-none select-none"
            />

        </div>
    </>
    );
}