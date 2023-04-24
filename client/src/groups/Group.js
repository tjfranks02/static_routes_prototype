import React from "react";

import { Link } from "react-router-dom";

import { Box, Typography, Divider } from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

import styles from "../styles/group.css";

const Group = ({ name, description }) => {
  return (
    <Box className="groupBox">
      <Box className="header">
        <Box className="leftHeader">
          <Link to={`${name}/routes`}>
            <Typography 
              variant="h5" 
              marginBottom={1.5}
            >
              {name}
            </Typography>
          </Link>
        </Box>
        <Box className="rightHeader">
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

export default Group;