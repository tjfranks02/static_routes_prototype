import React, { useState, useEffect } from "react";

import { getRoutesInGroup, createNewRoute, deleteRoute } from "../api/routes";
import { useParams } from "react-router-dom";

import Route from "./Route";
import Layout from "../Layout";

import Button from "../components/Button";
import CreateRouteModal from "./CreateRouteModal";
import DeleteRouteModal from "./DeleteRouteModal";

import { Box } from "@mui/material";

import "../styles/routes.css";

const RoutesList = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [routes, setRoutes] = useState([]);

  //Route that is the focus of a delete action
  const [activeRoute, setActiveRoute] = useState(null);

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
          onDeleteClick={onDeleteClick}
        />
      );
    })
  };

  const onDeleteClick = async (route) => {
    setDeleteModalOpen(true);
    setActiveRoute(route);
  };

  const onRouteCreate = async (route, name, description) => {
    await createNewRoute({
      route,
      name,
      description,
      group_name: params.groupName
    });
    await fetchRoutes();
    setCreateModalOpen(false);
  };

  const onRouteDelete = async () => {
    await deleteRoute(activeRoute, params.groupName);
    await fetchRoutes();
    setActiveRoute(null);
    setDeleteModalOpen(false);
  };

  return (
    <Layout>
      <CreateRouteModal 
        open={createModalOpen} 
        onClose={() => setCreateModalOpen(false)}
        onSubmit={onRouteCreate}
      />
      <DeleteRouteModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={onRouteDelete}
        route={activeRoute}
      />
      <Box className="routesBox">
        <Button 
          sx={{ 
            marginBottom: 0,
            position: "absolute",
            top: -47,
            right: 0
          }}
          onClick={() => setCreateModalOpen(true)}
        >
          + New Route
        </Button>
        {renderRoutes()}
      </Box>
    </Layout>
  );
};

export default RoutesList;