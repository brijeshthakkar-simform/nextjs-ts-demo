"use client";

import React, { createContext, useContext } from "react";

import themes from "./themes";

export const GlobalContext = createContext();
export const useGlobalState = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const selectedTheme = "light";

  const theme = themes[selectedTheme];

  return (
    <GlobalContext.Provider value={{ theme }}>
      {children}
    </GlobalContext.Provider>
  );
};
