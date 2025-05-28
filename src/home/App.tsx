import MyVantaComponent from "../components/ui/background";
import VerticalTiles from "../components/ui/verticaltiles";
import ClickSpark from "../components/elements/Click";
import GooeyNav from "../components/elements/Nav";

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
            <div className="flex flex-col items-start justify-start h-max flex-1 mt-24">
            <p className="bg-clip-text bg-gradient-to-b from-emerald-100 to-emerald-400 text-7xl text-transparent font-extrabold text-center">
              Lift My Mind
            </p>
            <p className="text-gray-200 text-xl mt-4 text-center">
              Your journey to mental wellness starts here.
            </p>

          </div>
          </div>
          </ClickSpark>
        </div>
      </div>
    </>
  );
}