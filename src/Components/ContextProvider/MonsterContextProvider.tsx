import React, { createContext, useReducer } from "react";
import data from "../../data/data.json";

type PropList = {
  children: React.ReactNode;
};
const initialMonsters = data;

type Monster = {
  id: number;
  firstName: string;
  lastNamn: string;
  program: string;
  appearance: {
    eyes: number;
    tentacles: number;
    color: string;
    skin: string;
    horn: {
      hasHorn: boolean;
      description: string;
    };
  };
  hobbies: string[];
  homeTown: string;
};

type Action = {
  type: "REMOVE";
  payload: string;
};

const reducer = (state: Monster[], action: Action) => {
  switch (action.type) {
    case "REMOVE":
      console.log("REMOVE", action.payload);

      return [...state.filter((m) => String(m.id) !== action.payload)];

      break;

    default:
      return state;
  }
};

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
