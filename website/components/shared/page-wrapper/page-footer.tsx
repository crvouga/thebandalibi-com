import { Button, PlatformButton } from "@components/generic";
import {
  INavLinksProps,
  NavLinks,
  NavButtons,
  PlatformIconLinks,
} from "@components/shared";
import { useAuthStateContext } from "@components/users";
import { AuthForm } from "@components/users/auth-form";
import {
  CALL_TO_ACTIONS,
  LABELS,
  LEGAL_LINKS,
  ROUTES,
  TOP_LEVEL_LINKS,
} from "@config";
import { IPlatformLink } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { createMailToUrl } from "@utility";
import { useRouter } from "next/router";

const FooterNavLinks = ({ links }: INavLinksProps) => {
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
          paddingBottom: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            marginY: 4,
          },
        }}
      >
        {authState.status === "unauthenticated" && (
          <Container maxWidth="xs">
            <Typography align="center" variant="h3">
              {LABELS.authentication}
            </Typography>

            <AuthForm />
          </Container>
        )}

        <Container maxWidth="xs">
          <Typography align="center" variant="h3">
            {CALL_TO_ACTIONS.contactTitle}
          </Typography>

          <Typography align="center" color="textSecondary">
            {CALL_TO_ACTIONS.contactSubtitle}
          </Typography>

          <Button
            variant="outlined"
            color="inherit"
            fullWidth
            size="large"
            href={createMailToUrl({ emailAddress: contactEmailAddress })}
            sx={{
              marginY: 1,
            }}
          >
            {CALL_TO_ACTIONS.contactAction}
          </Button>
        </Container>

        <Container maxWidth="xs">
          <Typography align="center" variant="h3" gutterBottom>
            Follow Us
          </Typography>

          {platformLinks.map((link) => {
            return (
              <PlatformButton
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

        <Container maxWidth="md">
          <Grid container justifyContent="center" spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h4" align="center" gutterBottom>
                Navigation
              </Typography>
              <FooterNavLinks links={TOP_LEVEL_LINKS} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h4" align="center" gutterBottom>
                Legal
              </Typography>
              <FooterNavLinks links={LEGAL_LINKS} />
            </Grid>
          </Grid>
        </Container>

        <Container
          maxWidth="xs"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "text.secondary",
          }}
        >
          <Typography
            variant="subtitle2"
            align="center"
            color="inherit"
            sx={{
              marginBottom: 4,
            }}
          >
            Alibi {new Date().getFullYear().toString()}
          </Typography>
          <Button href={ROUTES.developer} size="small" color="inherit">
            {LABELS.developer}
          </Button>
        </Container>
      </Box>
    </>
  );
};
