'use client';
import { useState, useEffect } from 'react';

export default function MealForm() {
  const [mealType, setMealType] = useState('Breakfast');
  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState('');
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const storedMeals = JSON.parse(localStorage.getItem('meals')) || [];
    setMeals(storedMeals);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeal = {
      type: mealType,
      name: mealName,
      calories: parseInt(calories),
      time: new Date().toLocaleTimeString(),
    };

    const updatedMeals = [...meals, newMeal];
    setMeals(updatedMeals);
    localStorage.setItem('meals', JSON.stringify(updatedMeals));

    // Clear fields
    setMealType('Breakfast');
    setMealName('');
    setCalories('');
  };

  const totalCalories = meals.reduce((acc, meal) => acc + meal.calories, 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row items-center">
        <select
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          className="border rounded-md p-2"
        >
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Snack</option>
        </select>
        <input
          type="text"
          placeholder="Meal Name"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
          required
          className="border rounded-md p-2 w-full sm:w-40"
        />
        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
          className="border rounded-md p-2 w-full sm:w-32"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
        >
          Add Meal
        </button>
      </form>

      <div className="mt-4">
        <h2 className="font-semibold text-lg mb-2">Logged Meals</h2>
        <ul className="text-sm space-y-2">
          {meals.map((meal, index) => (
            <li key={index} className="flex justify-between">
              <span>{meal.type} - {meal.name} ({meal.calories} kcal)</span>
              <span className="text-gray-500">{meal.time}</span>
            </li>
          ))}
        </ul>
        <div className="mt-2 font-medium">Total: {totalCalories} kcal</div>
      </div>
    </div>
  );
}
