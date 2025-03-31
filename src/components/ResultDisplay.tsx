import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const ResultDisplay: React.FC = () => {
  const { result, loading, error } = useSelector(
    (state: RootState) => state.query
  );

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg sm:w-[300px] w-full min-h-[150px] max-h-[500px] overflow-y-auto text-white">
      <h3 className="font-semibold text-blue-400 mb-2">Query Results:</h3>
      {loading && (
        <p className="text-blue-400 animate-pulse flex justify-center items-center h-full">
          Processing your query... ⏳
        </p>
      )}
      {error && (
        <p className="text-red-400 animate-pulse flex justify-center items-center h-full">
          {error}
        </p>
      )}
      {!loading && !error && result && result.length > 0 && (
        <ul className="list-disc pl-5 space-y-2">
          {result.map((data, index) => (
            <li
              key={index}
              className="bg-gray-700 p-3 rounded-md shadow-sm hover:bg-gray-600 transition-all"
            >
              {`${data.name}: ${data.value}`}
            </li>
          ))}
        </ul>
      )}
      {!loading && !error && !result && (
        <p className="text-gray-400 animate-pulse flex justify-center items-center h-full">
          Submit a query to see results.
        </p>
      )}
    </div>
  );
};

export default ResultDisplay;
