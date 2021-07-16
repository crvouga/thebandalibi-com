import { Button } from "@components/generic";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { EmailListFormSuccessDialog } from "./email-list-form-success-dialog";
import { useEmailListForm } from "./use-email-list-form";
import { Alert } from "@material-ui/core";

export const EmailListForm = () => {
  const {
    state,
    emailAddressErrors,
    errors,
    setState,
    onSubmit,
    onChange,
  } = useEmailListForm();

  return (
    <>
      <EmailListFormSuccessDialog
        open={state === "success"}
        onClose={() => {
          setState("idle");
        }}
      />

      <Box>
        {errors.map((error) => (
          <Alert severity="error">{error.message}</Alert>
        ))}

        <form onSubmit={onSubmit}>
          <TextField
            color="secondary"
            onChange={onChange}
            error={emailAddressErrors.length > 0}
            helperText={
              emailAddressErrors.length > 0 && emailAddressErrors[0].message
            }
            variant="filled"
            id="email sign up"
            label="Email Address"
            name="emailAddress"
            type="email"
            fullWidth
            sx={{
              marginY: 1,
            }}
          />

          <Button
            disabled={state !== "idle"}
            loading={state === "loading"}
            type="submit"
            color="secondary"
            fullWidth
            size="large"
            variant="contained"
          >
            Subscribe
          </Button>
        </form>
      </Box>
    </>
  );
};
