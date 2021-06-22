import { contentDataStore, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { GetStaticProps } from "next";
import { PageWrapper } from "../components/top-level";

type IErrorPageProps = {
  settings: ISettings;
};

export const getStaticProps: GetStaticProps<IErrorPageProps> = async () => {
  return {
    props: {
      settings: await contentDataStore.settings.get(),
    },
  };
};

const ErrorPage = ({ settings }: IErrorPageProps) => {
  return (
    <PageWrapper pageTitle={["Error"]} settings={settings}>
      <Box paddingY={18}>
        <Typography align="center" variant="h2">
          Something went wrong
        </Typography>
      </Box>
    </PageWrapper>
  );
};

export default ErrorPage;
