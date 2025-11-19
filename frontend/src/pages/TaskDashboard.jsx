import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from '../componets/TaskList.jsx';
import AddTaskForm from '../componets/AddTaskForm.jsx';

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async (text) => {
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', { text });
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <h2>My Tasks</h2>
      <AddTaskForm onTaskAdd={addTask} />
      <hr />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default TaskDashboard;

///////////////////mostly wahi code hai jo humne app mai likha thaa ////////////////////////////////////