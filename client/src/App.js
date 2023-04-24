import React from "react";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Header from "./Header";
import Group from "./groups/Group.js";

import { Box } from "@mui/material";

import styles from "./styles/app.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Box>
        <Header />
      </Box>
    )
  }
])

const App = () => {
  return (
    <div>
      <Header />
      <Box className="pageBody">
        <Group 
          name="Group name" 
          description="This is a test description for a fake group"
        />
      </Box>
    </div>
  );
};

export default App;