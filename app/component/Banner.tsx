import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
        <div className="w-full md:w-1/2 text-center md:text-left lg:-mt-30">
          <p className="text-lime-400">WORKOUT LIBRARY</p>
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
            TRAIN WITH INTENT.LOG <span>EVERY SET</span>
          </h1>
          <p className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed max-w-[650px] mx-auto md:mx-0">
            {`Fitlog is a dark,no-nonsense gym companion:pick a lift,lock it
            into today's plan,and watch thr week's work add up`}
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
            <button className="px-6 py-3 text-sm font-semibold text-black rounded-2xl bg-lime-500 hover:opacity-95 shadow-sm">
              BROWSE WORKOUTS
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center -mt-10">
          <Image
            src="/banner.png"
            alt="banner img"
            width={300}
            height={300}
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
