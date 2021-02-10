import Typography from "@material-ui/core/Typography";
import { PageLayout } from "../components/layout";
import { Meta } from "../components/meta";

const Photos = () => {
  return (
    <PageLayout>
      <Meta title="Photos | Alibi" />
      <Typography variant="h1" color="initial">
        Photos
      </Typography>
    </PageLayout>
  );
};

export default Photos;
