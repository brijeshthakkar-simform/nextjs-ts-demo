import React from "react";

interface TaskProps {
  tasks: any;
}

const Tasks = ({ tasks }: TaskProps) => {
  return <div>Tasks {JSON.stringify(tasks)}</div>;
};

export default Tasks;
