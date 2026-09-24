import React from 'react';
import { CiDumbbell } from 'react-icons/ci';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-900 h-30 mt-10">
      <div className="container mx-auto  flex justify-between items-center mt-13">
        <div className="flex justify-between items-center gap-2">
          <CiDumbbell className="text-lime-500 text-2xl" />
          <h2>FITLOG</h2>
        </div>
        <div className="text-zinc-500 font-medium">
          © 2026 FitLog — Workout Library.Train hard,log honest
        </div>
      </div>
    </footer>
  );
};

export default Footer;
