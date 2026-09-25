import React, { useContext } from 'react';
import { Exercise } from '../types/gymtypes';
import Image from 'next/image';
import { FaRegClock } from 'react-icons/fa';
import { IoMdFlame } from 'react-icons/io';
import { CiSquareRemove, CiStar } from 'react-icons/ci';
import Link from 'next/link';
import { ExerciseContext } from '../contexts/Exercise';
import { toast } from 'react-toastify';
export interface Exercisesaveprops {
  exercise: Exercise;
}
const SavedCard = ({ exercise }: Exercisesaveprops) => {
  const { countsave, setCountersave, save, setSave } =
    useContext(ExerciseContext);

  const handleremove = (exercise: Exercise) => {
    const remaining_exercise_save = save.filter(
      (exerciseplan) => exerciseplan.id !== exercise.id,
    );
    setSave(remaining_exercise_save);
    toast(`Remove ${exercise.name} exercise successfully`);
    setCountersave(countsave - 1);
  };
  return (
    <div
      key={exercise.id}
      className="w-full mt-6 p-4 rounded-2xl bg-gray-900 border border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all hover:border-zinc-700"
    >
      {/* Left Section: Image and Text info */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="relative overflow-hidden rounded-xl bg-gray-800 shrink-0">
          <Image
            src={exercise.image}
            alt={exercise.name}
            width={100}
            height={70}
            className="object-cover h-20 w-26"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-base truncate">
            {exercise.name}
          </h3>
          <p className="text-zinc-400 text-xs mt-0.5 capitalize">
            {exercise.equipment}
          </p>

          {/* Badges / Meta row */}
          <div className="mt-3 flex items-center gap-3 text-xs text-zinc-300 font-medium">
            <span className="flex items-center gap-1.5  px-2 py-1 rounded-md">
              <FaRegClock className="text-lime-400" />
              {exercise.duration} min
            </span>
            <span className="flex items-center gap-1.5  px-2 py-1 rounded-md">
              <IoMdFlame className="text-lime-400" />
              {exercise.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1.5  px-2 py-1 rounded-md">
              <CiStar className="text-lime-400 text-sm" />
              {exercise.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Right Section: Action Controls */}
      <div className="flex items-center gap-2 w-full sm:w-auto justify-end border-t border-gray-800 pt-3 sm:pt-0 sm:border-0">
        <Link href={`/exercise/${exercise.id}`}>
          <button className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-gray-800 rounded-xl transition-colors">
            View Details
          </button>
        </Link>
        {/* <button className="px-3 py-1.5 text-xs font-semibold text-black bg-lime-400 hover:bg-lime-700 rounded-xl ">
                     Mark as Done
                   </button> */}
        <button
          onClick={() => handleremove(exercise)}
          className="p-1.5 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
          aria-label="Remove exercise"
        >
          <CiSquareRemove className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SavedCard;
