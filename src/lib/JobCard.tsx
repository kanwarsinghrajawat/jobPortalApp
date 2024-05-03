import React from "react";
import { JdItem } from "../types";
import { useSelector } from "react-redux";
import CompanyDetailModal from "./CompanyDetailModal";
import ShimmerEffect from "./ShimmerEffect";

const JobCard = () => {
  const apiData = useSelector((store: any) => store.jobsDetailFetch);
  console.log(apiData);
  const jobsCard = apiData?.jobDetails;
  const loader = apiData.loading;
  const shimmerArray = Array.from({ length: 8 });

  return (
    <>
      {loader ? (
        <>
          {shimmerArray.map((_, index) => (
            <ShimmerEffect key={index} />
          ))}{" "}
        </>
      ) : (
        <>
          {jobsCard?.map((item: JdItem, key: number) => (
            <div key={key} className="cardContainer">
              <div className="imageContainer">
                <img src="/logo.png" alt="logo" className="logoImage" />
                <div className="companyDetail">
                  <p className="companyName">Company Name</p>
                  <h2 className="jobRole">{item.jobRole}</h2>
                  <p className="location">{item.location}</p>
                </div>
              </div>
              <p>
                Estimated Salary :{" "}
                {item.minJdSalary !== null ? item.minJdSalary : 0} -
                {item.maxJdSalary} LPA
              </p>
              <div className="aboutCompany">
                <p className="aboutPara">About Company:</p>
                <p>{item.jobDetailsFromCompany}</p>
                <CompanyDetailModal aboutCompany={item.jobDetailsFromCompany} />
              </div>
              <div>
                <p className="companyName">Minimum Experience:</p>
                <p>{item.minExp} years</p>
                <button className="easyApply">⚡ Easy Apply</button>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default JobCard;
