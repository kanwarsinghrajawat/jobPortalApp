import { createSlice } from "@reduxjs/toolkit";

const jobsDataSlice = createSlice({
  name: "jobsData",
  initialState: {
    jobDetails: [] as any[],
    filteredData: [] as any[],
    filterCount: 0,
    hasNextPage: true,
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
    setIsLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
});

export const { selectedFilterUpdate, selectedFilterCount, setIsLoading } =
  jobsDataSlice.actions;
export default jobsDataSlice.reducer;
