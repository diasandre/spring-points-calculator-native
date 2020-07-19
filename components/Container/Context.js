import React from "react";

export const Context = React.createContext({
  values: [],
  updateItem: () => {},
  removeItem: () => {},
});

export const ContextProvider = Context.Provider;
export const ContextConsumer = Context.Consumer;
