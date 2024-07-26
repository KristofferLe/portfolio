import React, { createContext } from "react";
import { useSelector } from "react-redux";

export const LangVariableContext = createContext();

export default function LangVariableProvider({ children }) {
  const language = useSelector((state) => state.language);
  const langVar = language === "en" ? "en" : "sv";

  return (
    <LangVariableContext.Provider value={{ langVar }}>
      {children}
    </LangVariableContext.Provider>
  );
}
