import Box, { BoxProps } from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ISettings } from "../../lib/data-access";
import { routes } from "../../lib/routes";
import { ButtonLink, CardActionAreaLink } from "../shared/clickable";
import { EmailIcon } from "../shared/icons";
import { PlatformCard } from "../shared/platform/platform-card";
import { UniformGrid } from "../shared/uniform-grid";
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
    <Box color="text.secondary" {...props}>
      <ButtonLink
        size="small"
        color="inherit"
        href={routes.contentManagmentDashboard()}
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

const EmailLink = ({ emailAddress }: { emailAddress: string }) => {
  return (
    <CardActionAreaLink href={`mailto:${emailAddress}`}>
      <Card>
        <CardHeader
          avatar={<EmailIcon style={{ width: "32px", height: "32px" }} />}
          titleTypographyProps={{ variant: "h6" }}
          title="Send Us an Email"
        />
      </Card>
    </CardActionAreaLink>
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
            <Typography variant="h2">Follow Us</Typography>
          </Grid>

          <UniformGrid
            ContainerProps={{ item: true }}
            ItemProps={{ xs: 6, sm: 4, md: 2 }}
          >
            {settings.band.platformLinks.map((platformLink) => (
              <CardActionAreaLink
                key={platformLink.url}
                href={platformLink.url}
              >
                <PlatformCard platform={platformLink.platform} />
              </CardActionAreaLink>
            ))}
          </UniformGrid>
        </Grid>

        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h2">Get In Touch</Typography>
          </Grid>
          <Grid item xs={isSmallScreen ? 12 : undefined}>
            <EmailLink emailAddress={settings.band.contactEmailAddress} />
          </Grid>
        </Grid>

        <Grid container item alignItems="center" direction="column">
          <Grid item>
            <WebsiteAuthorLink settings={settings} />
          </Grid>
          <Grid item>
            <StudioLink />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
