import Typography from "@material-ui/core/Typography";
import { Layout } from "../components/layout";
import { Meta } from "../components/meta";

const Photos = () => {
  return (
    <Layout>
      <Meta title="Photos | Alibi" />
      <Typography variant="h1" color="initial">
        Photos
      </Typography>
    </Layout>
  );
};

export default Photos;
