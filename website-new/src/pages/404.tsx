import { Content } from 'content/content';
import { GetStaticProps } from 'next';
import React from 'react';
import NotFoundCover from 'views/NotFoundCover';

type IProps = React.ComponentProps<typeof NotFoundCover>;

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const settings = await Content.Settings.get();

  return {
    props: {
      logoSrc: settings.logoSrc,
    },
  };
};

const FourOFourPage = (props: IProps): JSX.Element => {
  return <NotFoundCover {...props} />;
};

export default FourOFourPage;
