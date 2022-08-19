import axios from "axios";

export const getGithubUsersData = (username) => {
  const url = `https://api.github.com/users/${username}`;
  return axios.get(url, {
    headers: { "Content-Type": "application/json" },
  });
};
