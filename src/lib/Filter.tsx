import { Autocomplete, TextField } from "@mui/material";

const Filter = ({
  type,
  options,
  label,
  filterKey,
  onSelectChange,
}: {
  type?: any;
  options: any[];
  label: string;
  filterKey: string;
  onSelectChange: (selectedValues: any[]) => void;
}) => {
  const isMultiple = type === true;
  const handleSelectChange = (event: any, value: any) => {
    onSelectChange(value);
  };

  return (
    <>
      <Autocomplete
        key={filterKey}
        multiple={isMultiple}
        limitTags={2}
        id="multiple-limit-tags"
        options={Array.isArray(options) ? options : []}
        getOptionLabel={(option: any) => option}
        renderInput={(params) => <TextField {...params} label={label} />}
        sx={{ width: "200px" }}
        onChange={handleSelectChange}
      />
    </>
  );
};

export default Filter;
