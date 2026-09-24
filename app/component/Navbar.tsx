'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { ExerciseContext } from '../contexts/Exercise';
const Navbar = () => {
  const { countplan, countsave } = useContext(ExerciseContext);
  const pathname = usePathname();
  const Links = (
    <>
      <li className={pathname === '/workout' ? 'text-lime-400 ' : ''}>
        <Link href="/workout">Workout</Link>
      </li>
      <li className={pathname === '/myplan' ? 'text-lime-500' : ''}>
        <Link href="/myplan">My Plan</Link>
      </li>
    </>
  );
  //const [ismenuopen, setismenuopen] = useState(false);
  return (
    <nav className="sticky top-0 bg-black z-50 border-b border-gray-900">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-3">
            <div>
              <Image
                src="/logo.png"
                alt="logo img"
                width={40}
                height={40}
              ></Image>
            </div>
            <div className="text-2xl">FITLOG</div>
          </div>
          <div className="hidden md:block">
            <ul className="text-lg flex gap-6 text-gray-500 font-semibold">
              {/* <li className="text-pink-500 cursor-pointer">Home</li>
              <li className="cursor-pointer">Technologies</li>
              <li className="cursor-pointer">Projects</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li> */}
              {Links}
            </ul>
          </div>

          <div className="flex items-center">
            <button className="btn btn-ghost text-gray-400 text-lg">
              <Link href="/myplan">Plan</Link>
            </button>{' '}
            <span className="text-black font-bold mt-1 w-8 h-8 rounded-full bg-lime-400 p-2 flex justify-center items-center">
              {countplan}
            </span>
            <button className="btn btn-ghost text-gray-400 text-lg">
              <Link href="/myplan">Saved</Link>
            </button>{' '}
            <span className="font-bold mt-1 w-8 h-8 rounded-full border-2 border-gray-600 p-2 flex justify-center items-center">
              {countsave}
            </span>
          </div>
          {/* <button
            onClick={() => setismenuopen(!ismenuopen)}
            className="md:hidden text-3xl text-gray-600 ml-2"
            aria-label="Toggle menu"
          >
            {ismenuopen ? '✕' : '☰'}
          </button> */}
        </div>

        {/* {ismenuopen && (
          <div className="md:hidden mt-4 border-t border-gray-200 pt-4">
            <ul className="flex flex-col gap-4 text-lg text-gray-500 font-semibold">
              {/*  <li className="text-pink-500 cursor-pointer">Home</li>
              <li className="cursor-pointer">Technologies</li>
              <li className="cursor-pointer">Projects</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li> 
              {Links}
            </ul>
          </div>
        )}  */}
      </div>
    </nav>
  );
};

export default Navbar;
