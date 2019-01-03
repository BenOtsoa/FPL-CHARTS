import axios from "axios";
import { useEffect } from "react";

// Get all datas from api

export async function apiManager(managerId, gwNumber) {
  try {
    return axios({
      method: "get",
      url: `https://fantasy.premierleague.com/drf/entry/${managerId}/event/${gwNumber}/picks`
    });
  } catch (error) {
    console.error(error);
  }
}

export async function apiManagerDetails(managerId) {
  try {
    return axios({
      method: "get",
      url: `https://fantasy.premierleague.com/drf/entry/${managerId}`
    });
  } catch (error) {
    console.error(error);
  }
}

// export default { apiManager, apiManagerDetails };
