import { AppIcon, Button, UniformGrid } from "@components/generic";
import { TOP_LEVEL_LINKS } from "@config";
import { IPlatformLink } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { createMailToUrl } from "@utility";
import { EmailListForm } from "../../email-list";
import { NavLinks } from "../navigation/nav-links";
import { ThemeModeSelectForm } from "../theme";

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

          <UniformGrid
            ContainerProps={{ justifyContent: "center" }}
            ItemProps={{ xs: 3, sm: 1, md: 1 }}
          >
            {platformLinks.map((platformLink) => (
              <Box key={platformLink.url} margin="auto" maxWidth="144px" p={1}>
                <AppIcon
                  src={platformLink.platform.appIconUrl}
                  href={platformLink.url}
                  alt={platformLink.platform.name}
                />
              </Box>
            ))}
          </UniformGrid>
        </Container>

        <Container maxWidth="xs">
          <Typography align="center" variant="h3">
            Subscribe
          </Typography>

          <Typography align="center" color="textSecondary">
            Subscribe to our newsletter so you never miss an update.
          </Typography>

          <EmailListForm />
        </Container>

        <Container maxWidth="xs">
          <Typography align="center" variant="h3">
            Contact Us
          </Typography>

          <Typography align="center" color="textSecondary">
            Want to get in touch? Send us an email.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            href={createMailToUrl({ emailAddress: contactEmailAddress })}
            sx={{ marginY: 1 }}
          >
            Send Email
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
