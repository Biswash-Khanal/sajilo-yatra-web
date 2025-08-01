import { ReactNode } from "react";

//type for the app context provider children prop
export type TypeChildrenContextProvider = {
  children: ReactNode;
};

//type for the value prop being sent across the entire context
//contains the usestates and the respective functions
export type TypeValueContextProvider = {
  testState: number;
  setTestState: React.Dispatch<React.SetStateAction<number>>;
};
