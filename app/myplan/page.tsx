'use client';

import React, { useContext, useState } from 'react';
import { ExerciseContext } from '../contexts/Exercise';
import Link from 'next/link';
import Todayplan from '../component/Todayplan';
import Saved from '../component/Saved';

type SortOption = 'Duration' | 'Calories' | 'Rating';

const Myplanpage = () => {
  const { countplan, countsave, plan, save } = useContext(ExerciseContext);

  // Today's Plan / Saved
  const [buttontype, setbuttontype] = useState<`Today's Plan` | 'Saved'>(
    'Saved',
  );

  // Sorting
  const [sortBy, setSortBy] = useState<SortOption>('Duration');

  const handlebuttonchange = (type: `Today's Plan` | 'Saved') => {
    setbuttontype(type);
  };

  // Which list are we currently displaying?
  const currentList = buttontype === `Today's Plan` ? plan : save;

  // Sort current list
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === 'Duration') {
      return a.duration - b.duration;
    }

    if (sortBy === 'Calories') {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === 'Rating') {
      return a.rating - b.rating;
    }

    return 0;
  });

  return (
    <div className="container mx-auto">
      {/* Header */}
      <div className="mt-12">
        <h1 className="text-3xl font-bold">MY PLAN</h1>

        <p className="text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Plan / Saved Statistics */}
      <div className="w-full h-45 grid grid-cols-3 p-6 items-center mt-8 rounded-2xl bg-[#0d0f14] border border-gray-900 divide-x divide-gray-800/40">
        {/* Today's Plan Statistics */}
        {buttontype === `Today's Plan` && (
          <>
            <div className="flex flex-col gap-1 pl-4">
              <p className="text-lg text-gray-500 font-medium tracking-wide">
                Exercise
              </p>

              <p className="text-4xl mt-2 font-black text-[#ccff00] tracking-tighter">
                {plan.length}
              </p>
            </div>

            <div className="flex flex-col gap-1 pl-6">
              <p className="text-lg text-gray-500 font-medium tracking-wide">
                Duration
              </p>

              <p className="text-4xl mt-2 font-black text-white tracking-tighter">
                {plan.reduce((acc, exercise) => {
                  return acc + exercise.duration;
                }, 0)}
              </p>
            </div>

            <div className="flex flex-col gap-1 pl-6">
              <p className="text-lg text-gray-500 font-medium tracking-wide">
                Calories
              </p>

              <p className="text-4xl mt-2 font-black text-white tracking-tighter">
                {plan.reduce((acc, exercise) => {
                  return acc + exercise.caloriesBurned;
                }, 0)}
              </p>
            </div>
          </>
        )}

        {/* Saved Statistics */}
        {buttontype === 'Saved' && (
          <>
            <div className="flex flex-col gap-1 pl-4">
              <p className="text-lg text-gray-500 font-medium tracking-wide">
                Exercise
              </p>

              <p className="text-4xl mt-2 font-black text-[#ccff00] tracking-tighter">
                {save.length}
              </p>
            </div>

            <div className="flex flex-col gap-1 pl-6">
              <p className="text-lg text-gray-500 font-medium tracking-wide">
                Duration
              </p>

              <p className="text-4xl mt-2 font-black text-white tracking-tighter">
                {save.reduce((acc, exercise) => {
                  return acc + exercise.duration;
                }, 0)}
              </p>
            </div>

            <div className="flex flex-col gap-1 pl-6">
              <p className="text-lg text-gray-500 font-medium tracking-wide">
                Calories
              </p>

              <p className="text-4xl mt-2 font-black text-white tracking-tighter">
                {save.reduce((acc, exercise) => {
                  return acc + exercise.caloriesBurned;
                }, 0)}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Today's Plan / Saved + Sort */}
      <div className="flex justify-between items-center mt-8">
        {/* Today's Plan / Saved buttons */}
        <div className="w-70 h-12 rounded-2xl bg-[#0d0f14]">
          <div className="flex justify-between px-4 items-center p-1">
            <button
              onClick={() => handlebuttonchange(`Today's Plan`)}
              className={`${
                buttontype === `Today's Plan`
                  ? 'btn btn-ghost bg-gray-800 hover:bg-gray-800 rounded-2xl'
                  : ''
              }`}
            >
              {`Today's Plan`}
            </button>

            <button
              onClick={() => handlebuttonchange('Saved')}
              className={`${
                buttontype === 'Saved'
                  ? 'btn btn-ghost bg-gray-800 hover:bg-gray-800 rounded-2xl'
                  : ''
              }`}
            >
              Saved
            </button>
          </div>
        </div>

        {/* Sort By */}
        <div className="flex items-center gap-3">
          <span className="text-gray-500">Sort By</span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="h-10 px-4 rounded-xl bg-[#0d0f14] border border-gray-800 text-white"
          >
            <option value="Duration">Duration</option>

            <option value="Calories">Calories</option>

            <option value="Rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Empty Today's Plan */}
      {buttontype === `Today's Plan` && countplan === 0 && (
        <div className="w-full h-80 mt-4 flex items-center justify-center border-gray-800 border-2 border-dotted rounded-xl">
          <div>
            <h1 className="mx-12 text-xl font-bold">NOTHING HERE YET</h1>

            <p>Browse the library and add a lift to get today moving.</p>

            <button className="px-6 py-2.5 mt-8 mx-18 text-sm font-semibold text-black rounded-2xl bg-lime-500 hover:opacity-95 shadow-sm">
              <Link href="/workout">Go to workouts</Link>
            </button>
          </div>
        </div>
      )}

      {/* Empty Saved */}
      {buttontype === 'Saved' && countsave === 0 && (
        <div className="w-full h-80 mt-4 flex items-center justify-center border-gray-800 border-2 border-dotted rounded-xl">
          <div>
            <h1 className="mx-12 text-xl font-bold">NOTHING HERE YET</h1>

            <p>Browse the library and add a lift to get today moving.</p>

            <button className="px-6 py-2.5 mt-8 mx-18 text-sm font-semibold text-black rounded-2xl bg-lime-500 hover:opacity-95 shadow-sm">
              <Link href="/workout">Go to workouts</Link>
            </button>
          </div>
        </div>
      )}

      {/* Display Sorted List */}
      {buttontype === `Today's Plan` ? (
        <Todayplan exercises={sortedList} />
      ) : (
        <Saved exercises={sortedList} />
      )}
    </div>
  );
};

export default Myplanpage;
