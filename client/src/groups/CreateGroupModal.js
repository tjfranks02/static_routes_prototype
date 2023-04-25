import React, { useState } from "react";

import { 
  Box, 
  Typography,
  TextField
} from "@mui/material";

import Modal from "../components/Modal";

import Button from "../components/Button";

import "../styles/createGroupModal.css";

const CreateGroupModal = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onGroupCreate = () => {
    setDefaultState();
    onSubmit(name, description);
  };

  const setDefaultState = () => {
    setName("");
    setDescription("");
  }

  const handleClose = () => {
    setDefaultState();
    onClose();
  };

  return (
    <Box>
      <Modal open={open} onClose={handleClose}>
        <Typography 
          className="heading" 
          variant="h5"
          marginBottom={2}
        >
          New Group
        </Typography>
        <Box className="formBox">
          <TextField 
            label="Name"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField 
            label="Description"
            size="small"
            multiline
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
        <Button 
          onClick={onGroupCreate} 
          className="confirmButton"
        >
          Create
        </Button>
      </Modal>
    </Box>
  );
};

export default CreateGroupModal;