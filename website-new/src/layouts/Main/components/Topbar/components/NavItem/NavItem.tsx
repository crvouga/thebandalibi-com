import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  title: string;
  id: string;
  href: string;
  type: 'internal' | 'external';
  colorInvert?: boolean;
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

const NavItem = ({
  title,
  id,
  href,
  type,
  colorInvert = false,
}: Props): JSX.Element => {
  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box sx={{ padding: 2 }}>
      <NavLink href={href} type={type}>
        <Box
          display={'flex'}
          alignItems={'center'}
          aria-describedby={id}
          sx={{ cursor: 'pointer' }}
        >
          <Typography fontWeight={600} color={linkColor}>
            {title}
          </Typography>
        </Box>
      </NavLink>
    </Box>
  );
};

export default NavItem;
