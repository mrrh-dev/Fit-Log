import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="bg-[#0d0f14] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-lime-400 text-xs mb-3 sm:text-sm font-bold ">
              WORKOUT LIBRARY
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              TRAIN WITH INTENT.
              <br className="hidden sm:inline" />
              LOG EVERY SET
            </h1>
            <p className="mt-4 sm:mt-5 text-gray-500 text-sm sm:text-base leading-relaxed max-w-[500px] mx-auto lg:mx-0">
              {`Fitlog is a dark,no-nonsense gym companion:pick a lift,lock it
            into today's plan,and watch thr week's work add up`}
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
              <Link href="/library">
                <button className="px-6 py-3 text-sm font-semibold text-black rounded-2xl bg-lime-500 hover:opacity-95 shadow-sm">
                  BROWSE WORKOUTS
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
              <Image
                src="/banner.png"
                alt="banner img"
                fill
                className="object-contain"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
