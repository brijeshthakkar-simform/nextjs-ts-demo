"use client";

import React from "react";
import { Toaster } from "sonner";

import { GlobalProvider } from "../context/globalProvider";

interface ContextProviderProps {
  children: React.ReactNode;
}

function ContextProvider({ children }: ContextProviderProps) {
  return (
    <GlobalProvider>
      <Toaster />
      {children}
    </GlobalProvider>
  );
}

export default ContextProvider;
