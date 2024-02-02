"use client";

import React, { ReactNode } from "react";
import { Toaster } from "sonner";

import { GlobalProvider } from "../context/globalProvider";

interface ContextProviderProps {
  children: ReactNode;
}

function ContextProvider({ children }: ContextProviderProps) {
  return (
    <GlobalProvider>
      <Toaster richColors position="top-center" />
      {children}
    </GlobalProvider>
  );
}

export default ContextProvider;
