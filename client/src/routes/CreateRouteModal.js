import React, { useState, useRef } from "react";

import { 
  Modal, 
  Box, 
  Typography,
  TextField
} from "@mui/material";

import useOutsideAlerter from "../hooks/useOutsideAlerter";
import Button from "../components/Button";

import "../styles/createRouteModal.css";

const CreateRouteModal = ({ open, onClose, onSubmit }) => {
  const ref = useRef(null);
  useOutsideAlerter(ref, () => handleClose());

  const [route, setRoute] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onRouteCreate = () => {
    onSubmit(route, name, description);
  };

  const handleClose = () => {
    setRoute("");
    setName("");
    setDescription("");
    onClose();
  };

  return (
    <Box>
      <Modal open={open}>
        <Box className="modalContainer" ref={ref}>
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
        </Box>
      </Modal>
    </Box>
  );
};

export default CreateRouteModal;