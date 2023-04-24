import React from "react";

import { Button } from "@mui/material";

const ButtonWrapper = ({ sx, onClick, children }) => {
  return (
    <Button 
      sx={{
        backgroundColor: "#37b24d",
        color: "white",
        "&:hover": {
          backgroundColor: "#51cf66"
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