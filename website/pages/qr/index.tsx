import { PageWrapper } from "@components/shared";
import { ROUTES } from "@config";
import { content, ISettings } from "@data-access";
import { GetStaticProps } from "next";

type IProps = {
  settings: ISettings;
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  return {
    redirect: {
      destination: ROUTES.landing(),
    },
    props: {
      settings: await content.settings.get(),
    },
  };
};

const QRPage = ({ settings }: IProps) => {
  return <PageWrapper pageTitle={["Redirecting"]} settings={settings} />;
};

export default QRPage;
