import React from 'react';
import SavedCard from './SavedCard';
import { Exercise } from '../types/gymtypes';

interface SavedProps {
  exercises: Exercise[];
}

const Saved = ({ exercises }: SavedProps) => {
  return (
    <div>
      {exercises.map((exercise) => (
        <SavedCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
};

export default Saved;
