import Detailgymcard from '@/app/component/Detailgymcard';
import { Exercise } from '@/app/types/gymtypes';
import Image from 'next/image';
import React from 'react';
export interface Paramsprops {
  params: Promise<{ gymid: number }>;
}

const Gymdetailspage = async ({ params }: Paramsprops) => {
  const { gymid } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${gymid}`);
  const exercise: Exercise = await res.json();
  return (
    <div className="container mx-auto px-4 w-full mt-8">
      {exercise && <Detailgymcard exercise={exercise} />}
    </div>
  );
};

export default Gymdetailspage;
