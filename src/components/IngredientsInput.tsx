import React from "react";
import { Box, TextField } from "@mui/material";

interface IngredientsInputProps {
  value: string;
  onChange: (value: string) => void;
}

const IngredientsInput: React.FC<IngredientsInputProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Box mt={2} sx={{ width: "80%" }}>
      <TextField
        label="Ingredients"
        variant="outlined"
        fullWidth
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
};

export default IngredientsInput;
