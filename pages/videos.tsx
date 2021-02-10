import Typography from "@material-ui/core/Typography";
import { PageLayout } from "../components/layout";
import { Meta } from "../components/meta";

const Videos = () => {
  return (
    <PageLayout>
      <Meta title="Videos | Alibi" />
      <Typography variant="h1" color="initial">
        Videos
      </Typography>
    </PageLayout>
  );
};

export default Videos;
