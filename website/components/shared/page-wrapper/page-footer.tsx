import { Button, PlatformButton } from "@components/generic";
import { INavLinksProps, NavButtons } from "@components/shared";
import { useAuthStateContext } from "@components/users";
import { AuthForm } from "@components/users/auth-form";
import { CALL_TO_ACTIONS, LABELS, LEGAL_LINKS, ROUTES } from "@config";
import { IPlatformLink } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import { createMailToUrl } from "@utility";
import { useRouter } from "next/router";

const PageFooterNavLinks = ({ links }: INavLinksProps) => {
  const router = useRouter();

  return (
    <NavButtons
      selectedHref={router.pathname}
      links={links}
      BoxProps={{
        sx: {
          flexDirection: "column",
        },
      }}
    />
  );
};

export const PageEnd = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "text.secondary",
        marginY: 2,
      }}
    >
      <Typography variant="subtitle2" align="center" color="inherit">
        Alibi {new Date().getFullYear().toString()}
      </Typography>
      <Button href={ROUTES.developer} size="small" color="inherit">
        {LABELS.developer}
      </Button>
    </Container>
  );
};

export const PageFooter = ({
  platformLinks,
  contactEmailAddress,
}: {
  platformLinks: IPlatformLink[];
  contactEmailAddress: string;
}) => {
  const authState = useAuthStateContext();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            marginY: 2,
          },
        }}
      >
        {authState.status === "unauthenticated" && (
          <Container maxWidth="sm">
            <Typography align="center" variant="h3">
              {LABELS.authentication}
            </Typography>

            <AuthForm />
          </Container>
        )}

        <Container maxWidth="sm">
          <Typography align="center" variant="h3">
            Contact
          </Typography>

          <Button
            variant="contained"
            color="inherit"
            fullWidth
            size="large"
            href={createMailToUrl({
              emailAddress: contactEmailAddress,
            })}
            startIcon={<EmailIcon />}
            sx={{
              marginY: 1,
            }}
          >
            Email
          </Button>
        </Container>

        <Container maxWidth="sm">
          <Typography align="center" variant="h3" gutterBottom>
            Follow Us
          </Typography>

          {platformLinks.map((link) => {
            return (
              <PlatformButton
                variant="contained"
                size="large"
                appIconSrc={link.platform.appIconUrl}
                key={link.url}
                platformName={link.platform.name}
                doesOpenNewTab
                href={link.url}
                sx={{ marginBottom: 1 }}
              />
            );
          })}
        </Container>

        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Legal
          </Typography>
          <PageFooterNavLinks links={LEGAL_LINKS} />
        </Container>

        <PageEnd />
      </Box>
    </>
  );
};
