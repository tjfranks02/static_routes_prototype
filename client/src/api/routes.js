import axios from "axios";

import { BASE_URL } from "./vars";

export const getRoutesInGroup = async (group_name) => {
  try {
    const res = await axios({
      method: "GET",
      url: `${BASE_URL}/routes/${group_name}`
    });
    return res.data;
  } catch (e) {
    return null;
  }
};