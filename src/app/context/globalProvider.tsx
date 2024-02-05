"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  FC,
} from "react";
import axios from "axios";
import { toast } from "sonner";
import { Task } from "@prisma/client";

type GlobalContextProps = {
  tasks: Task[];
  deleteTask: (id: string) => Promise<void>;
  isLoading: boolean;
  completedTasks: Task[];
  incompleteTasks: Task[];
  updateTask: (task: Task) => Promise<void>;
  modal: boolean;
  openModal: () => void;
  closeModal: () => void;
  allTasks: () => Promise<void>;
  collapsed: boolean;
  collapseMenu: () => void;
} | null;

export const GlobalContext = createContext<GlobalContextProps>(null);

export const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

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

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      toast.success("Task deleted");
      allTasks();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const updateTask = async (task: Task) => {
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

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }
  return context;
};
