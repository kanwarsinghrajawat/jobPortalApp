import CompanyDetailModal from "./CompanyDetailModal";

const Cards = ({ item, key }: any) => {
  return (
    <>
      <div key={key} className="cardContainer">
        <div className="imageContainer">
          <img src={item.logoUrl} alt="logo" className="logoImage" />
          <div className="companyDetail">
            <p className="companyName">{item.companyName}</p>
            <h2 className="jobRole">{item.jobRole}</h2>
            <p className="location">{item.location}</p>
          </div>
        </div>
        <p>
          Estimated Salary : {item.minJdSalary !== null ? item.minJdSalary : 0}{" "}
          -{item.maxJdSalary} LPA
        </p>
        <div className="aboutCompany">
          <p className="aboutPara">About Company:</p>
          <p className="detailcom">{item.jobDetailsFromCompany}</p>
          <div className="modalButton">
            <CompanyDetailModal
              className="modalBtn"
              aboutCompany={item.jobDetailsFromCompany}
            />
          </div>
        </div>
        <div>
          <p className="companyName">Minimum Experience:</p>
          <p>{item.minExp} years</p>
          <button className="easyApply">⚡ Easy Apply</button>
        </div>
      </div>
    </>
  );
};

export default Cards;
