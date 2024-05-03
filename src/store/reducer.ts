import { createSlice } from "@reduxjs/toolkit";

const jobsDataSlice = createSlice({
  name: "jobsData",
  initialState: {
    jobDetails: null,
    searchFilter: "",
    filterCount: 0,
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
    selectedFilterCount: (state, action) => {
      return {
        ...state,
        filterCount: action.payload,
      };
    },
    // clearFilters: (state) => {
    //   state.selectedFilter = {
    //     experience: [],
    //     employees: [],
    //     location: [],
    //     jobType: [],
    //     jobRole: [],
    //     salary: [],
    //   };
    // },
  },
});

export const {
  jobUpdate,
  searchFilterUpdate,
  selectedFilterUpdate,
  // clearFilters
  selectedFilterCount,
} = jobsDataSlice.actions;
export default jobsDataSlice.reducer;
