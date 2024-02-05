import React, { useState } from "react";

import { useGlobalState } from "@/app/context/globalProvider";
import DeleteTaskContent from "../modal/DeleteModalContent";
import Modal from "../modal";

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
  const [deleteModal, setDeleteModal] = useState(false);

  const toggleModal = () => {
    setDeleteModal(!deleteModal);
  };

  const onSubmit = () => {
    deleteTask(id);
    toggleModal();
  };

  return (
    <>
      {deleteModal && (
        <Modal
          content={
            <DeleteTaskContent onClose={toggleModal} onSubmit={onSubmit} />
          }
        />
      )}

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

          <button className="delete ml-auto" onClick={() => toggleModal()}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskItem;
