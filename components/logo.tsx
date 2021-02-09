import Typography from "@material-ui/core/Typography";

type ILogoProps = {
  className?: string;
};

export const Logo = (props: ILogoProps) => {
  return (
    <Typography variant="h5" color="initial" {...props}>
      ALIBI
    </Typography>
  );
};
