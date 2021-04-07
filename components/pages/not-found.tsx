import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { ISettings } from "../../lib/data-access";
import { PageLayout } from "../app/layout";
import { DocumentTitle } from "../app/meta";

export type INotFoundPageProps = {
  settings: ISettings;
};

export const NotFoundPage = ({ settings }: INotFoundPageProps) => {
  return (
    <PageLayout
      title={DocumentTitle(settings.band.name, "Not Found")}
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
