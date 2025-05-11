'use client';
import { useState } from 'react';

export default function WeightForm() {
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date().toISOString().split('T')[0];
    const newEntry = { date: currentDate, weight: parseFloat(weight) };

    const existingData = JSON.parse(localStorage.getItem('weightTrend')) || [];
    const updatedData = [...existingData, newEntry];

    localStorage.setItem('weightTrend', JSON.stringify(updatedData));
    setWeight('');
    window.location.reload(); // refresh to update chart
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md mt-6 flex flex-col sm:flex-row gap-4 items-center"
    >
      <label className="text-sm font-medium text-gray-700">
        Enter Weight (kg):
      </label>
      <input
        type="number"
        step="0.1"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required
        className="border border-gray-300 rounded-md p-2 w-full sm:w-40"
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
      >
        Add
      </button>
    </form>
  );
}
