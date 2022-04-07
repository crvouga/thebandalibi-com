import { Box, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import Main from 'layouts/Main';
import React, { useState } from 'react';
import { Hero, LatestProducts } from './components';

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
  }[];
  products: {
    title: string;
    price: string;
    image: string;
  }[];
}

const Landing = ({ logo, heros, products }: IProps): JSX.Element => {
  const theme = useTheme();
  const [openBottombar, setOpenBottombar] = useState(false);

  const handleBottombarOpen = (): void => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = (): void => {
    setOpenBottombar(false);
  };

  return (
    <Main logo={logo}>
      <Divider />

      <Hero hero={heros[0]} />

      <Box sx={{ backgroundColor: theme.palette.alternate.dark }}>
        <Container>
          <LatestProducts products={products} />
        </Container>
      </Box>
    </Main>
  );
};

export default Landing;
