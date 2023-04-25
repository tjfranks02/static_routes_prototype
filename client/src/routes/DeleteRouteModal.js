import React from "react";

import Modal from "../components/Modal";
import Button from "../components/Button";

import {
  Box,
  Typography
} from "@mui/material";

import "../styles/deleteRouteModal.css";

const DeleteRouteModal = ({ open, onClose, onDelete, route }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="contentBox">
        <Typography variant="h5">
          Delete route
        </Typography>
        <Typography>
          Are you sure you want to delete route "<b>{route}</b>"?
        </Typography>
        <Button 
          className="deleteButton" 
          variant="delete"
          onClick={onDelete}
        >
          Delete
        </Button>
      </Box>
    </Modal>
  );
};

export default DeleteRouteModal;