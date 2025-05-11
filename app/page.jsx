'use client';

import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import WeightChart from '../components/WeightChart';
import WeightForm from '../components/WeightForm';

import LogForm from '../components/LogForm';
import MealForm from '../components/MealForm';
import WorkoutForm from '../components/WorkoutForm';
import WaterTracker from '../components/WaterTracker';




export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard title="Workouts" value="4" />
          <DashboardCard title="Meals" value="6" />
          <DashboardCard title="Water (L)" value="2.5" />
        </div>
       
        <WeightForm />
      <WeightChart />
        <LogForm />
        <MealForm />
        <WorkoutForm/>
        <WaterTracker/>
      </main>
    </div>
  );
}
