import Typography from "@material-ui/core/Typography";
import { Meta } from "../components/meta";
import { PageLayout } from "../components/layout";

const Music = () => {
  return (
    <PageLayout>
      <Meta title="Music | Alibi" />
      <Typography variant="h1" color="initial">
        Music
      </Typography>
    </PageLayout>
  );
};

export default Music;
