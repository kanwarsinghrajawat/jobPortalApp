import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const Filter = ({
  type,
  options,
  label,
}: {
  type?: any;
  options?: any[];
  label: string;
}) => {
  const isMultiple = type === true;
  const handleAutocompleteChange = (event: any, value: any) => {
    console.log("Selected options:", value);
  };

  return (
    <>
      <Autocomplete
        key={type}
        multiple={isMultiple}
        limitTags={2}
        id="multiple-limit-tags"
        options={Array.isArray(options) ? options : []}
        getOptionLabel={(option: any) => option}
        renderInput={(params) => <TextField {...params} label={label} />}
        sx={{ width: "300px" }}
        onChange={handleAutocompleteChange}
      />
    </>
  );
};

export default Filter;
