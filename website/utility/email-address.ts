//source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const EMAIL_ADDRESS_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export type IEmailAddress = string & { type: "EmailAddress" };

export const validateEmailAddress = (emailAddress: unknown) => {
  if (typeof emailAddress !== "string") {
    return [
      {
        message: "Email address must be a string",
      },
    ];
  }

  if (EMAIL_ADDRESS_REGEX.test(emailAddress)) {
    return [];
  }

  return [
    {
      message: "Email address is invalid.",
    },
  ];
};

export const EmailAddress = (emailAddress: unknown) => {
  const errors = validateEmailAddress(emailAddress);

  if (errors.length === 0) {
    return emailAddress as IEmailAddress;
  }

  throw new Error(errors.join(", "));
};
