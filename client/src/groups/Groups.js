import React, { useEffect, useState } from "react";

import Group from "./Group";
import Layout from "../Layout";
import Button from "../components/Button";
import CreateGroupModal from "./CreateGroupModal";
import DeleteGroupModal from "./DeleteGroupModal";

import { Box } from "@mui/material";

import "../styles/groups.css";

import { getGroups, createGroup, deleteGroup } from "../api/groups";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);

  const fetchGroups = async () => {
    const groups = await getGroups();
    setGroups(groups);
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const renderGroups = () => {
    return groups.map((group) => {
      return (
        <Group 
          name={group.name}
          description={group.description}
          key={group.name}
          onDeleteClick={() => onDeleteClick(group.name)}
        />
      );
    });
  };

  const onDeleteClick = (name) => {
    setDeleteModalOpen(true);
    setActiveGroup(name);
  };    

  const onCreateGroup = async (name, description) => {
    await createGroup(name, description);
    await fetchGroups();
    setCreateModalOpen(false);
  };

  const onDeleteGroup = async (name) => {
    await deleteGroup(name);
    await fetchGroups();
    setDeleteModalOpen(false);
    setActiveGroup(null);
  };

  return (
    <div>
      <CreateGroupModal 
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={onCreateGroup}
      />
      <DeleteGroupModal 
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={onDeleteGroup}
        group_name={activeGroup}
      />
      <Layout>
        <Box className="groupsBox">
          {renderGroups()}
          <Button 
            sx={{ 
              marginBottom: 0,
              position: "absolute",
              top: -47,
              right: 0
            }}
            onClick={() => setCreateModalOpen(true)}
          >
            + New Group
          </Button>
        </Box>
      </Layout>
    </div>
  );
};

export default Groups;