import axios from "axios";

import { API_SERVER_URL } from "./public-config";

export const fetchContestList = async () => {
  const resp = await axios.get(`${API_SERVER_URL}/contests`);

  return resp.data.contests;
};

export const fetchContest = async (contestId) => {
  const resp = await axios.get(
    `${API_SERVER_URL}/contest/${contestId}`,
  );

  return resp.data.contest;
};
