import React from "react";
import { TextareaAutosize, TextField } from "@mui/material";

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
    <TextField
      fullWidth
      multiline
      rows={1}
      variant="outlined"
      placeholder="Enter ingredients..."
      label="Ingredients"
      value={value}
      onChange={handleChange}
      InputProps={{
        inputComponent: TextareaAutosize as any,
        inputProps: {
          minRows: 1,
        },
      }}
    />
  );
};

export default IngredientsInput;
