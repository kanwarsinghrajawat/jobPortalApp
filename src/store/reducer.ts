import { createSlice } from "@reduxjs/toolkit";

const jobsDataSlice = createSlice({
  name: "jobsData",
  initialState: {
    jobDetails: null,
    filterCount: 0,
    loading: true,
    selectedFilter: {
      experience: [],
      employees: [],
      location: [],
      jobType: [],
      jobRole: [],
      salary: [],
      searchFilter: [],
    },
  },
  reducers: {
    jobUpdate: (state, action) => {
      state.jobDetails = action.payload;
    },
    // searchFilterUpdate: (state, action) => {
    //   state.searchFilter = action.payload;
    // },
    selectedFilterUpdate: (state, action) => {
      const { filterKey, selectedValues } = action.payload;
      console.log(selectedValues, "8yghjk");
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
    setIsLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
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
  // searchFilterUpdate,
  selectedFilterUpdate,
  // clearFilters
  selectedFilterCount,
  setIsLoading,
} = jobsDataSlice.actions;
export default jobsDataSlice.reducer;
