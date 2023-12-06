import React from "react";
import { Typography } from "@mui/material";
import { green, orange } from "@mui/material/colors";

interface TitleProps {
  title: string;
  subtitle: string;
  blurb: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle, blurb }) => {
  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          marginBottom: "20px",
          fontSize: "2.0rem",
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
          marginBottom: "30px",
          fontSize: "1.6rem",
          color: orange[600],
          textAlign: "center",
        }}
      >
        {subtitle}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "20px",
          fontSize: "1.0rem",
          color: "#313131",
          textAlign: "center",
          lineHeight: 2.0,
        }}
      >
        {blurb}
      </Typography>
    </>
  );
};

export default Title;
