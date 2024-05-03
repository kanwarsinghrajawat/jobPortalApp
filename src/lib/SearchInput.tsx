import React from "react";
import { searchFilterUpdate } from "../store/reducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SearchInput = () => {
  const dispatch = useDispatch();
  const apiData = useSelector((store: any) => store.jobsDetailFetch);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(searchFilterUpdate(value));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search Job Role"
        value={apiData?.searchFilter}
        onChange={handleSearch}
      />
    </>
  );
};

export default SearchInput;
