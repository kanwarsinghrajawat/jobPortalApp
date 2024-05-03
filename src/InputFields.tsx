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
import { searchFilterUpdate, selectedFilterUpdate } from "./store/reducer";

const InputFields = () => {
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(searchFilterUpdate(""));
  };

  const handleFilterChange = (filterKey: string) => (selectedValues: any[]) => {
    console.log(`${filterKey} selected values:`, selectedValues);

    dispatch(
      selectedFilterUpdate({
        filterKey,
        selectedValues,
      })
    );
  };

  return (
    <div>
      <Filter
        options={Experience}
        label="Minimum Experience"
        filterKey="experience"
        onSelectChange={handleFilterChange("experience")}
      />
      <Filter
        type={true}
        options={Employees}
        label="No. Of Employees"
        filterKey="employees"
        onSelectChange={handleFilterChange("employees")}
      />
      <Filter
        type={true}
        options={JobRole}
        label="JobRole"
        filterKey="jobRole"
        onSelectChange={handleFilterChange("jobrole")}
      />
      <Filter
        options={Salary}
        label="Salary"
        filterKey="salary"
        onSelectChange={handleFilterChange("salary")}
      />
      <Filter
        type={true}
        options={jobType}
        label="jobType"
        filterKey="jobType"
        onSelectChange={handleFilterChange("jobType")}
      />
      <Filter
        type={true}
        options={Location}
        label="Location"
        filterKey="location"
        onSelectChange={handleFilterChange("location")}
      />
      <SearchInput />
      <button onClick={handleClear}></button>
    </div>
  );
};

export default InputFields;
