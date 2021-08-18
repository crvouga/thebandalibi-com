import constate from "constate/dist/ts/src";
import { IAuthState, users } from "data-access/users";
import { useEffect, useState } from "react";

const useAuthState = (): IAuthState => {
  const [authState, setAuthState] = useState<IAuthState>({
    status: "loading",
    user: null,
  });

  useEffect(() => {
    const unsubscribe = users.auth.onAuthStateChanged((authState) => {
      setAuthState(authState);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return authState;
};

export const [AuthStateContext, useAuthStateContext] = constate(useAuthState);
