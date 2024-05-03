import React from "react";
import { JdItem } from "../types";
import { useSelector } from "react-redux";
import CompanyDetailModal from "./CompanyDetailModal";
import ShimmerEffect from "./ShimmerEffect";

const JobCard = () => {
  const apiData = useSelector((store: any) => store.jobsDetailFetch);
  console.log(apiData);
  const jobsCard = apiData?.jobDetails;
  return (
    <>
      {jobsCard?.map((item: JdItem, key: number) => (
        <div key={key} className="cardContainer">
          <div className="imageContainer">
            <img src="/logo.png" alt="logo" className="logoImage" />
            <div className="companyDetail">
              <p className="companyName">Company Name</p>
              <h2 className="jobRole">{item.jobRole}</h2>
              <p className="location"> {item.location}</p>
            </div>
          </div>
          <div className="aboutCompany">
            <p>About Company:</p>
            <p>{item.jobDetailsFromCompany}</p>
          </div>
          <p>{item.minExp}</p>
          <p>{item.minJdSalary}</p>
          <p>{item.salaryCurrencyCode}</p>
          <p>Minimum Experience: {item.minExp} years</p>
          <p>{item.maxJdSalary}</p>

          <button>Easy Apply</button>
          <CompanyDetailModal aboutCompany={item.jobDetailsFromCompany} />
          <ShimmerEffect />
        </div>
      ))}
    </>
  );
};

export default JobCard;
