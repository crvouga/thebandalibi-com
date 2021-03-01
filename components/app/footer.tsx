import { makeStyles, Container, Typography } from "@material-ui/core";
import Box, { BoxProps } from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { routes } from "../../constants/routes";
import { IPlatformLink } from "../../lib/domain";
import { Clickable, ClickableLink } from "../@shared/clickable";
import { PlatformLinkActionBar } from "../platform/platform-action-bar";
import { UniformGrid } from "../@shared/uniform-grid";
import { PlatformLinkCard } from "../platform/platform-link-card";
import { PlatformCard } from "../platform/platform-card";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(4, 0),
  },
  platformLinks: {
    paddingBottom: theme.spacing(2),
  },
}));

const StudioLink = (props: BoxProps) => {
  return (
    <Box color="text.secondary" {...props}>
      <Button
        href={routes.contentManagmentDashboard()}
        size="small"
        color="inherit"
      >
        Admin
      </Button>
    </Box>
  );
};

const DeveloperLink = (props: BoxProps) => {
  return (
    <Box color="text.secondary" {...props}>
      <Button href={"https://chrisvouga.dev/"} size="small" color="inherit">
        Built By Chris Vouga
      </Button>
    </Box>
  );
};

export const Footer = ({
  platformsLinks,
}: {
  platformsLinks: IPlatformLink[];
}) => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container className={classes.platformLinks}>
        <Box paddingBottom={2}>
          <Typography variant="h3">Follow Us</Typography>
        </Box>
        <UniformGrid ItemProps={{ md: 3 }}>
          {platformsLinks.map((platformLink) => (
            <ClickableLink key={platformLink.url} href={platformLink.url}>
              <PlatformCard platform={platformLink.platform} />
            </ClickableLink>
          ))}
        </UniformGrid>
      </Container>

      <Clickable>
        <DeveloperLink />
      </Clickable>

      <Clickable>
        <StudioLink />
      </Clickable>
    </footer>
  );
};
