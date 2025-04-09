'use client';
import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function WeightChart() {
  const [weightData, setWeightData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('weightTrend')) || [];
    setWeightData(storedData);
  }, []);

  if (weightData.length === 0) {
    return (
      <p className="text-gray-500 text-sm mt-4">
        No weight data available. Please add an entry.
      </p>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Weight Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={weightData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="#6366F1"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
