import Typography from "@material-ui/core/Typography";
import { Layout } from "../components/layout/layout";
import { Meta } from "../components/meta";

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  return { props: {} };
}

const Music = () => {
  return (
    <Layout>
      <Meta title="Music | Alibi" />
      <Typography variant="h1" color="initial">
        Music
      </Typography>
    </Layout>
  );
};

export default Music;
