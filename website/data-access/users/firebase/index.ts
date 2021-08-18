import { GoogleAuthProvider, signInWithRedirect } from "@firebase/auth";
import { firebaseAuth } from "../../third-party-services";
import { IUsers } from "../interface";

export const Users = (): IUsers => {
  return {
    auth: {
      async signIn({ authMethod }) {
        if (authMethod.provider === "google") {
          const provider = new GoogleAuthProvider();

          await signInWithRedirect(firebaseAuth, provider);

          return [];
        }

        return [];
      },

      async signOut() {
        return [];
      },

      onAuthStateChanged(callback) {
        const unsubscribe = firebaseAuth.onAuthStateChanged((userOrNull) => {
          if (userOrNull) {
            callback({
              status: "authenticated",
              user: {
                userId: userOrNull.uid,
                displayName: userOrNull.displayName ?? undefined,
              },
            });
            return;
          }

          callback({
            status: "unauthenticated",
            user: null,
          });
        });

        return unsubscribe;
      },
    },
  };
};
