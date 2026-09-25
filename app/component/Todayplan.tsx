import React, { useContext, useState } from 'react';
import { ExerciseContext } from '../contexts/Exercise';
import Image from 'next/image';
import { FaRegClock } from 'react-icons/fa';
import { IoMdFlame } from 'react-icons/io';
import { CiSquareRemove, CiStar } from 'react-icons/ci';
import Link from 'next/link';
import PlanCard from './PlanCard';

const Todayplan = () => {
  const { plan } = useContext(ExerciseContext);

  return (
    <div>
      {plan.map((exercise) => {
        return <PlanCard key={exercise.id} exercise={exercise}></PlanCard>;
      })}
    </div>
  );
};

export default Todayplan;
