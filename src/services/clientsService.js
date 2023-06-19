import { calendarAPI } from "./calendarInstance";

export const getClients = async () => {
    return await calendarAPI.get("/clients");
  };
  export const getTasks = async () => {
    return await calendarAPI.get("/tasks");
  };
  
  export const addClient = async (client) => {
    return await calendarAPI.post("/clients", client);
  };
  export const addTask = async (task) => {
    return await calendarAPI.post("/tasks", task);
  };
  
  export const getClientById = async (id) => {
    return await calendarAPI.get(`/clients/${id}`);
  };

  export const deleteTask = async (id) => {
    return await calendarAPI.delete(`/tasks/${id}`);
  };

  export const updateTask = async (task) => {
    return await calendarAPI.put(`/tasks/${task.id}`, task);
  };