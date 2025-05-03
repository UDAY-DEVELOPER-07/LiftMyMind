import React from "react";
import MyVantaComponent from "./components/background";

export default function App() {
  return (
    <>
      <div className="min-h-screen w-full flex justify-center   relative overflow-hidden">
          <MyVantaComponent />
        <div className="relative w-full mih-h-screen backdrop-blur-sm  z-[3] pt-40 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center">
              <h1 className="text-white text-4xl font-bold">Lift My Mind</h1>
              <p className="text-gray-300 mt-4">Your journey to mental wellness starts here.</p>
            </div>
          </div>
        </div>      
      </div>
    </>
  );
}