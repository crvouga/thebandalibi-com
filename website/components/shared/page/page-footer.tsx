import { Button, PlatformLinkCard, UniformGrid } from "@components/generic";
import { IPlatformLink } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createMailToUrl } from "@utility";
import { MdLink } from "react-icons/md";
import { EmailListForm } from "../../email-list";

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
    <Container component="footer">
      <Box
        sx={{
          paddingY: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            marginY: 4,
          },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography align="center" variant="h3">
            Follow Us
          </Typography>

          <UniformGrid
            ContainerProps={{ justifyContent: "center", spacing: 2 }}
            ItemProps={{ xs: 6, sm: 4, md: 2 }}
          >
            {platformLinks.map((platformLink) => (
              <Box key={platformLink.url} margin="auto" maxWidth="144px">
                <PlatformLinkCard
                  name={platformLink.platform.name}
                  url={platformLink.url}
                />
              </Box>
            ))}
          </UniformGrid>
        </Box>

        <Container maxWidth="xs" disableGutters>
          <Typography align="center" variant="h3">
            Subscribe
          </Typography>

          <Typography align="center" variant="subtitle1" color="textSecondary">
            Subscribe to our newsletter so you never miss an update.
          </Typography>

          <EmailListForm />
        </Container>

        <Container maxWidth="xs">
          <Typography align="center" variant="h3">
            Contact Us
          </Typography>

          <Typography align="center" variant="subtitle1" color="textSecondary">
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

        <Box
          sx={{
            color: "text.secondary",
          }}
        >
          <Button
            startIcon={<MdLink />}
            size="small"
            color="inherit"
            href={adminUrl}
            sx={{ marginRight: 2 }}
          >
            Admin
          </Button>
          <Button
            startIcon={<MdLink />}
            size="small"
            color="inherit"
            href={websiteAuthor.url}
          >
            {websiteAuthor.name}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
