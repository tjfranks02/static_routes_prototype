import React from "react";

import Modal from "../components/Modal";
import Button from "../components/Button";

import {
  Box,
  Typography
} from "@mui/material";

import "../styles/deleteGroupModal.css";

const DeleteGroupModal = ({ open, onClose, onDelete, group_name }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="contentBox">
        <Typography variant="h5">
          Delete group
        </Typography>
        <Typography>
          Are you sure you want to delete group "<b>{group_name}</b>"?
        </Typography>
        <Button 
          className="deleteButton" 
          variant="delete"
          onClick={() => onDelete(group_name)}
        >
          Delete
        </Button>
      </Box>
    </Modal>
  );
};

export default DeleteGroupModal;