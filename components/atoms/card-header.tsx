import MuiCardHeader, {
  CardHeaderProps as MuiCardHeaderProps,
} from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";

const useStylesCardHeader = makeStyles(() => ({
  root: {
    overflow: "hidden",
  },
  content: {
    overflow: "hidden",
  },
}));

export type CardHeaderProps = MuiCardHeaderProps;

export const CardHeader = (props: CardHeaderProps) => {
  const classesCardHeader = useStylesCardHeader();
  return <MuiCardHeader classes={classesCardHeader} {...props} />;
};
