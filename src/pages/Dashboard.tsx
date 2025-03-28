import React from "react";
import QueryInput from "../components/QueryInput";
import QueryHistory from "../components/QueryHistory";
import ResultDisplay from "../components/ResultDisplay";
import ChartDisplay from "../components/ChartDisplay";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <header className="w-full bg-gray-800 text-gray-200 py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">
          Gen AI Analytics Dashboard
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">Reports</li>
            <li className="hover:text-blue-400 cursor-pointer">Settings</li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-1">
        <aside className=" bg-gray-800 p-6 hidden md:block shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-blue-300">
            Query History
          </h2>
          <QueryHistory />
        </aside>

        <main className="flex-1 p-6  gap-4 flex flex-col items-center">
          <QueryInput />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            <ResultDisplay />
            <ChartDisplay />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
