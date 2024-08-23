import React, { createContext, ReactNode } from "react";
import { AppState, AppAction } from "./reducer";
import useAuth from "./useAuth";

interface AppProviderProps {
  children: ReactNode;
}

export interface AppContextType { // Ensure this is exported
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const { state, dispatch } = useAuth();

  if (state.loading) return <>...loading</>;

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};



export { AppContext };
