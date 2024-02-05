import React from "react";
import axios from "axios";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";

import { useGlobalState } from "@/app/context/globalProvider";
import Button from "../button";

interface CreateTask {
  title: string;
  description: string;
  date: string;
  completed: boolean;
}

function CreateContent() {
  const { allTasks, closeModal } = useGlobalState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTask>();

  const onSubmit: SubmitHandler<CreateTask> = async (data) => {
    try {
      const res = await axios.post("/api/tasks", data);

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
      onSubmit={handleSubmit(onSubmit)}
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
          placeholder="Enter a title for the task"
          className="w-full p-4 bg-gray-800 text-gray-700 rounded"
          {...register("title", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters",
            },
          })}
        />
        {errors.title && (
          <span className="text-colorDanger text-sm mt-2 inline-block">
            {errors.title.message}
          </span>
        )}
      </div>
      <div className="input-control mt-6 md:mt-4 font-medium">
        <label htmlFor="description" className="block text-sm md:text-lg mb-2">
          Description
        </label>
        <textarea
          id="description"
          rows={4}
          placeholder="Enter a description for the task"
          className="w-full p-4 bg-gray-800 text-gray-700 rounded"
          {...register("description", {
            required: "This field is required",
            minLength: {
              value: 5,
              message: "Description must be at least 5 characters",
            },
          })}
        ></textarea>
        {errors.description && (
          <span className="text-colorDanger text-sm mt-2 inline-block">
            {errors.description.message}
          </span>
        )}
      </div>
      <div className="input-control mt-6 md:mt-4 font-medium">
        <label htmlFor="date" className="block text-sm md:text-lg mb-2">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="w-full p-4 bg-gray-800 text-gray-700 rounded"
          {...register("date", {
            required: "This field is required",
          })}
        />
        {errors.date && (
          <span className="text-colorDanger text-sm mt-2 inline-block">
            {errors.date.message}
          </span>
        )}
      </div>
      <div className="toggler input-control flex items-center justify-between mt-6 md:mt-4 cursor-pointer">
        <label htmlFor="completed" className="flex-1">
          is Completed ?
        </label>
        <input
          type="checkbox"
          id="completed"
          className="accent-colorGreenDark"
          {...register("completed")}
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
