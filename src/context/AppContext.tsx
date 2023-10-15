'use client'

import React, { createContext, useState, ReactNode } from 'react';

type PageContextType = {
  stage: string;
  setStage: (stage: string) => void;
};

export const AppContext = createContext<PageContextType | undefined>(undefined);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stage, setStage] = useState<string>("home");

  return (
    <AppContext.Provider value={{ stage, setStage }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;


