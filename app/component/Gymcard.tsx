import React from 'react';
import { Exercise } from '../types/gymtypes';
import Image from 'next/image';
import Link from 'next/link';
export interface Gymcardprops {
  exercise: Exercise;
}
const Gymcard = ({ exercise }: Gymcardprops) => {
  return (
    <Link href={`/exercise/${exercise.id}`}>
      <div className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-white">
        <Image
          src={exercise.image}
          alt={exercise.name}
          width={300}
          height={400}
          className="h-70 w-full object-cover"
        />
        <div className="p-3">
          <div className="mb-2 flex flex-wrap gap-1.5">
            {exercise.muscleGroups.slice(0, 2).map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-2 py-0.5 text-[9px] font-semibold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>
          <h2 className="text-base font-bold uppercase tracking-wide">
            {exercise.name}
          </h2>

          <p className="mt-1 text-[10px] text-zinc-400">{exercise.equipment}</p>

          <div className="mt-2 flex items-center justify-between text-[10px] text-zinc-300">
            <span className="flex items-center gap-1">
              <span className="text-lime-400">◷</span>
              {exercise.duration} min
            </span>
            <span className="flex items-center gap-1">
              <span className="text-lime-400">🔥</span>
              {exercise.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <span className="text-lime-400">★</span>
              {exercise.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Gymcard;
