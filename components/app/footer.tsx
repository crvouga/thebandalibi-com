import { IPlatformLink } from "@core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { routes } from "../../lib/routes";
import { ButtonLink, CardActionAreaLink } from "../shared/clickable";
import { PlatformCard } from "../shared/platform/platform-card";
import { UniformGrid } from "../shared/uniform-grid";

export const Footer = ({
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
    <>
      <Box marginY={2}>
        <Divider />
      </Box>
      <Container component="footer">
        <Box display="flex" flexDirection="column" alignItems="center">
          <UniformGrid
            ContainerProps={{ justify: "center" }}
            ItemProps={{ xs: 6, sm: 4, md: 2 }}
          >
            {platformLinks.map((platformLink) => (
              <CardActionAreaLink
                key={platformLink.url}
                href={platformLink.url}
              >
                <PlatformCard platform={platformLink.platform} />
              </CardActionAreaLink>
            ))}
          </UniformGrid>

          <Box color="text.secondary">
            <ButtonLink size="small" color="inherit" href={websiteAuthor.url}>
              Built By {websiteAuthor.name}
            </ButtonLink>
          </Box>

          <Box color="text.secondary">
            <ButtonLink
              size="small"
              color="inherit"
              href={routes.contentManagementDashboard()}
            >
              Admin
            </ButtonLink>
          </Box>
        </Box>
      </Container>
    </>
  );
};
