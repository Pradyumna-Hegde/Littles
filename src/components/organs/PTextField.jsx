import React, { Component, useState } from "react";
import { TextField } from "@mui/material";

const PTextField = (props) => {
  const { placeholderString, typeString } = props;
  const [value, setValue] = useState("enter your email");
  return (
    <TextField
      margin="normal"
      variant="outlined"
      label={placeholderString}
      type={typeString || "text"}
      size="small"
      onChange={(e) => setValue(e.target.value)}
      error={!value}
      helperText={!value ? "required" : ""}
    />
  );
};

export default PTextField;
