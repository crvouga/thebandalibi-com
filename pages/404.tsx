import { dataStore, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { GetStaticProps } from "next";
import { PageWrapper } from "../components/top-level";

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
    <PageWrapper pageTitle={["Not Found"]} settings={settings}>
      <Box paddingY={18}>
        <Typography align="center" variant="h2">
          Page Not Found
        </Typography>
      </Box>
    </PageWrapper>
  );
};

export default NotFoundPage;
