import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  to: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{ marginTop: "20px" }}
      onClick={handleClick}
    >
      Back
    </Button>
  );
};

export default BackButton;
