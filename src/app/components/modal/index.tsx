import React, { ReactNode } from "react";

interface ModalProps {
  content: ReactNode;
}

function Modal({ content }: ModalProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-100 flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-screen bg-opacity-45 bg-black blur-md bg-[#00000073]"></div>
      <div className="relative w-full max-w-screen-sm p-8 bg-colorBg2 shadow-lg rounded-md mx-4">
        {content}
      </div>
    </div>
  );
}

export default Modal;
