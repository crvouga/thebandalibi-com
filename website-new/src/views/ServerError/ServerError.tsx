import React from 'react';
import Main from 'layouts/Main';
import Container from 'components/Container';

const ServerError = ({
  logo,
}: {
  logo: { dark: string; light: string };
}): JSX.Element => {
  return (
    <Main logo={logo}>
      <Container>ServerError</Container>
    </Main>
  );
};

export default ServerError;
