import "./App.css";
import InputFields from "./InputFields";
import useApi from "./hooks/useApi";
import { useSelector } from "react-redux";
import { JdItem } from "./types";

const JobPage = () => {
  const apiData = useSelector((store: any) => store.jobsDetailFetch);
  console.log(apiData);
  const jobsCard = apiData?.jobDetails?.jdList;
  useApi();
  return (
    <>
      <InputFields />

      {jobsCard?.map((item: JdItem, key: number) => (
        <div key={key} style={{ margin: "4rem" }}>
          <h2>{item.jobRole}</h2>
          <p>{item.jdUid}</p>
          <p>{item.maxJdSalary}</p>
          <p>{item.jobDetailsFromCompany}</p>
          <p>{item.minExp}</p>
          <p>{item.minJdSalary}</p>
          <p>{item.salaryCurrencyCode}</p>
          <p>Location: {item.location}</p>
          <p>Maximum Experience: {item.maxExp} years</p>
        </div>
      ))}
    </>
  );
};

export default JobPage;
