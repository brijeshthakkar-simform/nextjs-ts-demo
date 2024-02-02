import React from "react";

import { useGlobalState } from "@/app/context/globalProvider";
import Modal from "../modal";
import CreateContent from "../modal/CreateContent";
import TaskItem from "../task-item";

interface TasksProps {
  tasks: any[];
}

function Tasks({ tasks }: TasksProps) {
  const { openModal, modal } = useGlobalState();

  return (
    <main
      className={`relative p-8 w-full bg-colorBg2 border-2 border-borderColor2 rounded-lg h-full overflow-y-auto
      `}
    >
      {modal && <Modal content={<CreateContent />} />}
      <h1
        className={`text-2xl font-bold relative after:absolute after:content after:block after:h-0.2 after:w-3 after:bg-colorPrimaryGreen after:bottom-0.5 after:left-0`}
      >
        All Tasks
      </h1>

      <button
        onClick={openModal}
        className={`fixed top-4.9 right-5.1 w-12 h-12 rounded-full bg-colorBg border-2 border-borderColor2 shadow-md text-colorGrey2 text-lg flex items-center justify-center transition-all duration-300 hover:bg-colorGrey5 hover:text-colorGrey0 sm:top-3 sm:right-3.5`}
      >
        +
      </button>

      <div className="tasks my-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.isCompleted}
            id={task.id}
          />
        ))}
        <button
          onClick={openModal}
          className={`create-task flex items-center justify-center gap-2 h-64 text-colorGrey2 font-semibold cursor-pointer rounded-lg border-3 border-dashed border-colorGrey5 transition-all duration-300 hover:bg-colorGrey5 hover:text-colorGrey0`}
        >
          + Add New Task
        </button>
      </div>
    </main>
  );
}

export default Tasks;
