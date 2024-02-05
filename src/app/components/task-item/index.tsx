import React from "react";

import { useGlobalState } from "@/app/context/globalProvider";

interface TaskItemProps {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  id: string;
}

function TaskItem({
  title,
  description,
  date,
  isCompleted,
  id,
}: TaskItemProps) {
  const { deleteTask, updateTask } = useGlobalState();

  return (
    <div
      className={`p-4 rounded-lg bg-borderColor2 shadow-shadow1 border-2 border-borderColor2 h-64 flex flex-col gap-2`}
    >
      <h1 className="text-1.5rem font-semibold">{title}</h1>
      <p>{description}</p>
      <p className="mt-auto">{date}</p>

      <div className="flex items-center gap-3 task-footer">
        {isCompleted ? (
          <button
            className={`completed inline-block px-4 py-2 bg-colorGreenDark text-white rounded-full`}
            onClick={() => updateTask({ id, isCompleted: !isCompleted })}
          >
            Completed
          </button>
        ) : (
          <button
            className={`incomplete inline-block px-4 py-2 bg-colorDanger text-white rounded-full`}
            onClick={() => updateTask({ id, isCompleted: !isCompleted })}
          >
            Incomplete
          </button>
        )}

        <button className="delete ml-auto" onClick={() => deleteTask(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
