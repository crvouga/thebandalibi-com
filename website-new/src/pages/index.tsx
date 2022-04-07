import { Content } from 'content/content';
import { GetStaticProps } from 'next';
import React, { ComponentProps } from 'react';
import Landing from 'views/Landing';

type IProps = ComponentProps<typeof Landing>;

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const settings = await Content.Settings.get();

  return {
    props: {
      ...settings
    },
  };
};

const LandingPage = (props: IProps): JSX.Element => {
  return <Landing {...props} />;
};

export default LandingPage;
