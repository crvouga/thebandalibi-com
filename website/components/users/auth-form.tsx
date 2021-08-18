import Box from "@material-ui/core/Box";
import { PlatformButton } from "@components/generic";
import { users } from "@data-access";

export const AuthForm = () => {
  return (
    <Box sx={{ paddingY: 2 }}>
      <PlatformButton
        fullWidth
        platformName="google"
        onClick={() => {
          users.auth.signIn({
            authMethod: {
              provider: "google",
            },
          });
        }}
      />
    </Box>
  );
};
