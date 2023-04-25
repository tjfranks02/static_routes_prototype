import React from "react";

import { Button } from "@mui/material";

const ButtonWrapper = ({ variant, className, sx, onClick, children }) => {
  const bgColour = variant === "delete" ? "#f03e3e" : "#37b24d";
  const bgColourHover = variant === "delete" ? "#c92a2a" : "#51cf66";
  
  return (
    <Button
      className={className}
      sx={{
        backgroundColor: bgColour,
        color: "white",
        "&:hover": {
          backgroundColor: bgColourHover
        },
        ...sx
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonWrapper;