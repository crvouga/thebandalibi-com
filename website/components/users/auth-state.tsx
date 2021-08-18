import constate from "constate";
import { IAuthState, users } from "data-access/users";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";

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

export const useSignOut = () => {
  return useMutation(() => {
    return users.auth.signOut();
  });
};

export const [AuthStateContext, useAuthStateContext] = constate(useAuthState);
