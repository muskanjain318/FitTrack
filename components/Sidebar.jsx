export default function Sidebar() {
    return (
      <aside className="w-64 bg-white shadow-md h-screen p-6 hidden md:block">
        <h2 className="text-xl font-semibold mb-4">FitTrack</h2>
        <ul className="space-y-4">
          <li className="hover:text-indigo-600 cursor-pointer">Dashboard</li>
          <li className="hover:text-indigo-600 cursor-pointer">Workouts</li>
          <li className="hover:text-indigo-600 cursor-pointer">Meals</li>
          <li className="hover:text-indigo-600 cursor-pointer">Water</li>
          <li className="hover:text-indigo-600 cursor-pointer">Progress</li>
        </ul>
      </aside>
    );
  }
  