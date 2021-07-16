import { IError, IEmailAddress } from "@utility";

export type IEmailList = {
  subscribe: ({
    emailAddress,
  }: {
    emailAddress: IEmailAddress;
  }) => Promise<IError[]>;
};

export const createEmailList = (): IEmailList => {
  return {
    async subscribe({ emailAddress }) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return [];
    },
  };
};

export const emailList = createEmailList();
