import React, { createContext, useReducer } from "react";
import data from "../../data/data.json";

type PropList = {
  children: React.ReactNode;
};
const initialMonsters = data;

export type Monster = {
  id: number | string;
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
      description?: string;
    };
  };
  hobbies: string[];
  homeTown: string;
};

type Action =
  | {
      type: "REMOVE";
      payload: string;
    }
  | { type: "FILTER"; payload: string }
  | { type: "ADD"; payload: Monster }
  | { type: "EDIT"; payload: Monster }
  | { type: "SORT" };

const reducer = (state: Monster[], action: Action) => {
  switch (action.type) {
    case "ADD":
      console.log("State: ", action.payload);
      return [action.payload, ...state];

    case "REMOVE":
      console.log("REMOVE", action.payload);

      return [...state.filter((m) => String(m.id) !== action.payload)];

    case "EDIT":
      const result = state.filter((x) => x.id !== action.payload.id);

      return [...result, action.payload];

    case "SORT":
      return [
        ...state.sort((a, b) =>
          a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
        ),
      ];

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
