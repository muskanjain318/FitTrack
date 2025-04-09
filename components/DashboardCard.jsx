export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-3xl font-bold text-indigo-600">{value}</p>
    </div>
  );
}
