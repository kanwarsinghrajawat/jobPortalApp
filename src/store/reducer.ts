import { createSlice } from "@reduxjs/toolkit";

const jobsDataSlice = createSlice({
  name: "jobsData",
  initialState: {
    jobDetails: null,
    searchFilter: "",
    selectedFilter: {
      Experience: [],
      Employees: [],
      Location: [],
      JobType: [],
      JobRole: [],
      Salary: [],
    },
  },
  reducers: {
    jobUpdate: (state, action) => {
      state.jobDetails = action.payload;
    },
    searchFilterUpdate: (state, action) => {
      state.searchFilter = action.payload;
    },
  },
});

export const { jobUpdate, searchFilterUpdate } = jobsDataSlice.actions;
export default jobsDataSlice.reducer;
