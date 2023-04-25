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