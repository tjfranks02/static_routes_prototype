import React from "react";

import { Box, Breadcrumbs } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import Header from "./Header";

import "./styles/layout.css";

const Layout = ({ children }) => {
  const params = useParams();

  return (
    <div>
      <Header />
      <Box className="layoutBox">
        <Breadcrumbs 
          separator="/" 
          sx={{ textDecoration: "none", marginBottom: 0 }}
        >
          <Link 
            className="breadcrumbLink"
            to="/"
          >
            Groups
          </Link>
          {params.groupName && <Link 
            className="breadcrumbLink"
          >
            {params.groupName}
          </Link>}
        </Breadcrumbs>
        {children}
      </Box>
    </div>
  );
};

export default Layout;