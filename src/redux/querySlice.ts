import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QueryState {
  query: string;
  result: { name: string; value: number }[] | null;
  history: {
    query: string;
    isError: boolean;
    result: { name: string; value: number }[] | null;
    error: string | null
  }[];
  loading: boolean;
  error: string | null;
}

const initialState: QueryState = {
  query: "",
  result: null,
  history: [],
  loading: false,
  error: null,
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    submitQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      state.loading = true;
      state.error = null;
    },
    querySuccess: (state, action: PayloadAction<{ name: string; value: number }[]>) => {
      state.result = action.payload;
      state.loading = false;
      state.history.unshift({ query: state.query, isError: false, result: action.payload, error: null });
    },
    queryFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
      state.history.unshift({ query: state.query, isError: true, result: null, error: action.payload}); 
    },
    restoreQuery: (state, action: PayloadAction<{ query: string; result: { name: string; value: number }[] | null; error: string | null }>) => {
      state.result = action.payload.result;
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export const { submitQuery, querySuccess, queryFailure,restoreQuery } = querySlice.actions;
export default querySlice.reducer;
