import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectedFilterUpdate } from "../store/reducer";

const SearchInput = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: string) => {
    dispatch(
      selectedFilterUpdate({
        filterKey: "searchFilter",
        selectedValues: value,
      })
    );
  };

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      handleSearch(searchValue);
    }, 1000);

    return () => clearTimeout(debounceSearch);
  }, [searchValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search Company Name"
        value={searchValue}
        onChange={handleChange}
        className="searchInput"
      />
    </>
  );
};

export default SearchInput;
