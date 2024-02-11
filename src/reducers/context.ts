import React from "react";
import { Items_T, initialItems } from "./state";
import { Action_T } from "./actions"

interface Context_I {
  state: Items_T;
  dispatch: React.Dispatch<Action_T>;
}


export const Context = React.createContext<Context_I>({
  state: initialItems,
  dispatch: () => undefined,
});
