import { Monster } from "../../Types/Types";

export type Action =
  | {
      type: "REMOVE";
      payload: string;
    }
  | { type: "FILTER"; payload: string }
  | { type: "ADD"; payload: Monster }
  | { type: "EDIT"; payload: Monster }
  | { type: "SORT" };

export const reducer = (state: Monster[], action: Action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];

    case "REMOVE":
      return [...state.filter((m) => String(m.id) !== action.payload)];

    case "EDIT":
      const result = state.filter((x) => x.id === action.payload.id);

      const index = state.indexOf(result[0]);
      state.splice(index, 1, action.payload);
      return [...state];

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
