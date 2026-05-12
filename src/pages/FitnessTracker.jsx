import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EXERCISES = ["Bench Press", "Squat", "Deadlift", "Pull Up", "Shoulder Press", "Bicep Curl", "Tricep Dip", "Plank"];
const defaultForm = { exercise: EXERCISES[0], sets: "", reps: "", weight: "" };

function LineChart({ data }) {
  if (data.length === 0) return null;
  const W = 500, H = 180, pad = 40;
  const weights = data.map((d) => d.weight);
  const minY = Math.min(...weights), maxY = Math.max(...weights);
  const rangeY = maxY - minY || 1;

  const px = (i) => pad + (i / (data.length - 1 || 1)) * (W - pad * 2);
  const py = (v) => H - pad - ((v - minY) / rangeY) * (H - pad * 2);

  const points = data.map((d, i) => `${px(i)},${py(d.weight)}`).join(" ");

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
      <polyline fill="none" stroke="#a855f7" strokeWidth="2.5" points={points} />
      {data.map((d, i) => (
        <g key={i}>
          <circle cx={px(i)} cy={py(d.weight)} r="4" fill="#a855f7" />
          <text x={px(i)} y={H - 8} textAnchor="middle" fontSize="10" fill="#6b7280">{d.date}</text>
        </g>
      ))}
      <text x={8} y={pad} fontSize="10" fill="#6b7280">{maxY}kg</text>
      <text x={8} y={H - pad} fontSize="10" fill="#6b7280">{minY}kg</text>
    </svg>
  );
}

export default function FitnessTracker() {
  const [logs, setLogs] = useState(() => {
    const saved = localStorage.getItem("fitness-logs");
    return saved ? JSON.parse(saved) : [];
  });
  const [form, setForm] = useState(defaultForm);
  const [selectedExercise, setSelectedExercise] = useState(EXERCISES[0]);

  useEffect(() => {
    localStorage.setItem("fitness-logs", JSON.stringify(logs));
  }, [logs]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.sets || !form.reps || !form.weight) return;
    setLogs((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...form,
        sets: Number(form.sets),
        reps: Number(form.reps),
        weight: Number(form.weight),
        date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short" }),
      },
    ]);
    setForm(defaultForm);
  };

  const chartData = logs.filter((l) => l.exercise === selectedExercise);
  const stats = {
    total: logs.length,
    exercises: [...new Set(logs.map((l) => l.exercise))].length,
    maxWeight: logs.length ? Math.max(...logs.map((l) => l.weight)) : 0,
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">

        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-purple-400">Fitness Tracker</h1>
            <p className="text-gray-500 text-sm mt-1">Log your workouts and track progress</p>
          </div>
          <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition border border-gray-700 hover:border-purple-500 px-4 py-2 rounded-full">
            ← Back
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: "Total Logs", value: stats.total },
            { label: "Exercises", value: stats.exercises },
            { label: "Max Weight (kg)", value: stats.maxWeight },
          ].map((s) => (
            <div key={s.label} className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-purple-400">{s.value}</p>
              <p className="text-gray-500 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Log Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
          <h2 className="text-lg font-semibold mb-5">Log a Workout</h2>
          <form onSubmit={handleAdd} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 md:col-span-1">
              <label className="text-xs text-gray-500 mb-1 block">Exercise</label>
              <select
                value={form.exercise}
                onChange={(e) => setForm({ ...form, exercise: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
              >
                {EXERCISES.map((ex) => <option key={ex}>{ex}</option>)}
              </select>
            </div>
            {[
              { key: "sets", label: "Sets", placeholder: "e.g. 3" },
              { key: "reps", label: "Reps", placeholder: "e.g. 10" },
              { key: "weight", label: "Weight (kg)", placeholder: "e.g. 60" },
            ].map(({ key, label, placeholder }) => (
              <div key={key}>
                <label className="text-xs text-gray-500 mb-1 block">{label}</label>
                <input
                  type="number"
                  min="0"
                  placeholder={placeholder}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            ))}
            <div className="col-span-2 md:col-span-4">
              <button type="submit" className="px-8 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition">
                Add Log
              </button>
            </div>
          </form>
        </div>

        {/* Chart */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <h2 className="text-lg font-semibold">Progress Chart</h2>
            <select
              value={selectedExercise}
              onChange={(e) => setSelectedExercise(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
            >
              {EXERCISES.map((ex) => <option key={ex}>{ex}</option>)}
            </select>
          </div>
          {chartData.length < 2 ? (
            <p className="text-gray-600 text-sm text-center py-10">
              Log at least 2 {selectedExercise} sessions to see your progress chart.
            </p>
          ) : (
            <LineChart data={chartData} />
          )}
        </div>

        {/* History */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-5">Workout History</h2>
          {logs.length === 0 ? (
            <p className="text-gray-600 text-sm text-center py-6">No workouts logged yet.</p>
          ) : (
            <div className="space-y-3">
              {[...logs].reverse().map((log) => (
                <div key={log.id} className="flex items-center justify-between bg-gray-800 rounded-lg px-4 py-3">
                  <div className="flex items-center gap-4">
                    <span className="text-purple-400 font-medium text-sm">{log.exercise}</span>
                    <span className="text-gray-400 text-sm">{log.sets} sets × {log.reps} reps @ {log.weight}kg</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 text-xs">{log.date}</span>
                    <button onClick={() => setLogs((prev) => prev.filter((l) => l.id !== log.id))} className="text-gray-600 hover:text-red-400 transition text-xs">✕</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
