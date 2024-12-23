// src/services/taskService.js
const API_URL = 'http://localhost:3001/tasks';  // Assuming your API endpoint

export const getTasks = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.tasks;  // Adjust according to your backend response
};

export const createTask = async (task) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data.task;  // Adjust according to your backend response
};
