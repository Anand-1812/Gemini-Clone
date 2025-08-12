import { createContext, useEffect } from "react";
import main from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const onSent = async (prompt) => {
    await main(prompt);
  };

  useEffect(() => {
    onSent("What is React JS?");
  }, []);

  return (
    <Context.Provider value={{ onSent }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

