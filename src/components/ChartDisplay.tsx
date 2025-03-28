import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Area,AreaChart,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const ChartDisplay: React.FC = () => {
  const { result, loading, error } = useSelector(
    (state: RootState) => state.query
  );
  const [chartType, setChartType] = useState("Bar"); 

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[600px] h-[450px] text-white flex flex-col">
      <h2 className="text-lg font-semibold text-blue-400 mb-4 text-center">
        Query Insights
      </h2>

      <div className="mb-4 text-center">
        <label className="text-gray-300 mr-2">Select Chart:</label>
        <select
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
          className="bg-gray-700 text-white px-3 py-1 rounded-md"
        >
          <option value="Bar">Bar Chart</option>
          <option value="Line">Line Chart</option>
          <option value="Pie">Pie Chart</option>
        </select>
      </div>

      {loading ? (
        <p className="text-blue-400 animate-pulse text-center">
          Processing your query... ⏳
        </p>
      ) : error ? (
        <p className="text-red-400 text-center">{error}</p>
      ) : result && result.length > 0 ? (
        <div className="flex items-center justify-center w-full h-full">
          <ResponsiveContainer width="100%" height="90%">
            {chartType === "Bar" ? (
              <BarChart data={result}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                <XAxis dataKey="name" stroke="#CBD5E1" />
                <YAxis stroke="#CBD5E1" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    borderRadius: "8px",
                    border: "1px solid #4B5563",
                    color: "#E5E7EB",
                    fontSize: "14px",
                    padding: "10px",
                  }}
                />
                <defs>
                  <linearGradient id="barColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#4F46E5" />
                  </linearGradient>
                </defs>
                <Bar
                  dataKey="value"
                  fill="url(#barColor)"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            ) : chartType === "Line" ? (
              <AreaChart data={result}>
                <defs>
                  <linearGradient id="areaColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                <XAxis dataKey="name" stroke="#CBD5E1" />
                <YAxis stroke="#CBD5E1" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    color: "#E5E7EB",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="url(#areaColor)"
                  fill="url(#areaColor)"
                  strokeWidth={3}
                />
              </AreaChart>
            ) : (
              <PieChart>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    color: "#E5E7EB",
                  }}
                />
                <Pie
                  data={result}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#6366F1"
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                />
              </PieChart>
            )}
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-gray-400 text-center">
          Submit a query to see insights.
        </p>
      )}
    </div>
  );
};

export default ChartDisplay;
