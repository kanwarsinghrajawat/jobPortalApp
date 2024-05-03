import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { jobUpdate } from "../store/reducer";
import { useSelector } from "react-redux";

const useApi = () => {
  const dispatch = useDispatch();
  const apiData = useSelector((store: any) => store.jobsDetailFetch);
  const jobsData = apiData?.jobDetails;
  const searchKeyword = apiData?.searchFilter;
  const filterKeyword = apiData?.selectedFilter;
  console.log(filterKeyword, "yuio");
  let count = true; // Start with count as true

  for (const key in filterKeyword) {
    if (
      (Array.isArray(filterKeyword[key]) && filterKeyword[key].length > 0) ||
      (typeof filterKeyword[key] === "string" &&
        filterKeyword[key].trim().length > 0)
    ) {
      count = false;
      break;
    }
  }
  console.log(count);
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
      console.log(count, "fghjkl");

      let filteredJobs = data?.jdList;
      console.log(filteredJobs);
      console.log(filterKeyword.jobrole, "gbnjkol");
      if (
        filterKeyword &&
        filterKeyword.jobrole &&
        filterKeyword.jobrole.length > 0
      ) {
        filteredJobs = filteredJobs.filter((job: any) =>
          filterKeyword.jobrole.includes(job.jobrole)
        );
        console.log(filteredJobs);
      }

      if (count === true) {
        dispatch(jobUpdate(data?.jdList));
      } else {
        console.log("hello");
        dispatch(jobUpdate(filteredJobs));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("it's running");
    fetchData();
  }, [filterKeyword]);
};

export default useApi;
