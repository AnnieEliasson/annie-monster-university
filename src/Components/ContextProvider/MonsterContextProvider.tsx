import React, { createContext, useReducer } from "react";
import data from "../../data/data.json";
import { Action, reducer } from "./reducer";
import { Monster } from "../../Types/Types";

type PropList = {
  children: React.ReactNode;
};
const initialMonsters = data;

export const MonsterContext = createContext<{
  state: Monster[];
  dispatch: React.Dispatch<Action>;
}>({
  state: initialMonsters,
  dispatch: () => null,
});

const MonsterContextProvider = ({ children }: PropList) => {
  const [state, dispatch] = useReducer(reducer, initialMonsters);

  return (
    <MonsterContext.Provider value={{ state, dispatch }}>
      {children}
    </MonsterContext.Provider>
  );
};

export default MonsterContextProvider;
