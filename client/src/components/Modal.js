import React, { useState, useRef } from "react";

import { 
  Modal, 
  Box
} from "@mui/material";

import useOutsideAlerter from "../hooks/useOutsideAlerter";

import "../styles/modal.css";

const ModalWrapper = ({ open, onClose, children }) => {
  const ref = useRef(null);
  useOutsideAlerter(ref, () => onClose());

  return (
    <Box>
      <Modal open={open}>
        <Box className="modalContainer" ref={ref}>
          {children}
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalWrapper;