import Box, { BoxProps } from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Link from "next/link";
import { ISettings } from "../../lib/data-access";
import { routes } from "../../lib/routes";
import { PlatformCard } from "../shared/platform/platform-card";
import { EmailIcon } from "../shared/icons";
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
    <Link href={routes.contentManagmentDashboard()}>
      <Box color="text.secondary" {...props}>
        <Button size="small" color="inherit">
          Admin
        </Button>
      </Box>
    </Link>
  );
};

const WebsiteAuthorLink = ({ settings }: { settings: ISettings }) => {
  return (
    <Link href={settings.website.authorLink}>
      <Box color="text.secondary">
        <Button size="small" color="inherit">
          Built By {settings.website.author}
        </Button>
      </Box>
    </Link>
  );
};

const EmailLink = ({ emailAddress }: { emailAddress: string }) => {
  return (
    <Link href={`mailto:${emailAddress}`}>
      <CardActionArea>
        <Card>
          <CardHeader
            avatar={<EmailIcon style={{ width: "32px", height: "32px" }} />}
            titleTypographyProps={{ variant: "h6" }}
            title="Send Us an Email"
          />
        </Card>
      </CardActionArea>
    </Link>
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

          <UniformGrid ContainerProps={{ item: true }} ItemProps={{ md: 3 }}>
            {settings.band.platformLinks.map((platformLink) => (
              <Link key={platformLink.url} href={platformLink.url}>
                <CardActionArea>
                  <PlatformCard platform={platformLink.platform} />
                </CardActionArea>
              </Link>
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
