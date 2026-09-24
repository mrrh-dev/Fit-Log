'use client';
import React, { createContext, ReactNode, useState } from 'react';
import { Exercise } from '../types/gymtypes';

interface ExerciseContext {
  countplan: number;
  setCounterplan: React.Dispatch<React.SetStateAction<number>>;
  countsave: number;
  setCountersave: React.Dispatch<React.SetStateAction<number>>;
  plan: Exercise[];
  setPlan: React.Dispatch<React.SetStateAction<Exercise[]>>;
  save: Exercise[];
  setSave: React.Dispatch<React.SetStateAction<Exercise[]>>;
}

export const ExerciseContext = createContext<ExerciseContext>({
  countplan: 0,
  setCounterplan: () => {},
  countsave: 0,
  setCountersave: () => {},
  plan: [],
  setPlan: () => {},
  save: [],
  setSave: () => {},
});
const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  const [countplan, setCounterplan] = useState(0);
  const [countsave, setCountersave] = useState(0);
  const [plan, setPlan] = useState<Exercise[]>([]);
  const [save, setSave] = useState<Exercise[]>([]);
  const sharedData = {
    countplan,
    setCounterplan,
    countsave,
    setCountersave,
    plan,
    setPlan,
    save,
    setSave,
  };
  return (
    <ExerciseContext.Provider value={sharedData}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider;
