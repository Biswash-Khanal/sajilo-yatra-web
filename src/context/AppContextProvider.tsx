import { useState } from "react";
import { AppContext } from "./AppContext";

import { TypeChildrenContextProvider, TypeValueContextProvider } from "./interfaces";


const AppContextProvider = ({ children }: TypeChildrenContextProvider) => {

  const [testState, setTestState] = useState(5);

  const value:TypeValueContextProvider = {
    testState,
    setTestState,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
