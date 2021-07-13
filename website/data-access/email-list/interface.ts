import { IEmailAddress } from "@utility";

export type IEmailList = {
  subscribe: ({
    emailAddress,
  }: {
    emailAddress: IEmailAddress;
  }) => Promise<void>;
};

export const createEmailList = (): IEmailList => {
  return {
    async subscribe({ emailAddress }) {
      return new Promise((resolve) => setTimeout(resolve, 3000));
    },
  };
};

export const emailList = createEmailList();
