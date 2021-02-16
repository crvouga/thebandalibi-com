import Typography from "@material-ui/core/Typography";
import { GetStaticProps } from "next";
import { PageLayout } from "../components/layout";
import { Meta } from "../components/meta";
import { Showcase } from "../components/showcase";
import { IShowcase } from "../lib/contracts";
import { datastore } from "../lib/datastore";

type IIndexProps = {
  showcase: IShowcase;
};

export const getStaticProps: GetStaticProps<IIndexProps> = async () => {
  return {
    props: {
      showcase: await datastore.getShowcase(),
    },
  };
};

const Index = (props: IIndexProps) => {
  const { showcase } = props;
  return (
    <PageLayout>
      <Typography variant="h1" color="initial">
        Alibi
      </Typography>
      <Meta />

      <Showcase showcase={showcase} />
    </PageLayout>
  );
};

export default Index;
