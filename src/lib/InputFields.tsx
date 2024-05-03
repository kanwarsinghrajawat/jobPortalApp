import { Experience, JobRole, Location, Salary, jobType } from "../constants";
import Filter from "./Filter";
import SearchInput from "./SearchInput";
import { useDispatch } from "react-redux";
import {
  // clearFilters,
  // searchFilterUpdate,
  selectedFilterUpdate,
} from "../store/reducer";

const InputFields = () => {
  const dispatch = useDispatch();
  const handleClear = () => {
    // dispatch(searchFilterUpdate(""));
    // dispatch(clearFilters());
  };

  const handleFilterChange = (filterKey: string) => (selectedValues: any[]) => {
    console.log(`${filterKey} selectedvalues:`, selectedValues);

    dispatch(
      selectedFilterUpdate({
        filterKey,
        selectedValues,
      })
    );
  };

  return (
    <div className="filterContainer">
      <Filter
        options={Experience}
        label="Minimum Experience"
        filterKey="experience"
        onSelectChange={handleFilterChange("experience")}
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
      {/* <button onClick={handleClear}>Clear Filters</button> */}
    </div>
  );
};

export default InputFields;
