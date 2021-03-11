import Head from "next/head";
import { ISettings } from "../../lib/domain";

export const DocumentTitle = (...words: string[]) => {
  return words.map((word) => word.trim()).join(" — ");
};

export const Meta = ({
  title,
  settings,
}: {
  title: string;
  settings: ISettings;
}) => {
  const {
    website: {
      keywords,
      author,
      url,
      icon,
      image,
      //
    },
    band: {
      description,
      //
    },
  } = settings;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={icon} />
      <meta name="image" content={image} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />

      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
