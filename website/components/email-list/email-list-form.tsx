import { Button } from "@components/generic";
import { emailList } from "@data-access";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {
  EmailAddress,
  IEmailAddress,
  useBoolean,
  validateEmailAddress,
} from "@utility";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { useMutation } from "react-query";

export const EmailListForm = () => {
  const [errors, setErrors] = useState<{ message: string }[]>([
    {
      message: "Invalid email address",
    },
  ]);

  const open = useBoolean(false);

  const mutation = useMutation({
    mutationFn: async (emailAddress: IEmailAddress) => {
      await emailList.subscribe({ emailAddress });
    },
    onSuccess: () => {
      open.setTrue();
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);

    const emailAddress = formData.get("emailAddress");

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
    setErrors(validateEmailAddress(emailAddress));
  };

  const theme = useTheme();

  return (
    <>
      <Dialog open={open.value} onClose={open.setFalse}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: theme.palette.success.main,
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MdCheckCircle
            style={{
              width: "100px",
              height: "100px",
              color: "#fff",
            }}
          />
        </Box>
        <Box
          sx={{
            p: 2,
          }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              color: "success.main",
            }}
          >
            Success
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            Thank you for subscribing to our email list!
          </Typography>
        </Box>
        <DialogActions>
          <Button onClick={open.setFalse} color="inherit">
            Close
          </Button>
        </DialogActions>
      </Dialog>

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
    </>
  );
};
