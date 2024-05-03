import InputFields from "../lib/InputFields";
import useApi from "../hooks/useApi";

import NoMatchFound from "../lib/NoMatchFound";
import JobCard from "../lib/JobCard";
import { useSelector } from "react-redux";

const JobPage = () => {
  const apiData = useSelector((store: any) => store.jobsDetailFetch);
  console.log(apiData);
  useApi();
  return (
    <div className="mainContainer">
      <InputFields />
      <div className="cardHolder">
        {apiData.filterCount > 0 && apiData.jobDetails.length <= 0 ? (
          <NoMatchFound />
        ) : (
          <JobCard />
        )}
      </div>
    </div>
  );
};

export default JobPage;
