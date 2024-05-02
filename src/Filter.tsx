import { Autocomplete, Button, TextField, Typography } from "@mui/material";

const Filter = () => {
  const top100Films = ["hjkl0", "nm,.", "ghjkl"];

  return (
    <div>
      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={top100Films}
        getOptionLabel={(option) => option}
        renderInput={(params) => <TextField {...params} label="limitTags" />}
        sx={{ width: "300px" }}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  );
};

export default Filter;
