import { useState } from "react";

export const usePersistedState = <T>(key: string, initial: T) => {
  const [state, setState] = useState<T>(() => {
    if (typeof localStorage === "undefined") {
      return initial;
    }

    const data = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }

    return initial;
  });

  const setStatePresisted = (nextState: T) => {
    localStorage.setItem(key, JSON.stringify(nextState));
    setState(nextState);
  };

  return [state, setStatePresisted] as [typeof state, typeof setStatePresisted];
};
