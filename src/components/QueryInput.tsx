import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery, querySuccess, queryFailure } from "../redux/querySlice";
import mockSuggestions from "../utils/mockSuggestions";

const QueryInput: React.FC = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSuggestions(mockSuggestions(value)); 
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setQuery(suggestion);
    setSuggestions([]); 
  };

  const handleQuery = () => {
    setLoading(true);
    if (!query.trim()) return;

    dispatch(submitQuery(query));

    setTimeout(() => {
      const lowerQuery = query.toLowerCase();

      const validKeywords = [
        "sales",
        "revenue",
        "customer",
        "order",
        "profit",
        "expenses",
        "marketing",
        "inventory",
      ];

      if (validKeywords.some((keyword) => lowerQuery.includes(keyword))) {

      dispatch(querySuccess([
        { name: "Jan", value: Math.floor(Math.random() * 500) + 100 },
        { name: "Feb", value: Math.floor(Math.random() * 700) + 200 },
        { name: "Mar", value: Math.floor(Math.random() * 600) + 300 },
        { name: "Apr", value: Math.floor(Math.random() * 800) + 400 },
        { name: "May", value: Math.floor(Math.random() * 1000) + 500 },
      ]));
        
      } else {
        dispatch(queryFailure("No data found for this query."));
      }
      setLoading(false);
    }, 2500);

    setSuggestions([]); 
    setQuery(""); 
  };


  return (
    <div className="relative flex flex-col items-center space-y-4 w-[700px] bg-gray-800 p-6 rounded-lg shadow-lg">
      <input
        type="text"
        className="px-4 py-2 border rounded-lg w-full shadow-sm bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
        placeholder="Ask a business question..."
        value={query}
        onChange={handleChange}
      />

      {suggestions.length > 0 && (
        <ul className="absolute top-16 left-0 w-full bg-gray-700 border border-gray-600 rounded-lg shadow-md z-10 text-white">
          {suggestions.map((s, index) => (
            <li
              key={index}
              className="p-3 cursor-pointer hover:bg-gray-600 text-lg"
              onClick={() => handleSelectSuggestion(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={handleQuery}
        disabled={loading} 
        className={`px-6 py-2 rounded-lg w-full font-semibold text-lg transition-all 
      ${
        loading
          ? "bg-blue-300 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600 text-white"
      }
    `}
      >
        {loading ? "Processing..." : "Submit Query"}
      </button>
    </div>
  );
};

export default QueryInput;
