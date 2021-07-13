import { Button } from "@components/generic";
import { emailList } from "@data-access";
import TextField from "@material-ui/core/TextField";
import { EmailAddress, IEmailAddress, validateEmailAddress } from "@utility";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useMutation } from "react-query";

const getFormValue = (formData: FormData, name: string) => {
  const value = formData.get(name);
  if (value) {
    return value.toString();
  }
  throw new Error(`failed to get ${name} from form data`);
};

export const EmailListForm = () => {
  const [errors, setErrors] = useState<{ message: string }[]>([]);

  const mutation = useMutation({
    mutationFn: async (emailAddress: IEmailAddress) => {
      await emailList.subscribe({ emailAddress });
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formValues = new FormData(form);

    const emailAddress = getFormValue(formValues, "emailAddress");

    const errors = validateEmailAddress(emailAddress);

    setErrors(errors);

    if (errors.length === 0) {
      await mutation.mutateAsync(EmailAddress(emailAddress));

      form.reset();
    }
  };

  const handleChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    const emailAddress = event.currentTarget.value;

    const errors = validateEmailAddress(emailAddress);

    setErrors(errors);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="filled"
        id="email sign up"
        label="Email Address"
        name="emailAddress"
        type="email"
        onChange={handleChange}
        fullWidth
        sx={{ marginY: 1 }}
      />

      <Button
        disabled={errors.length > 0}
        loading={mutation.status === "loading"}
        type="submit"
        fullWidth
        size="large"
        variant="contained"
      >
        Subscribe
      </Button>
    </form>
  );
};
