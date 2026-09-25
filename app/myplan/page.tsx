'use client';
import React, { useContext, useState } from 'react';
import { ExerciseContext } from '../contexts/Exercise';
import Link from 'next/link';
import Todayplan from '../component/Todayplan';
import Saved from '../component/Saved';

const Myplanpage = () => {
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
  const [buttontype, setbuttontype] = useState<`Today's Plan` | 'Saved'>(
    'Saved',
  );
  const handlebuttonchange = (type: `Today's Plan` | 'Saved') => {
    setbuttontype(type);
  };
  return (
    <div className="container mx-auto">
      <div className="mt-12">
        <h1 className="text-3xl font-bold">MY PLAN</h1>
        <p className="text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* plan and save table */}
      <div className="w-full h-45 grid grid-cols-3 p-6 items-center mt-8 rounded-2xl bg-[#0d0f14] border border-gray-900 divide-x divide-gray-800/40">
        {/* 1st column */}
        <div className="">
          <div>
            <p>Exercise</p>
            <p>{plan.length}</p>
          </div>
        </div>
        {/* 2nd column */}
        <div className="">
          <div>
            <p>Duration</p>
            <p>
              {plan.reduce((acc, exercise) => {
                return acc + exercise.duration;
              }, 0)}
            </p>
          </div>
        </div>
        {/* 3rd column */}
        <div className="">
          <div>
            <p>Calories</p>
            <p>
              {plan.reduce((acc, exercise) => {
                return acc + exercise.caloriesBurned;
              }, 0)}
            </p>
          </div>
        </div>
      </div>

      {/* today paln and saved and sort section */}
      <div className="w-70 h-12 mt-8 rounded-2xl bg-gray-900">
        <div className="flex justify-between px-4 items-center p-1">
          <button
            onClick={() => handlebuttonchange(`Today's Plan`)}
            className={`${buttontype === `Today's Plan` ? 'btn btn-ghost bg-gray-800 hover:bg-gray-800 rounded-2xl' : ''} `}
          >
            {`Today's Plan`}
          </button>
          <button
            onClick={() => handlebuttonchange(`Saved`)}
            className={`${buttontype === 'Saved' ? 'btn btn-ghost bg-gray-800 hover:bg-gray-800 rounded-2xl' : ''}`}
          >
            Saved
          </button>
        </div>
      </div>
      <div>
        <div>
          {buttontype === `Today's Plan` && countplan === 0 ? (
            <div className="w-full h-80 mt-4 flex items-center justify-center  border-gray-800 border-2 border-dotted rounded-xl">
              <div>
                <h1 className="mx-12 text-xl font-bold ">NOTHING HERE YET</h1>
                <p>Browse the library and add a lift to get today moving.</p>
                <button className="px-6 py-2.5 mt-8 mx-18 text-sm font-semibold text-black rounded-2xl bg-lime-500 hover:opacity-95 shadow-sm">
                  <Link href="/workout">Go to workouts</Link>
                </button>
              </div>
            </div>
          ) : (
            ''
          )}

          {buttontype === `Saved` && countsave === 0 ? (
            <div className="w-full h-80 mt-4 flex items-center justify-center  border-gray-800 border-2 border-dotted rounded-xl">
              <div>
                <h1 className="mx-12 text-xl font-bold ">NOTHING HERE YET</h1>
                <p>Browse the library and add a lift to get today moving.</p>
                <button className="px-6 py-2.5 mt-8 mx-18 text-sm font-semibold text-black rounded-2xl bg-lime-500 hover:opacity-95 shadow-sm">
                  <Link href="/workout">Go to workouts</Link>
                </button>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      {buttontype === `Today's Plan` ? (
        <Todayplan></Todayplan>
      ) : (
        <Saved></Saved>
      )}
    </div>
  );
};

export default Myplanpage;
