'use client';
import { useEffect, useState } from 'react';

export default function WaterTracker() {
  const [count, setCount] = useState(0);
  const maxGlasses = 8;

  useEffect(() => {
    const stored = localStorage.getItem('waterCount');
    if (stored) setCount(parseInt(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('waterCount', count);
  }, [count]);

  const increment = () => {
    if (count < maxGlasses) setCount(prev => prev + 1);
  };

  const reset = () => setCount(0);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">💧 Water Intake</h2>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          +1 Glass
        </button>
        <button
          onClick={reset}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Reset
        </button>
      </div>
      <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          style={{ width: `${(count / maxGlasses) * 100}%` }}
          className="h-full bg-blue-400 transition-all"
        ></div>
      </div>
      <p className="text-sm mt-2 text-center">
        {count} / {maxGlasses} glasses
      </p>
    </div>
  );
}
