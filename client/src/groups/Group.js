import React from "react";

import { Link } from "react-router-dom";

import { Box, Typography, Divider } from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "../styles/group.css";

const Group = ({ name, description, onDeleteClick }) => {
  return (
    <Box className="groupBox">
      <Box className="header">
        <Box className="leftHeader">
          <Link to={`${name}/routes`}>
            <Typography 
              variant="h5" 
              marginBottom={2}
            >
              {name}
            </Typography>
          </Link>
        </Box>
        <Box className="rightHeader">
          <DeleteOutlineIcon className="deleteIcon" onClick={onDeleteClick} />
        </Box>
      </Box>
      <Divider />
      <Typography marginTop={2}>
        {description}
      </Typography>
    </Box>
  );
};

export default Group;