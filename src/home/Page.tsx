import { useState } from 'react';
import MyVantaComponent from "../components/ui/background";
import ClickSpark from "../components/elements/Click";
import RippleButton from "../components/elements/Btn1";
import WhatWeDo from "../whatwedo.tsx/Page";
import myImg1 from '../assets/images/headphone.png';
import myImg2 from '../assets/images/headphone_vector.png';

export default function Home() {
  const [zindex, setZIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(myImg1);

  const handleMouseEnter = () => {
    setZIndex(0);
    setImgSrc(myImg2);
  };
  const handleMouseLeave = () => {
    setZIndex(10);
    setImgSrc(myImg1);
  };

  return (
    <>
      <div className="h-screen min-h-screen w-full bg-black flex justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-5">
          <MyVantaComponent />
        </div>
        <div className="relative bg-transparent w-full flex flex-col items-center min-h-screen backdrop-blur-sm z-[5] mt-[-4%]  px-4">
          <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <div className="absolute w-full h-full flex flex-col items-center justify-center z-[2]">
              <div className="relative flex w-full flex-col items-center justify-start flex-1">
                <div className="relative w-full flex top-11 flex-col items-center">
                  <p
                    className="absolute w-7xl top-0 left-1/2-translate-x-1/2  text-stroke-1 bg-clip-text bg-gradient-to-b via-emerald-200 from-emerald-50 to-emerald-900 text-[700%] z-20 text-transparent font-extrabold text-center  select-none"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>

                    YOUR MOOD
                  </p>
                  <img
                    src={imgSrc}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] md:w-[500px] pointer-events-none select-none"
                    style={{ marginTop: '0.5rem', zIndex: zindex }}

                  />
                  <p

                    className="absolute top-0 w-7xl left-1/2-translate-x-1/2 bg-clip-text  bg-gradient-to-b via-emerald-200 from-emerald-50 to-emerald-900 text-[700%] text-transparent z-5 font-extrabold text-center select-none"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ marginTop: '7rem' }}
                  >
                    HAS A SOUNDTRACK
                  </p>
                  {/* Space to maintain the layout */}
                  <div className="h-[320px] md:h-[630px]">
                  </div>
                  <p className="text-gray-200 text-xl mt-6 text-center">
                    Songs chosen to calm your mind and match your mood.
                  </p>
                  <RippleButton
                    className="font-jost m-3 duration-[600ms] relative flex items-center justify-center overflow-hidden rounded-full bg-[#036041] p-[1.3rem] text-[1.2rem] font-extrabold text-[#D0E3DD] transition hover:text-white hover:bg-[#D0E3DD] hover:shadow-lg hover:shadow-[#D0E3DD] hover:scale-105 uppercase"
                    onClick={() => window.location.href = '/song'}
                  >
                    FIND YOUR SONG
                  </RippleButton>
                </div>
              </div>
            </div>
          </ClickSpark>
        </div>
      </div>
      <div className="relative w-full h-screen backdrop-blur-sm flex flex-col items-center justify-start flex-1 ">
        <WhatWeDo />
      </div>
    </>
  );
}