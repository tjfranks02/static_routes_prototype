import React from "react";

import { Typography } from "@mui/material";

import styles from "./styles/header.css";

const Header = () => {
  return (
    <div className="headerBox">
      <Typography variant="h4">NaaS static routes library</Typography>
    </div>
  );
};

export default Header;