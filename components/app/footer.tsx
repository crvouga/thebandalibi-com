import {
  Card,
  Container,
  Grid,
  makeStyles,
  useMediaQuery,
  Theme,
  CardActionArea,
} from "@material-ui/core";
import Box, { BoxProps } from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { routes } from "../../lib/routes";
import { ISettings } from "../../lib/data-access";

import { UniformGrid } from "../shared/uniform-grid";
import { PlatformCard } from "../platform/platform-card";
import { EmailIcon } from "../shared/icons";
import Link from "next/link";

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

const DeveloperLink = (props: BoxProps) => {
  return (
    <Link href={"https://chrisvouga.dev/"}>
      <Box color="text.secondary" {...props}>
        <Button size="small" color="inherit">
          Built By Chris Vouga
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
