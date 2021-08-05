import { ISettings } from "@data-access";
import { capitalize } from "@utility";
import { NextSeoProps } from "next-seo";
import { NextSeo } from "next-seo";

const formatTitle = ({ words }: { words: string[] }) => {
  return words.map((word) => word.trim()).join(" • ");
};

type ISEOProps = {
  pageTitle: string[];
  settings: ISettings;
};

const toNextSEOProps = ({ pageTitle, settings }: ISEOProps): NextSeoProps => {
  const titlePrefix = `${capitalize({ word: settings.band.name })}`;

  const title = formatTitle({ words: [titlePrefix, ...pageTitle] });

  const description = settings.band.description;

  return {
    title: title,
    defaultTitle: titlePrefix,
    description: description,
    additionalLinkTags: [
      {
        rel: "icon",
        href: settings.band.icon.url,
      },
    ],
    additionalMetaTags: [
      {
        property: "dc:creator",
        content: settings.website.author,
      },
      {
        property: "image",
        content: settings.band.icon.url,
      },
    ],
    twitter: {
      cardType: "summary_large_image",
      site: titlePrefix,
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
          alt: titlePrefix,
        },
      ],
      site_name: title,
    },
  };
};

export const PageSeo = (props: ISEOProps) => {
  return <NextSeo {...toNextSEOProps(props)} />;
};
