import Head from "next/head";

type ISeoProps = {
  title?: string;
  description?: string;
};

export const Meta = (props: ISeoProps) => {
  const {
    title = "Alibi",
    description = "The official website for the band Alibi.",
  } = props;

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
    </Head>
  );
};
