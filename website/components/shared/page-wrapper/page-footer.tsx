import { Button } from "@components/generic";
import { PlatformLinks } from "@components/shared";
import { CALL_TO_ACTIONS, TOP_LEVEL_LINKS } from "@config";
import { IPlatformLink } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { createMailToUrl } from "@utility";
import { EmailListForm } from "@components/email-list";
import { NavLinks } from "@components/shared";
import { ThemeModeSelectForm } from "../../top-level/theme";

export const PageFooter = ({
  platformLinks,
  adminUrl,
  websiteAuthor,
  contactEmailAddress,
}: {
  platformLinks: IPlatformLink[];
  adminUrl: string;
  contactEmailAddress: string;
  websiteAuthor: {
    name: string;
    url: string;
  };
}) => {
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
        <Container>
          <Typography align="center" variant="h3" gutterBottom>
            Follow Us
          </Typography>

          <PlatformLinks
            UniformGridProps={{
              ContainerProps: {
                justifyContent: "center",
              },
            }}
            links={platformLinks.map((link) => ({
              href: link.url,
              label: link.platform.name,
            }))}
          />
        </Container>

        <Container maxWidth="xs">
          <Typography align="center" variant="h3">
            {CALL_TO_ACTIONS.emailListTitle}
          </Typography>

          <Typography align="center" color="textSecondary">
            {CALL_TO_ACTIONS.emailListSubtitle}
          </Typography>

          <EmailListForm />
        </Container>

        <Container maxWidth="xs">
          <Typography align="center" variant="h3">
            {CALL_TO_ACTIONS.contactTitle}
          </Typography>

          <Typography align="center" color="textSecondary">
            {CALL_TO_ACTIONS.contactSubtitle}
          </Typography>

          <Button
            variant="contained"
            color="primary"
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
          <ThemeModeSelectForm />
        </Container>

        <Container maxWidth="md">
          <Grid container justifyContent="center" spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h4" align="center">
                Navigation
              </Typography>
              <NavLinks links={TOP_LEVEL_LINKS} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h4" align="center">
                Legal
              </Typography>
              <NavLinks
                links={[
                  {
                    label: "Shipping Policy",
                    href: "/",
                  },
                  {
                    label: "Cookie Policy",
                    href: "/",
                  },
                  {
                    label: "Privacy Policy",
                    href: "/",
                  },
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h4" align="center">
                Website
              </Typography>
              <NavLinks
                links={[
                  {
                    href: adminUrl,
                    label: "Content",
                  },
                  {
                    href: websiteAuthor.url,
                    label: websiteAuthor.name,
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Container>

        <Typography variant="subtitle2" color="text.secondary">
          Alibi {new Date().getFullYear().toString()}
        </Typography>
      </Box>
    </>
  );
};
