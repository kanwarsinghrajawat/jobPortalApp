import {
  Employees,
  Experience,
  JobRole,
  Location,
  Salary,
  jobType,
} from "./constants";
import Filter from "./lib/Filter";
import SearchInput from "./lib/SearchInput";
import { useDispatch } from "react-redux";
import { searchFilterUpdate } from "./store/reducer";

const InputFields = () => {
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(searchFilterUpdate(""));
  };
  return (
    <div>
      <Filter options={Experience} label="Experience" />
      <Filter type={true} options={Employees} label="No. Of Employees" />
      <Filter type={true} options={JobRole} label="JobRole" />
      <Filter options={Salary} label="Salary" />
      <Filter type={true} options={jobType} label="jobType" />
      <Filter type={true} options={Location} label="Location" />
      <SearchInput />
      <button onClick={handleClear}></button>
    </div>
  );
};

export default InputFields;
