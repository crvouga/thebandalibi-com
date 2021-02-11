import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Link from "next/link";

const StudioLink = () => {
  return (
    <Link href="/studio">
      <Box color="text.secondary">
        <Button
          size="small"
          fullWidth
          startIcon={<DashboardIcon />}
          color="inherit"
        >
          Studio
        </Button>
      </Box>
    </Link>
  );
};

export const Footer = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <StudioLink />
      </Grid>
    </Grid>
  );
};
