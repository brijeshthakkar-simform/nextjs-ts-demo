import React from "react";

interface Props {
  name?: string;
  background?: string;
  padding?: string;
  onClick?: () => void;
  type?: "submit" | undefined;
  color?: string;
}

function Button({ name, background, padding, onClick, type, color }: Props) {
  return (
    <button
      type={type}
      className={`relative flex items-center text-colorGrey2 z-5 cursor-pointer transition-all duration-550 ease-in-out 
      rounded-lg
      ${background ? background : ""} 
      ${color ? color : ""} 
      ${padding ? padding : ""}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;
