import { Image, ImageSwipeModal } from "@components/generic";
import { PageHeader } from "@components/shared";
import { PageWrapper } from "@components/shared/page-wrapper";
import { LABELS, ROUTES } from "@config";
import { content, ILegalPages, ISettings, legal } from "@data-access";
import Container from "@material-ui/core/Container";
import { GetStaticProps } from "next";
import { useState } from "react";

type IProps = {
  settings: ISettings;
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
    },
  };
};

const ElectronicPressKitPage = ({ settings }: IProps) => {
  const [state, setState] = useState<"opened" | "closed">("closed");

  return (
    <PageWrapper
      settings={settings}
      pageTitle={[LABELS.electronicPressKitLong]}
    >
      <PageHeader
        breadcrumbs={[
          {
            href: ROUTES.home(),
            label: LABELS.home,
          },
          {
            label: LABELS.electronicPressKitLong,
          },
        ]}
        title={LABELS.electronicPressKitLong}
      />

      <ImageSwipeModal
        open={state === "opened"}
        onClose={() => setState("closed")}
        images={[
          {
            src: settings.band.electronicPressKit.url,
            width: settings.band.electronicPressKit.metadata.dimensions.width,
            height: settings.band.electronicPressKit.metadata.dimensions.height,
          },
        ]}
      />

      <Container maxWidth="xs" disableGutters>
        <Image
          onClick={() => setState("opened")}
          src={settings.band.electronicPressKit.url}
          aspectRatio={
            settings.band.electronicPressKit.metadata.dimensions.aspectRatio
          }
          alt="electronic press kit"
        />
      </Container>
    </PageWrapper>
  );
};

export default ElectronicPressKitPage;
