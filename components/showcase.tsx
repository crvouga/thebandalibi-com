import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { IShowcase } from "../lib/contracts";

export type IShowcaseProps = {
  showcase: IShowcase;
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
    display: "flex",
    flexWrap: "wrap",
  },
  imageWrapper: {
    position: "relative",
  },
  mainWrapper: {
    flex: 1,
  },
}));

export const Showcase = (props: IShowcaseProps) => {
  const { showcase } = props;
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          {showcase.title}
        </Typography>
        <Button
          color="primary"
          variant="contained"
          size="large"
          href={showcase.action.url}
        >
          {showcase.action.title}
        </Button>
      </Grid>
      <Grid item className={classes.imageWrapper} xs={12}>
        <Image layout="fill" src={showcase.image} />
      </Grid>
    </Grid>
  );
};
