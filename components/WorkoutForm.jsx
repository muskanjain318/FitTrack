'use client';
import { useState, useEffect } from 'react';

export default function WorkoutForm() {
  const [type, setType] = useState('Running');
  const [duration, setDuration] = useState('');
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('workouts')) || [];
    setWorkouts(stored);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = {
      type,
      duration: parseInt(duration),
      time: new Date().toLocaleTimeString(),
    };
    const updated = [...workouts, newWorkout];
    setWorkouts(updated);
    localStorage.setItem('workouts', JSON.stringify(updated));

    setType('Running');
    setDuration('');
  };

  const totalDuration = workouts.reduce((sum, w) => sum + w.duration, 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row items-center">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded-md p-2"
        >
          <option>Running</option>
          <option>Walking</option>
          <option>Yoga</option>
          <option>Gym</option>
          <option>Swimming</option>
        </select>
        <input
          type="number"
          placeholder="Duration (min)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
          className="border rounded-md p-2 w-full sm:w-40"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Add Workout
        </button>
      </form>

      <div className="mt-4">
        <h2 className="font-semibold text-lg mb-2">Workout Log</h2>
        <ul className="text-sm space-y-2">
          {workouts.map((workout, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{workout.type} - {workout.duration} min</span>
              <span className="text-gray-500">{workout.time}</span>
            </li>
          ))}
        </ul>
        <div className="mt-2 font-medium">Total: {totalDuration} min</div>
      </div>
    </div>
  );
}
