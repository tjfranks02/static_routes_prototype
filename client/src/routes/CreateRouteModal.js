import React, { useState, useRef } from "react";

import { 
  Modal, 
  Box, 
  Typography,
  TextField
} from "@mui/material";

import useOutsideAlerter from "../hooks/useOutsideAlerter";

import "../styles/createRouteModal.css";

const CreateRouteModal = ({ open }) => {
  const ref = useRef(null);
  useOutsideAlerter(ref);

  return (
    <Box ref={ref}>
      <Modal open={true}>
        <Box className="modalContainer">
          <Typography 
            className="heading" 
            variant="h5"
            marginBottom={2}
          >
            New Route
          </Typography>
          <Box className="formBox">
            <TextField 
              label="Route (eg. 139.99.167.240 via 10.252.21.1 dev ens192)"
              size="small"
            />
            <TextField 
              label="Name"
              size="small"
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default CreateRouteModal;