import { IPlatformLink } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Button, PlatformLinkCard, UniformGrid } from "@components/generic";
import { MdEmail } from "react-icons/md";

const mailTo = ({ emailAddress }: { emailAddress: string }) => {
  return `mailto:${emailAddress}`;
};

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
      <Box display="flex" flexDirection="column" alignItems="center">
        <UniformGrid
          ContainerProps={{ justify: "center", spacing: 2 }}
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

        <Button
          endIcon={<MdEmail />}
          variant="contained"
          size="large"
          href={mailTo({ emailAddress: contactEmailAddress })}
        >
          Contact Us
        </Button>

        <Box p={1} />

        <Box color="text.secondary">
          <Button size="small" color="inherit" href={adminUrl}>
            Admin
          </Button>
        </Box>

        <Box color="text.secondary">
          <Button size="small" color="inherit" href={websiteAuthor.url}>
            Built By {websiteAuthor.name}
          </Button>
        </Box>

        <Box p={1} />
      </Box>
    </Container>
  );
};
