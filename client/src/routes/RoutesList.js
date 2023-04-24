import React, { useState } from "react";

import Route from "./Route";
import Layout from "../Layout";

import Button from "../components/Button";
import CreateRouteModal from "./CreateRouteModal";

import { Box } from "@mui/material";

import "../styles/routes.css";

const RoutesList = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const renderRoutes = (routes) => {
    return routes.map((route) => {
      return (
        <Route
          key={route}
          route={route}
          name="Fake name for route"
          description="This is a fake description for a fake route"
        />
      );
    })
  };

  return (
    <Layout>
      <CreateRouteModal open={modalOpen} />
      <Box className="routesBox">
        <Button 
          sx={{ 
            marginBottom: 1.5,
            position: "absolute",
            top: -47,
            right: 0
          }}
          onClick={() => setModalOpen(true)}
        >
          + New Route
        </Button>
        {renderRoutes(["1.1.1.1 via 12.13.14.15 dev ens192"])}
      </Box>
    </Layout>
  );
};

export default RoutesList;