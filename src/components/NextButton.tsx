import React from "react";
import { Button } from "@mui/material";

interface NextButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, disabled }) => {
  return (
    <Button
      variant="contained"
      color="primary" // You can change this to a different color
      sx={{
        marginTop: "20px",
        backgroundColor: disabled ? "#E0E0E0" : "#4A90E2", // enabled background color
      }}
      onClick={onClick}
      disabled={disabled}
    >
      Next
    </Button>
  );
};

export default NextButton;
