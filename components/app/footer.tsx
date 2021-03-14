import {
  Card,
  Container,
  Grid,
  makeStyles,
  useMediaQuery,
  Theme,
} from "@material-ui/core";
import Box, { BoxProps } from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { routes } from "../../lib/routes";
import { ISettings } from "../../lib/data-access";
import { ClickableLink } from "../shared/clickable";
import { UniformGrid } from "../shared/uniform-grid";
import { PlatformCard } from "../platform/platform-card";
import { EmailIcon } from "../shared/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 2),
  },
  gutterBottom: {
    paddingBottom: theme.spacing(2),
  },
}));

const StudioLink = (props: BoxProps) => {
  return (
    <ClickableLink href={routes.contentManagmentDashboard()}>
      <Box color="text.secondary" {...props}>
        <Button size="small" color="inherit">
          Admin
        </Button>
      </Box>
    </ClickableLink>
  );
};

const DeveloperLink = (props: BoxProps) => {
  return (
    <ClickableLink href={"https://chrisvouga.dev/"}>
      <Box color="text.secondary" {...props}>
        <Button size="small" color="inherit">
          Built By Chris Vouga
        </Button>
      </Box>
    </ClickableLink>
  );
};

const EmailLink = ({ emailAddress }: { emailAddress: string }) => {
  return (
    <ClickableLink href={`mailto:${emailAddress}`}>
      <Card>
        <CardHeader
          avatar={<EmailIcon style={{ width: "32px", height: "32px" }} />}
          titleTypographyProps={{ variant: "h6" }}
          title="Send us an email"
        />
      </Card>
    </ClickableLink>
  );
};

export const Footer = ({ settings }: { settings: ISettings }) => {
  const classes = useStyles();

  const isSmallScreen = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("xs")
  );

  return (
    <Container className={classes.root} component="footer" maxWidth="lg">
      <Grid container spacing={4} alignItems="center">
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h3">Follow Us</Typography>
          </Grid>

          <UniformGrid ContainerProps={{ item: true }} ItemProps={{ md: 3 }}>
            {settings.band.platformLinks.map((platformLink) => (
              <ClickableLink key={platformLink.url} href={platformLink.url}>
                <PlatformCard
                  platform={platformLink.platform}
                  CardHeaderProps={{ subheader: "Follow Us" }}
                />
              </ClickableLink>
            ))}
          </UniformGrid>
        </Grid>

        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h3">Get In Touch</Typography>
          </Grid>
          <Grid item xs={isSmallScreen ? 12 : undefined}>
            <EmailLink emailAddress={settings.band.contactEmailAddress} />
          </Grid>
        </Grid>

        <Grid container item alignItems="center" direction="column">
          <Grid item>
            <DeveloperLink />
          </Grid>
          <Grid item>
            <StudioLink />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
