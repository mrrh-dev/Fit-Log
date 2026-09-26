import React from 'react';
import PlanCard from './PlanCard';
import { Exercise } from '../types/gymtypes';

interface TodayplanProps {
  exercises: Exercise[];
}

const Todayplan = ({ exercises }: TodayplanProps) => {
  return (
    <div>
      {exercises.map((exercise) => (
        <PlanCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
};

export default Todayplan;
