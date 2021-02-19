import { makeStyles } from "@material-ui/core/styles";
import { IShowcase } from "../../lib/contracts";
import { Showcase } from "./showcase";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

type IShowcasesProps = {
  showcases: IShowcase[];
};

export const ShowcaseSection = (props: IShowcasesProps) => {
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
