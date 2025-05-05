
import MyVantaComponent from "./components/ui/background";
import RippleButton from "./components/ui/btn1";
import VerticalTiles from "./components/ui/verticaltiles";

export default function App() {
  return (
    <>
      <VerticalTiles/>
      <div className="min-h-screen w-full flex justify-center   relative overflow-hidden">
          <MyVantaComponent />
        <div className="relative w-full mih-h-screen backdrop-blur-sm  z-[3] pt-40 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center">
              <p className="bg-clip-text bg-gradient-to-b from-emerald-100 to-emerald-400 text-7xl text-transparent font-extrabold">Lift My Mind</p>
              <p className="text-gray-200 text-xl mt-4">Your journey to mental wellness starts here.</p>
            </div>
            <RippleButton 
            style={{
              backgroundColor: "#cbfe7e",
              color: "#0e352e",
              border: "2px solid #0e352e",
              padding: "10px 20px",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            >
              Get Started
            </RippleButton>
          </div>
        </div>      
      </div>
    </>
  );
}