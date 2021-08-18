import { IEmailAddress, IError } from "@utility";

export type IPassword = string & { type: "Password" };

export type IAuthMethod =
  | {
      provider: "google";
    }
  | {
      provider: "email-password";
      emailAddress: IEmailAddress;
      password: IPassword;
    };

export type IAuthUser = {
  userId: string;
  displayName?: string;
};

export type IAuthState = {
  status: "loading" | "unauthenticated" | "authenticated";
  user: IAuthUser | null;
};

export type IUsers = {
  auth: {
    onAuthStateChanged: (
      callback: (authState: IAuthState) => void
    ) => () => void;
    signIn({ authMethod }: { authMethod: IAuthMethod }): Promise<IError[]>;
    signOut(): Promise<IError[]>;
  };
};
