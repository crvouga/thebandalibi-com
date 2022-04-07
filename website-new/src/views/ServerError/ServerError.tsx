import React from 'react';
import Main from 'layouts/Main';
import Container from 'components/Container';

const ServerError = ({
  logo,
  links,
}: {
  logo: { dark: string; light: string };
  links: {
    title: string;
    href: string;
    type: 'internal' | 'external';
  }[];
}): JSX.Element => {
  return (
    <Main links={links} logo={logo}>
      <Container>ServerError</Container>
    </Main>
  );
};

export default ServerError;
