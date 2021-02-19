import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { IShowcase } from "../../lib/contracts";
import { AspectRatio } from "../aspect-ratio";
import { APP_BAR_HEIGHT } from "../navigation/navigation-bar";
import { ShowcaseBackdrop } from "./showcase-backdrop";

export type IShowcaseProps = {
  showcase: IShowcase;
};

const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: theme.spacing(1),
  },

  root: {
    height: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
    maxHeight: theme.breakpoints.values.md,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2, 0, 4, 0),
    position: "relative",
  },
}));

export const Showcase = (props: IShowcaseProps) => {
  const { showcase } = props;

  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <ShowcaseBackdrop showcase={showcase} />

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            direction="column"
            container
            justify="center"
          >
            <Grid item>
              <Typography variant="h2" gutterBottom>
                <Box fontWeight="bolder">{showcase.title}</Box>
              </Typography>
            </Grid>

            <Grid>
              <Button
                variant="contained"
                size="large"
                href={showcase.action.url}
              >
                {showcase.action.title}
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Container maxWidth="xs" disableGutters>
              <AspectRatio ratio={[1, 1]}>
                <Image
                  className={classes.image}
                  alt={showcase.title}
                  layout="fill"
                  src={showcase.image}
                />
              </AspectRatio>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
