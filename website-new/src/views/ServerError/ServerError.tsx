import React from 'react';
import Main from 'layouts/Main';
import Container from 'components/Container';

const ServerError = ({ logoSrc }: { logoSrc: string }): JSX.Element => {
  return (
    <Main logoSrc={logoSrc}>
      <Container>ServerError</Container>
    </Main>
  );
};

export default ServerError;
