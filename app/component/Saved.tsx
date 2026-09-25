import React, { useContext } from 'react';
import { ExerciseContext } from '../contexts/Exercise';
import Image from 'next/image';
import { FaRegClock } from 'react-icons/fa';
import { IoMdFlame } from 'react-icons/io';
import { CiSquareRemove, CiStar } from 'react-icons/ci';
import Link from 'next/link';
import SavedCard from './SavedCard';

const Saved = () => {
  const { plan, setPlan, save, setSave } = useContext(ExerciseContext);
  return (
    <div>
      {save.map((exercise) => {
        return <SavedCard key={exercise.id} exercise={exercise}></SavedCard>;
      })}
    </div>
  );
};

export default Saved;
