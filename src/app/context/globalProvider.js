"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    allTasks();
  }, []);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const collapseMenu = () => {
    setCollapsed(!collapsed);
  };

  const allTasks = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/api/tasks");

      setTasks(res.data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      toast.success("Task deleted");

      allTasks();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const updateTask = async (task) => {
    try {
      await axios.put(`/api/tasks`, task);
      toast.success("Task updated");
      allTasks();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const completedTasks = tasks.filter((task) => task.isCompleted);
  const incompleteTasks = tasks.filter((task) => task.isCompleted === false);

  return (
    <GlobalContext.Provider
      value={{
        tasks,
        deleteTask,
        isLoading,
        completedTasks,
        incompleteTasks,
        updateTask,
        modal,
        openModal,
        closeModal,
        allTasks,
        collapsed,
        collapseMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
