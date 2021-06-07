import { dataStore, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { GetStaticProps } from "next";
import { PageLayout } from "../components/top-level/layout";

type IErrorPageProps = {
  settings: ISettings;
};

export const getStaticProps: GetStaticProps<IErrorPageProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
    },
  };
};

const ErrorPage = ({ settings }: IErrorPageProps) => {
  return (
    <PageLayout pageTitle={["Error"]} settings={settings}>
      <Box paddingY={18}>
        <Typography align="center" variant="h2">
          Something went wrong
        </Typography>
      </Box>
    </PageLayout>
  );
};

export default ErrorPage;
