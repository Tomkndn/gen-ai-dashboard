import React, { useState } from "react";
import QueryInput from "../components/QueryInput";
import QueryHistory from "../components/QueryHistory";
import ResultDisplay from "../components/ResultDisplay";
import ChartDisplay from "../components/ChartDisplay";

const Dashboard: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <header className="w-full bg-gray-800 text-gray-200 py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">
          Gen AI Analytics Dashboard
        </h1>

        <button
          className="md:hidden text-gray-200 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav
          className={`absolute top-14 right-6 bg-gray-700 p-4 rounded-lg shadow-lg transition-all md:static md:bg-transparent md:p-0 md:shadow-none md:flex z-60 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li className="hover:text-blue-400 cursor-pointer p-2">Home</li>
            <li className="hover:text-blue-400 cursor-pointer p-2">Reports</li>
            <li className="hover:text-blue-400 cursor-pointer p-2">Settings</li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-1">
        <aside className="hidden md:block bg-gray-800 p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-blue-300">
            Query History
          </h2>
          <QueryHistory setHistoryOpen={setHistoryOpen} />
        </aside>

        <button
          className="md:hidden fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg z-50"
          onClick={() => setHistoryOpen(!historyOpen)}
        >
          📜
        </button>

        {historyOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col p-6 z-50">
            <button
              className="self-end text-2xl text-gray-200"
              onClick={() => setHistoryOpen(false)}
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4 text-blue-300">
              Query History
            </h2>
            <QueryHistory setHistoryOpen={setHistoryOpen} />
          </div>
        )}

        <main className="flex-1 p-6 flex flex-col items-center">
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
