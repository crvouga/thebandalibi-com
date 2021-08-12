import { PageWrapper } from "@components/shared";
import { content, ISettings } from "@data-access";
import Typography from "@material-ui/core/Typography";
import { GetStaticProps } from "next";

type Props = {
  settings: ISettings;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
    },
  };
};

const NotFoundPage = ({ settings }: Props) => {
  return (
    <PageWrapper pageTitle={["Not Found"]} settings={settings}>
      <Typography align="center" variant="h2" sx={{ margin: 2 }}>
        Page Not Found
      </Typography>
    </PageWrapper>
  );
};

export default NotFoundPage;
