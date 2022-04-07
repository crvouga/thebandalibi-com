import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import NavItem from './components/NavItem';

interface Props {
  logo: { dark: string; light: string };
  links: { title: string; href: string; type: 'internal' | 'external' }[];
}

const SidebarNav = ({ logo, links }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={mode === 'light' ? logo.light : logo.dark}
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        {links.map((link) => (
          <NavItem
            type={link.type}
            key={link.href}
            href={link.href}
            title={link.title}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SidebarNav;
