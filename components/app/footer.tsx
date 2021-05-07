import { ISettings } from "@core";
import Box, { BoxProps } from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { routes } from "../../lib/routes";
import { ButtonLink, CardActionAreaLink } from "../shared/clickable";
import { PlatformCard } from "../shared/platform/platform-card";
import { UniformGrid } from "../shared/uniform-grid";

const StudioLink = (props: BoxProps) => {
  return (
    <Box color="text.secondary" {...props}>
      <ButtonLink
        size="small"
        color="inherit"
        href={routes.contentManagementDashboard()}
      >
        Admin
      </ButtonLink>
    </Box>
  );
};

const WebsiteAuthorLink = ({ settings }: { settings: ISettings }) => {
  return (
    <Box color="text.secondary">
      <ButtonLink
        size="small"
        color="inherit"
        href={settings.website.authorLink}
      >
        Built By {settings.website.author}
      </ButtonLink>
    </Box>
  );
};

export const Footer = ({ settings }: { settings: ISettings }) => {
  return (
    <Container component="footer">
      <Box display="flex" flexDirection="column" alignItems="center">
        <UniformGrid
          ContainerProps={{ justify: "center" }}
          ItemProps={{ xs: 6, sm: 4, md: 2 }}
        >
          {settings.band.platformLinks.map((platformLink) => (
            <CardActionAreaLink key={platformLink.url} href={platformLink.url}>
              <PlatformCard platform={platformLink.platform} />
            </CardActionAreaLink>
          ))}
        </UniformGrid>

        <WebsiteAuthorLink settings={settings} />

        <StudioLink />
      </Box>
    </Container>
  );
};
