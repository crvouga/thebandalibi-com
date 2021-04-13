import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { ISettings } from "../../lib/data-access";
import { PageLayout } from "./layout";
import { formatTitle } from "./meta";

export type IErrorPageProps = {
  settings: ISettings;
};

export const ErrorPage = ({ settings }: IErrorPageProps) => {
  return (
    <PageLayout
      title={formatTitle(settings.band.name, "Error")}
      settings={settings}
    >
      <Box paddingY={18}>
        <Typography align="center" variant="h2">
          Something went wrong
        </Typography>
      </Box>
    </PageLayout>
  );
};
