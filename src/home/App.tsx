import MyVantaComponent from "../components/ui/background";
import VerticalTiles from "../components/ui/verticaltiles";
import ClickSpark from "../components/elements/Click";
import GooeyNav from "../components/elements/Nav";
import RippleButton from "../components/elements/Btn1";

export default function App() {
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <>
      <VerticalTiles />
      <div className="min-h-screen w-full fill flex justify-center relative overflow-hidden">
        <MyVantaComponent/>
        <div className="relative w-full flex flex-col items-center min-h-screen backdrop-blur-sm  z-[3] pt-15  px-4">
          <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
          <div className="absolute w-full h-full flex flex-col items-center justify-center z-[2]">
            <div className="w-full flex justify-center pt-3 z-[3]">
            <div className="w-full max-w-3xl flex justify-center">
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
            <div className="flex flex-col items-center justify-start h-max flex-1 mt-24">
              <p className="bg-clip-text bg-gradient-to-b via-emerald-100 from-white to-emerald-400 text-7xl z-20 text-transparent font-extrabold text-center">
              YOUR MOOD
              </p>
              <p className="bg-clip-text bg-gradient-to-b via-emerald-100 from-white to-emerald-400 text-7xl z-5 text-transparent font-extrabold text-center">
              HAS A SOUNDTRACK
            </p>
            <p className="text-gray-200 text-xl mt-4 text-center">
              Songs chosen to calm your mind and match your mood.
            </p>
            <RippleButton 
            className="font-jost m-3 duration-[600ms] relative flex items-center  justify-center overflow-hidden rounded-full bg-[#036041] p-[1.3rem] text-[1.2rem] font-extrabold text-[#D0E3DD] transition hover:text-white hover:bg-[#D0E3DD] hover:shadow-lg hover:shadow-[#D0E3DD] hover:scale-105"
            onClick={() => alert("Button Clicked!")}
            >
              Find Your Song 
            </RippleButton>
          </div>
          </div>
          </ClickSpark>
        </div>
      </div>
    </>
  );
}