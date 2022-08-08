import axios from "axios";

export const getClientsRequest = async () =>
  await axios.get("http://localhost:4000/clients");

export const createClientRequest = async (client) =>
  await axios.post("http://localhost:4000/clients", client);

export const deleteClientRequest = async (id) =>
  await axios.delete(`http://localhost:4000/clients/${id}`);

export const getClientRequest = async (id) =>
  await axios.get(`http://localhost:4000/clients/${id}`);

export const updateClientRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/clients/${id}`, newFields);

export const toggleClientDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:4000/clients/${id}`, {
    done,
  });
