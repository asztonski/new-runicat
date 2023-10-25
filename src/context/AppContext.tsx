"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";

type PageContextType = {
  stage: string;
  setStage: (stage: string) => void;
  mousePosition: { x: number; y: number };
};

export const AppContext = createContext<PageContextType | undefined>(undefined);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [stage, setStage] = useState<string>("home");
  const [step, setStep] = useState<number>(1);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        stage,
        setStage,
        step,
        setStep,
        mousePosition,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
