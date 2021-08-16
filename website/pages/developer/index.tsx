import { NavLinks, PageHeader, PageWrapper } from "@components/shared";
import { LABELS, ROUTES } from "@config";
import { content, ISettings } from "@data-access";
import { GetStaticProps } from "next";
import Container from "@material-ui/core/Container";
import { PageSeo } from "@components/shared/page-wrapper/page-seo";

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

const toDeveloperLinks = (settings: ISettings) => [
  {
    href: settings.contentManagementDashboardUrl,
    label: LABELS.contentDashboard,
  },
  {
    href: settings.commerceManagementDashboardUrl,
    label: LABELS.commerceDashboard,
  },
  {
    href: settings.website.authorUrl,
    label: LABELS.websiteAuthor,
  },
];

const DeveloperPage = ({ settings }: Props) => {
  return (
    <PageWrapper pageTitle={[LABELS.developer]} settings={settings}>
      <PageHeader
        breadcrumbs={[
          {
            href: ROUTES.home(),
            label: LABELS.home,
          },
          {
            label: LABELS.developer,
          },
        ]}
        title={LABELS.developer}
      />

      <Container maxWidth="xs">
        <NavLinks
          links={toDeveloperLinks(settings).map((link) => ({
            ...link,
            doesOpenNewTab: true,
          }))}
        />
      </Container>
    </PageWrapper>
  );
};

export default DeveloperPage;
