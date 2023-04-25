import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Groups from "./groups/Groups";
import RoutesList from "./routes/RoutesList";

import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Groups />
    )
  },
  {
    path: ":groupName/routes",
    element: (
      <RoutesList />
    )
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);