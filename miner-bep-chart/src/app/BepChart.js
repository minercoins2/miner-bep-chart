"use client";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";

export default function BepChart() {
  const days = Array.from({ length: 120 }, (_, i) => i + 1);
  const decay = 0.003;
  const levels = Array.from({ length: 12 }, (_, i) => i + 1);

  const data = days.map(day => {
    let obj = { day };
    levels.forEach(lv => {
      const initial = lv * 10;
      const dailyReward = initial * Math.pow(1 - decay, day - 1);
      obj[`Lv${lv}`] = (obj[`Lv${lv}`] || 0) + dailyReward;
    });
    return obj;
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        {levels.map(lv => (
          <Line
            key={lv}
            type="monotone"
            dataKey={`Lv${lv}`}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
