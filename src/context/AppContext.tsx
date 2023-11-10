"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";

type PageContextType = {
  stage: string;
  setStage: (stage: string) => void;
  mousePosition: { x: number; y: number };
  step: number;
  setStep: (step: number) => void;
  isDesktop: boolean;
  setIsDesktop: (isDesktop: boolean) => void;
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
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 800);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDesktop) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
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
        isDesktop,
        setIsDesktop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
