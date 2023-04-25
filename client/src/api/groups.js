import axios from "axios";

import { BASE_URL } from "./vars";

export const getGroups = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: BASE_URL + "/groups"
    });
    return res.data;
  } catch (e) {
    return null;
  }
};

export const createGroup = async (name, description) => {
  try {
    const res = await axios({
      method: "POST",
      url: BASE_URL + "/groups",
      data: {
        name,
        description
      }
    });
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const deleteGroup = async (name) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: BASE_URL + `/groups/${name}`
    });
  } catch (e) {
    console.log(e);
    return null;
  }
};  