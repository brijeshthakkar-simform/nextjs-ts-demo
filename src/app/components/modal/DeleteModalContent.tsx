import React from "react";

import Button from "../button";

interface DeleteTaskContentProps {
  onClose: () => void;
  onSubmit: () => void;
}

function DeleteTaskContent({ onClose, onSubmit }: DeleteTaskContentProps) {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-center">Delete Task</h1>

      <p className="text-center  mb-6">
        Are you sure you want to delete this task?
      </p>

      <div className="submit-btn flex justify-between">
        <Button
          type="submit"
          name="Cancel"
          padding="0.8rem 2rem"
          background="bg-colorDanger"
          color="text-colorGreyDark"
          onClick={onClose}
        />
        <Button
          type="submit"
          name="Delete Task"
          padding="0.8rem 2rem"
          background="bg-colorPrimaryGreen"
          color="text-colorGreyDark"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
}

export default DeleteTaskContent;
