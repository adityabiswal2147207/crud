import axios from "axios";

export const loadUsersApi = async () =>
  await axios.get("http://localhost:3000/users");

export const createUserApi = async (users) =>
  await axios.post("http://localhost:3000/users", users);

export const deleteUserApi = async (usersId) =>
    await axios.delete(`http://localhost:3000/users/${usersId}`);
