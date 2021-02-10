import Typography from "@material-ui/core/Typography";
import { Meta } from "../components/meta";
import { PageLayout } from "../components/layout";

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  return { props: {} };
}

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
