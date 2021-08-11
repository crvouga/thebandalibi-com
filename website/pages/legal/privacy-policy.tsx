import { Markup } from "@components/generic";
import { PageWrapper } from "@components/shared/page-wrapper";
import { LABELS } from "@config";
import { content, ILegalPages, ISettings, legal } from "@data-access";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { GetStaticProps } from "next";

type IProps = {
  settings: ISettings;
  legalPages: ILegalPages;
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
      legalPages: await legal.getPages(),
    },
  };
};

const PrivacyPolicyPage = ({ settings, legalPages }: IProps) => {
  return (
    <PageWrapper settings={settings} pageTitle={[LABELS.privacyPolicy]}>
      <Typography variant="h1" align="center" sx={{ m: 2 }}>
        {LABELS.privacyPolicy}
      </Typography>
      <Container maxWidth="sm">
        <Markup markup={legalPages.privacyPolicyHTML} />
      </Container>
    </PageWrapper>
  );
};

export default PrivacyPolicyPage;
