import { IPlatformLink } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Button, PlatformLinkCard, UniformGrid } from "generic-components";
import { routes } from "../../../routes";

export const PageFooter = ({
  platformLinks,
  websiteAuthor,
}: {
  platformLinks: IPlatformLink[];
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

        <Box color="text.secondary">
          <Button
            size="small"
            color="inherit"
            href={routes.contentManagementDashboard()}
          >
            Admin
          </Button>
        </Box>

        <Box color="text.secondary">
          <Button size="small" color="inherit" href={websiteAuthor.url}>
            Built By {websiteAuthor.name}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
