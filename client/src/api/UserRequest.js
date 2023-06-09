import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const getUserProfile = (userId, header) =>
  API.get(`/users/${userId}`, header);

export const getFriendList = (userId, header) =>
  API.get(`/users/${userId}/friends`, header);

export const updateUser = (id, formData) => API.put(`/user/${id}`, formData);

export const editUser = (currUserId, values) =>
  API.put(`/users/edit-user/${currUserId}`, values);

export const editProflePic = (currUserId, values) =>
  API.post(`/users/profilepic-user/${currUserId}`, values);

export const addRemoveFriend = (_id, friendId) =>
  API.patch(`/users/${_id}/${friendId}`);
