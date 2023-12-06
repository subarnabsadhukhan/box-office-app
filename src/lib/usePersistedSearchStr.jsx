import { useEffect, useReducer } from "react";

const reducer = (currentString, action) => {
  switch (action.type) {
    case "NEWSEARCH":
      return action.value;

    default:
      return currentString;
  }
};

export const usePersistedSearchStr = () => {
  const [searchStr, dispatch] = useReducer(reducer, "", (initial) => {
    const persistedValue = sessionStorage.getItem("searchString");

    return persistedValue ? persistedValue : initial;
  });

  useEffect(() => {
    if (searchStr) sessionStorage.setItem("searchString", searchStr);
  }, [searchStr]);
  return [searchStr, dispatch];
};
