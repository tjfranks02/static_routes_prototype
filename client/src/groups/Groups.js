import React, { useEffect, useState } from "react";

import Header from "../Header";
import Group from "./Group";
import Layout from "../Layout";

import { Box } from "@mui/material";

import styles from "../styles/groups.css";

import { getGroups } from "../api/groups";

const Groups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const groups = await getGroups();
      setGroups(groups);
    };
    fetchGroups();
  }, []);

  const renderGroups = () => {
    return groups.map((group) => {
      return (
        <Group 
          name={group.name}
          description={group.description}
          key={group.name}
        />
      );
    });
  };

  return (
    <div>
      <Layout>
        <Box className="groupsBox">
          {renderGroups()}
        </Box>
      </Layout>
    </div>
  );
};

export default Groups;