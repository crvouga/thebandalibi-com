import { ISettings } from "@core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { PageLayout } from "./layout";

export type INotFoundPageProps = {
  settings: ISettings;
};

export const NotFoundPage = ({ settings }: INotFoundPageProps) => {
  return (
    <PageLayout
      pageTitle={[settings.band.name, "Not Found"]}
      settings={settings}
    >
      <Box paddingY={18}>
        <Typography align="center" variant="h2">
          Page Not Found
        </Typography>
      </Box>
    </PageLayout>
  );
};
