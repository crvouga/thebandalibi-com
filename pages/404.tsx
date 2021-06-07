import { dataStore, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { GetStaticProps } from "next";
import { PageLayout } from "../components/app/layout";

type INotFoundPageProps = {
  settings: ISettings;
};

export const getStaticProps: GetStaticProps<INotFoundPageProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
    },
  };
};

const NotFoundPage = ({ settings }: INotFoundPageProps) => {
  return (
    <PageLayout pageTitle={["Not Found"]} settings={settings}>
      <Box paddingY={18}>
        <Typography align="center" variant="h2">
          Page Not Found
        </Typography>
      </Box>
    </PageLayout>
  );
};

export default NotFoundPage;
