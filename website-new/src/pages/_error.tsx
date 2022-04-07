import { Content } from 'content/content';
import { GetStaticProps } from 'next';
import React from 'react';
import ServerError from 'views/ServerError';

type IProps = React.ComponentProps<typeof ServerError>;

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const settings = await Content.Settings.get();

  return {
    props: {
      logoSrc: settings.logoSrc,
    },
  };
};

const ErrorPage = (props: IProps): JSX.Element => {
  return <ServerError {...props} />;
};

export default ErrorPage;
