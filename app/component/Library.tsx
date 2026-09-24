import React from 'react';
import Gymcard from './Gymcard';
import { Exercise } from '../types/gymtypes';
const getLibrary = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  if (!res.ok) throw new Error('fetching is not successful');
  return res.json();
};
const Library = async () => {
  const exercises = await getLibrary();
  return (
    <div className="container mx-auto">
      <div>
        <h1>THE LIBRARY</h1>
        <p>Tweleve lifts covering every major muscle group</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {exercises.map((exercise: Exercise) => (
          <Gymcard key={exercise.id} exercise={exercise}></Gymcard>
        ))}
      </div>
    </div>
  );
};

export default Library;
