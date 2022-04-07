import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Props {
  title: string;
  href: string;
  type: 'internal' | 'external';
}

const NavLink = ({
  href,
  type,
  children,
}: {
  children: ReactNode;
  href: string;
  type: 'external' | 'internal';
}) => {
  if (type === 'external') {
    return (
      <a
        href={href}
        target={'_blank'}
        rel={'noreferrer'}
        style={{
          textDecoration: 'none',
        }}
      >
        {children}
      </a>
    );
  }

  return <Link href={href}>{children}</Link>;
};

const NavItem = ({ title, href, type }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <NavLink href={href} type={type}>
      <Typography
        sx={{ padding: 2 }}
        align="center"
        fontWeight={600}
        color={'text.primary'}
      >
        {title}
      </Typography>
    </NavLink>
  );
};

export default NavItem;
