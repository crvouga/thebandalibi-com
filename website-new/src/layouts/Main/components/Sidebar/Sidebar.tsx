import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import React from 'react';
import { SidebarNav } from './components';

interface Props {
  onClose: () => void;
  open: boolean;
  variant: 'permanent' | 'persistent' | 'temporary' | undefined;
  logo: { dark: string; light: string };
  links: { title: string; href: string; type: 'internal' | 'external' }[];
}

const Sidebar = ({
  links,
  logo,
  open,
  variant,
  onClose,
}: Props): JSX.Element => {
  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: 280,
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          padding: 1,
        }}
      >
        <SidebarNav logo={logo} links={links} />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
