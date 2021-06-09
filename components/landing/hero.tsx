import { IHero } from "@data-access";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button, Image } from "@ui";
// import { createLinearGradient } from "@utility";

const useStyles = makeStyles(() => ({
  root: {
    // background: createLinearGradient({
    //   start: theme.palette.primary.main,
    //   end: theme.palette.primary.dark,
    // }),
  },
}));

export const Hero = ({ hero }: { hero: IHero }) => {
  const classes = useStyles();

  return (
    <Box width="100vw" paddingY={6} className={classes.root}>
      <Container>
        <Grid container spacing={2} alignItems="center" justify="space-between">
          <Grid item xs={12} md={6}>
            <Typography align="left" variant="h1">
              {hero.title}
            </Typography>

            <Button
              href={hero.callToAction.url}
              variant="contained"
              size="large"
            >
              {hero.callToAction.title}
            </Button>
          </Grid>

          <Grid item xs={12} md={5}>
            <Image
              priority
              aspectRatio={hero.mainImage.metadata.dimensions.aspectRatio}
              src={hero.mainImage.url}
              alt={hero.title}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
