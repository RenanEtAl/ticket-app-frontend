import axios from "axios";

const API_ENDPOINT = "http://localhost:5000";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const addNewTicket = async (ticketData) => {
  const response = await axios.post(
    `${API_ENDPOINT}/tickets/add`,
    ticketData,
    config
  );
  return response;
};

export const getAllTickets = async () => {
  const response = await axios.get(`${API_ENDPOINT}/tickets`, config);
  return response;
};

export const editTicket = async (id, ticketData) => {};

export const deleteTicket = async (id) => {};

export const closeTicket = async (id) => {};
