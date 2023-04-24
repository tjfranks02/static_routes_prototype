import React from "react";

import { Link } from "react-router-dom";

import { Box, Typography, Divider } from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

import styles from "../styles/route.css";

const Route = ({ route, name, description }) => {
  return (
    <Box className="routeBox">
      <Box className="header">
        <Box className="leftHeader">
          <Typography 
            variant="h5" 
            marginBottom={0.5}
          >
            {route}
          </Typography>
          {name && 
            <Typography 
              sx={{ 
                fontStyle: "italic",
                color: "#666"
              }}
              variant="body1"
            >
              {name}           
            </Typography>}
        </Box>
        <Box className="rightHeader">
          <EditIcon className="editIcon" />
          <DeleteOutlineIcon className="deleteIcon" />
        </Box>
      </Box>
      <Divider marginBottom={2} />
      <Typography marginTop={2}>
        {description}
      </Typography>
    </Box>
  );
};

export default Route;