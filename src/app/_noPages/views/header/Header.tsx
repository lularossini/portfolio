'use client';

import { Box, useMediaQuery } from '@mui/material';
import { use } from 'react';

const Header = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: isDesktop ? '182px' : '105px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      HEADER
    </Box>
  );
};

export default Header;
