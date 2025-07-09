import { useState } from 'react';
import MyVantaComponent from "../components/ui/background";
import ClickSpark from "../components/elements/Click";
import RippleButton from "../components/elements/Btn1";
import WhatWeDo from "../whatwedo.tsx/Page";
import myImg1 from '../assets/images/headphone.png';
import myImg2 from '../assets/images/headphone_vector.png';

export default function Home() {
  const [zindex, setZIndex] = useState(10);
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
      <div className="min-h-screen w-full bg-black flex justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-5">
          <MyVantaComponent />
        </div>
        <div className="relative w-full flex flex-col items-center min-h-screen z-[15] mt-[30%] md:mt-[-2%] lg:mt[-2%] xl:mt-[-2%] px-2 sm:px-4">
          <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <div className="absolute w-full h-full flex flex-col items-center justify-center z-[2]">
              <div className="relative flex w-full flex-col items-center justify-start flex-1">
                <div
                  className="relative w-full flex flex-col items-center m-2">
                  <p
                  className="absolute w-full top-0 left-1/2 -translate-x-1/2 text-stroke-1 bg-clip-text bg-gradient-to-b from-white via-emerald-400 to-emerald-900 text-[3.5rem] sm:text-[3.5rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[8rem] z-5 text-transparent font-extrabold text-center select-none leading-tight"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  >
                  YOUR MOOD
                  </p>
                  <img
                  src={imgSrc}
                  className="absolute top-[0.5rem] sm:top-5  md:top-6 xl:top-6 left-1/2 -translate-x-1/2 w-[300px] sm:w-[300px] md:w-[400px] lg:w-[440px] xl:w-[520px] pointer-events-none select-none"
                  style={{ zIndex: zindex }}
                  alt="Headphone"
                  />
                  <p
                  className="absolute w-full left-1/2 -translate-x-1/2 top-[4rem] sm:top-[7rem] md:top-[6rem]  lg:top-[9rem] text-stroke-1 bg-clip-text bg-gradient-to-b  from-white via-emerald-400 to-emerald-900 text-transparent font-extrabold text-center select-none z-5 text-[35px] sm:text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[8rem] leading-tight"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  >
                  HAS A SOUNDTRACK
                  </p>
                  <div className="h-[450px] sm:h-[240px] md:h-[520px] lg:h-[570px] xl:h-[670px]" />
                  <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 md:mt-6 text-center px-2 max-w-[95vw] sm:max-w-[85vw] md:max-w-[65vw]">
                  Songs chosen to calm your mind and match your mood.
                  </p>
                  <RippleButton
                  className="font-jost m-7 sm:m-3 md:m-2 lg-2 duration-[600ms] relative flex items-center justify-center overflow-hidden rounded-full bg-[#036041] p-2 sm:p-3 md:p-5 text-base sm:text-lg md:text-[1.3rem] font-extrabold text-[#D0E3DD] transition hover:text-white hover:bg-[#D0E3DD] hover:shadow-lg hover:shadow-[#D0E3DD] hover:scale-105 uppercase"
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
      <div className="relative w-full min-h-[60vh] md:h-screen z-[10] flex flex-col items-center justify-start flex-1 mb-25">
        <WhatWeDo />
      </div>
    </>
  );
}
