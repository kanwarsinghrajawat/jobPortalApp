import { configureStore } from "@reduxjs/toolkit";
import jobsDataSlice from "./reducer";
export const store = configureStore({
  reducer: {
    jobsDetailFetch: jobsDataSlice,
  },
});
