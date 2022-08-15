import axios from "axios";

import { API_SERVER_URL } from "./public-config";

export const fetchContests = async () => {
  const resp = await axios.get(`${API_SERVER_URL}/contests`);

  return resp.data.contests;
};
