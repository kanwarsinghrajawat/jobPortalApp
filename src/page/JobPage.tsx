import InputFields from "../components/InputFields";
import JobsContainer from "../components/JobsContainer";
import { useSelector } from "react-redux";

const JobPage = () => {
  const apiData = useSelector((store: any) => store.jobsDetailFetch);
  console.log(apiData, "tyhjkm,");
  return (
    <div className="mainContainer">
      <InputFields />
      <div className="cardHolder">
        <JobsContainer />
      </div>
    </div>
  );
};

export default JobPage;
