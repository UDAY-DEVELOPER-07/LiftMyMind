
import MyVantaComponent from "../components/ui/background";
import VerticalTiles from "../components/ui/verticaltiles";
import RippleButton from "../components/elements/Btn1";

export default function About() {
    return (
        <>
            <VerticalTiles />
            <div className="h-screen min-h-screen w-full fill flex justify-center relative overflow-hidden">
                <MyVantaComponent />
                <div className="relative h-screen w-full flex flex-col items-center min-h-screen backdrop-blur-sm  z-[3] pt-12  px-4">
                    <p className="absolute top-0 w-7xl left-1/2-translate-x-1/2 bg-clip-text  bg-gradient-to-b via-emerald-200 from-emerald-50 to-emerald-900 text-[900%] text-transparent z-5 font-extrabold text-center pointer-events-none select-none" style={{ marginTop: '9rem' }}>
                        ABOUT US
                    </p>
                    <p className="absolute w-full top-0   text-[#CADBD5] text-[300%] z-5 font-extrabold text-center pointer-events-none select-none" style={{ marginTop: '20rem' }}>
                        Built to share peace of mind
                    </p>
                    <p className="absolute w-5xl top-0   text-[#ffffff] text-[200%] z-5 font-extrabold text-center pointer-events-none select-none" style={{ marginTop: '25rem' }}>
                        This is an open-source project created with intention. We believe in collaboration, mental wellness, and the power of sound.<br/>
                        Open to contributors. Open to ideas.
                    </p>
                    <RippleButton
                        className="font-jost m-8 duration-[600ms] relative flex items-center justify-center overflow-hidden rounded-full bg-[#036041] p-[1.3rem] text-[1.2rem] font-extrabold text-[#D0E3DD] transition hover:text-white hover:bg-[#D0E3DD] hover:shadow-lg hover:shadow-[#D0E3DD] hover:scale-105 uppercase"
                        onClick={() => window.open('https://github.com/UDAY-DEVELOPER-07/LiftMyMind.git')}
                        style={{ marginTop: '33rem' }}
                    >
                        Contribute on GitHub 
                    </RippleButton>
                    <div>
                        <img
                            src="src/assets/images/aboutimg.png"
                            className="absolute  -translate-x-1/2 w-[50%] md:w-[30%] z-10 pointer-events-none select-none"
                            style={{ bottom: '-3rem',left: '0%' }}
                        />
                        <img
                            src="src/assets/images/aboutimg.png"
                            className="absolute -translate-x-1/2 w-[50%] md:w-[30%] z-10 pointer-events-none select-none"
                            style={{ bottom: '-3rem', right: '-30%' }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}