import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import React from 'react';
import { SidebarNav } from './components';

interface Props {
  onClose: () => void;
  open: boolean;
  variant: 'permanent' | 'persistent' | 'temporary' | undefined;
}

const Sidebar = ({ open, variant, onClose }: Props): JSX.Element => {
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
        <SidebarNav />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
