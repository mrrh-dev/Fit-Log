'use client';
import React, { useContext } from 'react';
import { Exercise } from '../types/gymtypes';
import { FaRegBookmark } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import Image from 'next/image';
import { ExerciseContext } from '../contexts/Exercise';
import { toast } from 'react-toastify';

export interface Exerciseprops {
  exercise: Exercise;
}
const Detailgymcard = ({ exercise }: Exerciseprops) => {
  const {
    countplan,
    setCounterplan,
    countsave,
    setCountersave,
    plan,
    setPlan,
    save,
    setSave,
  } = useContext(ExerciseContext);
  const isadded = plan.some((item) => item.id === exercise.id);
  const issaved = save.some((item) => item.id === exercise.id);
  const handleaddplan = () => {
    if (isadded) toast.warn('This is already added');
    else {
      setCounterplan(countplan + 1);
      setPlan([...plan, exercise]);
      toast(`Added this Exercise to Today's Plan`);
    }
  };
  const handlesaved = () => {
    if (issaved) toast.warn('This is already saved');
    else {
      setCountersave(countsave + 1);
      setSave([...save, exercise]);
      toast(`Added this Exercise to Saved`);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">
      {exercise.image && (
        <div className="w-full rounded-2xl overflow-hidden ">
          <Image
            src={exercise.image}
            alt={exercise.name}
            width={600}
            height={700}
            className="w-full h-auto max-h-[600px] object-cover rounded-2xl"
          />
        </div>
      )}

      <div className="flex flex-col  gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-zinc-100 uppercase">
            {exercise.name}
          </h1>
          {exercise.description && (
            <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-xl">
              {exercise.description}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {exercise.muscleGroups && (
            <span className="bg-[#bfff00] text-black font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              {exercise.muscleGroups[0]}
            </span>
          )}
          {exercise.muscleGroups.length > 1 && (
            <span className="bg-[#bfff00] text-black font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              {exercise.muscleGroups[1]}
            </span>
          )}
        </div>

        <div className="w-full h-full p-4  rounded-2xl border-xl bg-[#0d0f14] flex justify-between items-center">
          <div className="text-gray-500 text-sm flex-1 divide-y divide-gray-900">
            <h2 className="py-1">EQUIPMENT</h2>
            <h2 className="py-1">DIFICULTY</h2>
            <h2 className="py-1">SETS</h2>
            <h2 className="py-1">REPS</h2>
            <h2 className="py-1">DURATION</h2>
            <h2 className="py-1">CALORIES</h2>
            <h2 className="py-1">RATING</h2>
          </div>
          <div className="text-gray-400 text-right flex-1 divide-y text-sm divide-gray-900">
            <p className="py-1">{exercise.equipment}</p>
            <p className="py-1">{exercise.difficulty}</p>
            <p className="py-1">{exercise.sets}</p>
            <p className="py-1">{exercise.reps}</p>
            <p className="py-1">{exercise.duration}</p>
            <p className="py-1">{exercise.caloriesBurned}</p>
            <p className="py-1">{exercise.rating}</p>
          </div>
        </div>

        {exercise.instructions && (
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-200 mb-3">
              Instructions
            </h3>
            {Array.isArray(exercise.instructions) ? (
              <ol className="space-y-2.5 text-zinc-300 text-sm font-sans leading-relaxed list-decimal list-inside pl-1">
                {exercise.instructions.map((step, index) => (
                  <li key={index} className="pl-1">
                    <span className="text-zinc-300">{step}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-line">
                {exercise.instructions}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => handleaddplan()}
            className="bg-[#bfff00] hover:bg-[#a6de00] text-black font-bold text-xs py-3 px-5 rounded-lg flex justify-center items-center gap-2 transition-all shadow-md"
          >
            <IoMdAdd className="text-base" /> Add to todays plan
          </button>

          <button
            onClick={() => handlesaved()}
            className="bg-transparent hover:bg-zinc-800 text-zinc-300 border border-zinc-700 font-semibold text-xs py-3 px-5 rounded-lg flex justify-center items-center gap-2 transition-all"
          >
            <FaRegBookmark className="text-xs text-zinc-400" /> Save for later
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detailgymcard;
