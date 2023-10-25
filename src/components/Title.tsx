import React from "react";
import { Typography } from "@mui/material";
import { green, orange } from "@mui/material/colors";

interface TitleProps {
  title: string;
  subtitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          marginBottom: "20px",
          fontSize: "2.5rem",
          color: green[600],
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          marginBottom: "20px",
          fontSize: "2rem",
          color: orange[600],
          textAlign: "center",
        }}
      >
        {subtitle}
      </Typography>
    </>
  );
};

export default Title;
