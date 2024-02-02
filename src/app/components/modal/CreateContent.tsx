import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

import { useGlobalState } from "@/app/context/globalProvider";
import Button from "../button";

function CreateContent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);

  const { allTasks, closeModal } = useGlobalState();

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const task = {
      title,
      description,
      date,
      completed,
    };

    try {
      const res = await axios.post("/api/tasks", task);

      if (res.data.error) {
        toast.error(res.data.error);
      }

      if (!res.data.error) {
        toast.success("Task created successfully.");
        allTasks();
        closeModal();
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`text-colorGrey1 p-6 rounded bg-gray-900`}
    >
      <h1 className="text-2xl font-semibold mb-4">Create a Task</h1>
      <div className="input-control mt-6 md:mt-4 font-medium">
        <label htmlFor="title" className="block text-sm md:text-lg mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          name="title"
          onChange={handleChange("title")}
          placeholder="e.g, Watch a video from Fireship."
          className="w-full p-4 bg-gray-800 text-gray-700 rounded"
        />
      </div>
      <div className="input-control mt-6 md:mt-4 font-medium">
        <label htmlFor="description" className="block text-sm md:text-lg mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={handleChange("description")}
          name="description"
          id="description"
          rows={4}
          placeholder="e.g, Watch a video about Next.js Auth"
          className="w-full p-4 bg-gray-800 text-gray-700 rounded"
        ></textarea>
      </div>
      <div className="input-control mt-6 md:mt-4 font-medium">
        <label htmlFor="date" className="block text-sm md:text-lg mb-2">
          Date
        </label>
        <input
          value={date}
          onChange={handleChange("date")}
          type="date"
          name="date"
          id="date"
          className="w-full p-4 bg-gray-800 text-gray-700 rounded"
        />
      </div>
      <div className="toggler input-control flex items-center justify-between mt-6 md:mt-4 cursor-pointer">
        <label htmlFor="completed" className="flex-1 text-gray-300">
          is Completed ?
        </label>
        <input
          value={completed.toString()}
          onChange={handleChange("completed")}
          type="checkbox"
          name="completed"
          id="completed"
        />
      </div>

      <div className="submit-btn flex justify-between">
        <Button
          type="submit"
          name="Cancel"
          padding="0.8rem 2rem"
          background="bg-colorDanger"
          color="text-colorGreyDark"
          onClick={closeModal}
        />
        <Button
          type="submit"
          name="Create Task"
          padding="0.8rem 2rem"
          background="bg-colorPrimaryGreen"
          color="text-colorGreyDark"
        />
      </div>
    </form>
  );
}

export default CreateContent;
