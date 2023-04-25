import React, { useState, useEffect } from "react";

import { getRoutesInGroup, createNewRoute } from "../api/routes";
import { useParams } from "react-router-dom";

import Route from "./Route";
import Layout from "../Layout";

import Button from "../components/Button";
import CreateRouteModal from "./CreateRouteModal";

import { Box } from "@mui/material";

import "../styles/routes.css";

const RoutesList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [routes, setRoutes] = useState([]);

  const params = useParams();

  const fetchRoutes = async () => {
    const routes = await getRoutesInGroup(params.groupName);
    setRoutes(routes);
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  const renderRoutes = () => {
    return routes.map((route) => {
      return (
        <Route
          key={route.route}
          route={route.route}
          name={route.name}
          description={route.description}
        />
      );
    })
  };

  const onRouteCreate = async (route, name, description) => {
    console.log(route, name, description);
    await createNewRoute({
      route,
      name,
      description,
      group_name: params.groupName
    });
    await fetchRoutes();
    setModalOpen(false);
  };

  return (
    <Layout>
      <CreateRouteModal 
        open={modalOpen} 
        onClose={() => setModalOpen(false)}
        onSubmit={onRouteCreate}
      />
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