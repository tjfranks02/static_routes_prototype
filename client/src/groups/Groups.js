import React from "react";

import Header from "../Header";
import Group from "./Group";
import Layout from "../Layout";

import { Box } from "@mui/material";

import styles from "../styles/groups.css";

const Groups = () => {

  const renderGroups = (groupNames) => {
    const groups = groupNames.map((groupName) => {
      return (
        <Group 
          name={groupName}
          description="This is a test description for a fake group"
          key={groupName}
        />
      );
    });
    return groups;
  };

  return (
    <div>
      <Layout>
        <Box className="groupsBox">
          {renderGroups(["dc1_t2_tc_route", "dc2_t3_mc_route"])}
        </Box>
      </Layout>
    </div>
  );
};

export default Groups;