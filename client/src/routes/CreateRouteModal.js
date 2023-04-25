import React, { useState, useRef } from "react";

import { 
  Box, 
  Typography,
  TextField
} from "@mui/material";

import Modal from "../components/Modal";

import Button from "../components/Button";

import "../styles/createRouteModal.css";

const CreateRouteModal = ({ open, onClose, onSubmit }) => {
  const [route, setRoute] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onRouteCreate = () => {
    setDefaultState();
    onSubmit(route, name, description);
  };

  const setDefaultState = () => {
    setRoute("");
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
          New Route
        </Typography>
        <Box className="formBox">
          <TextField 
            label="Route (eg. 139.99.167.240 via 10.252.21.1 dev ens192)"
            size="small"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
          />
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
          onClick={onRouteCreate} 
          className="confirmButton"
        >
          Create
        </Button>
      </Modal>
    </Box>
  );
};

export default CreateRouteModal;