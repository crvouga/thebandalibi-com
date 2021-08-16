import { Markup } from "@components/generic";
import { PageHeader } from "@components/shared";
import { PageWrapper } from "@components/shared/page-wrapper";
import { LABELS, ROUTES } from "@config";
import { content, ILegalPages, ISettings, legal } from "@data-access";
import Container from "@material-ui/core/Container";
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

const RefundPolicyPage = ({ settings, legalPages }: IProps) => {
  return (
    <PageWrapper settings={settings} pageTitle={[LABELS.refundPolicy]}>
      <PageHeader
        breadcrumbs={[
          {
            href: ROUTES.home(),
            label: LABELS.home,
          },
          {
            label: LABELS.refundPolicy,
          },
        ]}
        title={LABELS.refundPolicy}
      />

      <Container maxWidth="sm">
        <Markup markup={legalPages.refundPolicyHTML} />
      </Container>
    </PageWrapper>
  );
};

export default RefundPolicyPage;
