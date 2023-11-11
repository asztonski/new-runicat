"use client";
import React, { createContext, useState, ReactNode } from "react";
import { useWindowSize } from "@/utils/useWindowSize";

type PageContextType = {
  stage: string;
  setStage: (stage: string) => void;
  step: number;
  setStep: (step: number) => void;
  isDesktop: boolean,
};

export const AppContext = createContext<PageContextType | undefined>(undefined);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [stage, setStage] = useState<string>("home");
  const [step, setStep] = useState<number>(1);
  const isDesktop = useWindowSize()


  return (
    <AppContext.Provider
      value={{
        stage,
        setStage,
        step,
        setStep,
        isDesktop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
