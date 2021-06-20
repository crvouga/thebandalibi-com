import { IPlatformLink } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import {
  Button,
  CardActionArea,
  PlatformCard,
  UniformGrid,
} from "generic-components";
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
          ContainerProps={{ justify: "center" }}
          ItemProps={{ xs: 6, sm: 4, md: 2 }}
        >
          {platformLinks.map((platformLink) => (
            <CardActionArea
              style={{ borderRadius: "50%" }}
              key={platformLink.url}
              href={platformLink.url}
            >
              <PlatformCard name={platformLink.platform.name} />
            </CardActionArea>
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
