import { PlatformButton } from "@components/generic";
import { users } from "@data-access";
import Box from "@material-ui/core/Box";

export const AuthForm = () => {
  return (
    <Box sx={{ paddingY: 2 }}>
      <PlatformButton
        fullWidth
        size="large"
        appIconSrc={"/google.png"}
        platformName="google"
        onClick={() => {
          users.auth.signIn({
            authMethod: {
              provider: "google",
            },
          });
        }}
      >
        {`Continue With Google`}
      </PlatformButton>
    </Box>
  );
};
