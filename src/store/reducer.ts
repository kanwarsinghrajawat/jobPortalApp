import { createSlice } from "@reduxjs/toolkit";

const jobsDataSlice = createSlice({
  name: "jobsData",
  initialState: {
    jobDetails: null,
    searchFilter: "",
    selectedFilter: {
      experience: [],
      employees: [],
      location: [],
      jobType: [],
      jobRole: [],
      salary: [],
    },
  },
  reducers: {
    jobUpdate: (state, action) => {
      state.jobDetails = action.payload;
    },
    searchFilterUpdate: (state, action) => {
      state.searchFilter = action.payload;
    },
    selectedFilterUpdate: (state, action) => {
      const { filterKey, selectedValues } = action.payload;
      state.selectedFilter = {
        ...state.selectedFilter,
        [filterKey]: selectedValues,
      };
    },
  },
});

export const { jobUpdate, searchFilterUpdate, selectedFilterUpdate } =
  jobsDataSlice.actions;
export default jobsDataSlice.reducer;
