import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [componentsIndex, setComponentsIndex] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <AppContext.Provider value={{
      componentsIndex,
      setComponentsIndex,
      score,
      setScore
    }}>
      {children}
    </AppContext.Provider>
  );
};