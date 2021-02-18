import { makeStyles } from "@material-ui/core/styles";
import { IShowcase } from "../../lib/contracts";
import { Showcase } from "./showcase";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
  },
}));

type IShowcasesProps = {
  showcases: IShowcase[];
};

export const Showcases = (props: IShowcasesProps) => {
  const { showcases } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {showcases.map((showcase) => (
        <Showcase key={showcase.title} showcase={showcase} />
      ))}
    </div>
  );
};
