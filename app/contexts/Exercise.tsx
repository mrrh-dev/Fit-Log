'use client';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
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
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage once, on mount
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem('plan');
      const storedSave = localStorage.getItem('save');
      if (storedPlan) {
        const parsed = JSON.parse(storedPlan);
        setPlan(parsed);
        setCounterplan(parsed.length);
      }
      if (storedSave) {
        const parsed = JSON.parse(storedSave);
        setSave(parsed);
        setCountersave(parsed.length);
      }
    } catch (e) {
      console.error('Failed to parse stored exercise data', e);
    } finally {
      setHydrated(true);
    }
  }, []);

  // Persist plan whenever it changes (after hydration)
  useEffect(() => {
    if (hydrated) localStorage.setItem('plan', JSON.stringify(plan));
  }, [plan, hydrated]);

  // Persist save whenever it changes (after hydration)
  useEffect(() => {
    if (hydrated) localStorage.setItem('save', JSON.stringify(save));
  }, [save, hydrated]);

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
