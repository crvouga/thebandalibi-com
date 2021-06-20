import { ISettings } from "@data-access";
import { NextSeoProps } from "next-seo";
import { NextSeo } from "next-seo";

export const formatTitle = (...words: string[]) => {
  return words.map((word) => word.trim()).join(" — ");
};

type ISEOProps = {
  pageTitle: string[];
  settings: ISettings;
};

const toNextSEOProps = ({ pageTitle, settings }: ISEOProps): NextSeoProps => {
  const title = formatTitle(settings.band.name, ...pageTitle);

  const description = settings.band.description;

  return {
    title: title,
    defaultTitle: settings.band.name,
    description: description,
    additionalLinkTags: [
      {
        rel: "icon",
        href: settings.band.logo.url,
      },
    ],
    additionalMetaTags: [
      {
        property: "dc:creator",
        content: settings.website.author,
      },
      {
        property: "image",
        content: settings.band.logo.url,
      },
    ],
    twitter: {
      cardType: "summary_large_image",
      site: settings.band.name,
    },
    openGraph: {
      url: settings.website.url,
      type: "website",
      title: title,
      description: description,
      images: [
        {
          url: settings.band.logo.url,
          width: settings.band.logo.metadata.dimensions.width,
          height: settings.band.logo.metadata.dimensions.height,
          alt: settings.band.name,
        },
      ],
      site_name: formatTitle(settings.band.name, "Official Site"),
    },
  };
};

export const PageSeo = (props: ISEOProps) => {
  return <NextSeo {...toNextSEOProps(props)} />;
};
