import { createContext, useContext } from "react";
import { TypeValueContextProvider } from "./interfaces";

export const AppContext = createContext<TypeValueContextProvider | null>(null);

export const useAppContext = () => {
  return useContext(AppContext);
};
