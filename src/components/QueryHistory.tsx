import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { restoreQuery } from "../redux/querySlice";

const QueryHistory: React.FC = () => {
  const history = useSelector((state: RootState) => state.query.history);
  const dispatch = useDispatch();

  const handleHistoryClick = (queryData: {
    query: string;
    isError: boolean;
    result: { name: string; value: number }[] | null;
    error: string | null;
  }) => {
    dispatch(restoreQuery(queryData));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg overflow-y-auto text-white">
      <ul className="space-y-2">
        {history.length === 0 ? (
          <li className="text-gray-400">No queries yet</li>
        ) : (
          history.map((entry, index) => (
            <li
              key={index}
              className={`p-2 rounded-md cursor-pointer ${
                entry.isError
                  ? "bg-gray-700 text-red-400"
                  : "bg-gray-700 text-white"
              }`}
              onClick={() => handleHistoryClick(entry)}
            >
              {entry.query}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default QueryHistory;
