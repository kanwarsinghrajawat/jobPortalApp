import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { jobUpdate, selectedFilterCount } from "../store/reducer";
import { useSelector } from "react-redux";
import { applyFilters } from "../lib/FilterLogic";

const useApi = () => {
  const dispatch = useDispatch();
  const apiData = useSelector((store: any) => store.jobsDetailFetch);

  const filterKeyword = apiData?.selectedFilter;

  // Taking the count of selected Filters
  let count = 0;
  for (const key in filterKeyword) {
    if (
      (Array.isArray(filterKeyword[key]) && filterKeyword[key].length > 0) ||
      (typeof filterKeyword[key] === "string" &&
        filterKeyword[key].trim().length > 0)
    ) {
      count++;
    }
  }

  console.log(count);
  // dispatch(selectedFilterCount(count));

  // Api call
  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      limit: 10,
      offset: 0,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const data = await response.json();

      let filteredJobs = data?.jdList;

      if (filterKeyword) {
        filteredJobs = applyFilters(filteredJobs, filterKeyword);
      }

      // condition to pass filter data or unfiltered data
      if (count === 0) {
        dispatch(jobUpdate(data?.jdList));
      } else {
        dispatch(jobUpdate(filteredJobs));
      }
    } catch (error) {
      console.error(error);
    }
  };

  // api invoke
  useEffect(() => {
    fetchData();
  }, [filterKeyword]);

  useEffect(() => {
    dispatch(selectedFilterCount(count));
  }, [count]);
};

export default useApi;
