import { Box, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import Main from 'layouts/Main';
import React from 'react';
import { Hero, LatestProducts, Subscribe } from './components';

export interface IProps {
  logo: {
    dark: string;
    light: string;
  };
  heros: {
    title: string;
    subtitle: string;
    primaryTitle: string;
    secondaryTitle: string;
    image: string;
    label: string;
  }[];
  products: {
    id: string;
    title: string;
    price: string;
    image: string;
  }[];
}

const Landing = ({ logo, heros, products }: IProps): JSX.Element => {
  const theme = useTheme();

  const onAddToCart = ({ productId }: { productId: string }) => {
    console.log({ productId });
  };

  return (
    <Main logo={logo}>
      <Divider />

      <Hero hero={heros[0]} />

      <Box sx={{ backgroundColor: theme.palette.alternate.dark }}>
        <Container>
          <LatestProducts onAddToCart={onAddToCart} products={products} />
        </Container>
      </Box>

      <Subscribe />
    </Main>
  );
};

export default Landing;
