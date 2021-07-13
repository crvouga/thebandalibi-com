import { Button, PlatformLinkCard, UniformGrid } from "@components/generic";
import { IPlatformLink } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createMailToUrl } from "@utility";
import { MdEmail } from "react-icons/md";
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginY: 4, width: "100%" }}>
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

        <Box sx={{ marginY: 4 }}>
          <Typography align="center" variant="h3">
            Subscribe
          </Typography>

          <Typography align="center" variant="subtitle1" color="textSecondary">
            Subscribe to our email list so you never miss an update!
          </Typography>

          <EmailListForm />
        </Box>

        <Box
          sx={{
            marginY: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography align="center" variant="h3">
            Contact Us
          </Typography>
          <Button
            endIcon={<MdEmail />}
            variant="contained"
            color="primary"
            size="large"
            href={createMailToUrl({ emailAddress: contactEmailAddress })}
            sx={{ marginY: 1 }}
          >
            Send Email
          </Button>
        </Box>

        <Box
          sx={{
            color: "text.secondary",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button size="small" color="inherit" href={adminUrl}>
            Admin
          </Button>
          <Button size="small" color="inherit" href={websiteAuthor.url}>
            Built By {websiteAuthor.name}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
