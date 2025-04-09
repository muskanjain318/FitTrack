'use client';
import { useState, useEffect } from 'react';

export default function LogForm() {
  const [logs, setLogs] = useState({
    workout: '',
    meal: '',
    water: '',
  });

  const [savedLogs, setSavedLogs] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('fittrackLogs');
    if (saved) {
      setSavedLogs(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogs({ ...logs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('fittrackLogs', JSON.stringify(logs));
    setSavedLogs(logs);
    alert('Logs saved locally 🚀');
    setLogs({ workout: '', meal: '', water: '' });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6 space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-lg font-semibold mb-2">Log Your Day</h2>

        <div className="flex flex-col">
          <label className="mb-1">Workout</label>
          <input
            type="text"
            name="workout"
            value={logs.workout}
            onChange={handleChange}
            placeholder="e.g. 30 min running"
            className="border p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Meal</label>
          <input
            type="text"
            name="meal"
            value={logs.meal}
            onChange={handleChange}
            placeholder="e.g. Grilled chicken & salad"
            className="border p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Water Intake (ml)</label>
          <input
            type="number"
            name="water"
            value={logs.water}
            onChange={handleChange}
            placeholder="e.g. 2000"
            className="border p-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Save Logs
        </button>
      </form>

      {savedLogs && (
        <div className="mt-4 border-t pt-4">
          <h3 className="text-md font-semibold mb-2">Last Saved Log</h3>
          <p><strong>Workout:</strong> {savedLogs.workout}</p>
          <p><strong>Meal:</strong> {savedLogs.meal}</p>
          <p><strong>Water:</strong> {savedLogs.water} ml</p>
        </div>
      )}
    </div>
  );
}
