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

const ErrorPage = ({ settings }: Props) => {
  return (
    <PageWrapper pageTitle={["Error"]} settings={settings}>
      <Typography align="center" variant="h2" sx={{ margin: 2 }}>
        Something Went Wrong
      </Typography>
    </PageWrapper>
  );
};

export default ErrorPage;
