import { emailList } from "@data-access";
import { EmailAddress, IError, validateEmailAddress } from "@utility";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

type IState = "idle" | "success" | "error" | "loading";

export const useEmailListForm = () => {
  const [state, setState] = useState<IState>("idle");
  const [errors, setErrors] = useState<IError[]>([]);
  const [emailAddressErrors, setEmailAddressErrors] = useState<IError[]>([]);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);

    const emailAddress = formData.get("emailAddress")?.toString();

    const emailAddressErrors = validateEmailAddress(emailAddress);

    if (emailAddressErrors.length > 0) {
      setEmailAddressErrors(emailAddressErrors);

      setState("error");

      return;
    }

    setState("loading");

    const errors = await emailList.subscribe({
      emailAddress: EmailAddress(emailAddress),
    });

    if (errors.length > 0) {
      setErrors(errors);

      setState("error");

      return;
    }

    setState("success");

    form.reset();
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (
    event
  ) => {
    if (state === "error") {
      setErrors([]);
      setEmailAddressErrors([]);
      setState("idle");
    }
  };

  return {
    onSubmit,
    onChange,
    state,
    setState,
    errors,
    emailAddressErrors,
  };
};
