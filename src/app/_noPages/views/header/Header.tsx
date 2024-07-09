'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleGoToHomeHandler = () => {
    router.push('/');
  };

  const handleGoToLinkedInHandler = () => {
    window.open(
      'https://www.linkedin.com/in/lucia-rossini-uxdesigner/',
      '_blank'
    );
  };

  const downloadCvClickHandler = () => {
    window.open(
      'https://drive.google.com/uc?export=download&id=1Mkhyhu2k3nldxi0AT0u9sl7LHM-L6g3a',
      '_blank'
    );
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'white',
        textAlign: 'center',
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#fffef6 !important',
      }}
      role='presentation'
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          position: 'absolute',
          top: 34, // Bajada de 25px desde el top original de 16px
          right: 16,
          color: 'black',
        }}
      >
        <CloseIcon />
      </IconButton>
      <List
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <ListItem
          button
          onClick={handleGoToHomeHandler}
          sx={{ justifyContent: 'center' }}
        >
          <Typography
            className='spaceGrotesk'
            sx={{
              fontSize: '18px',
              fontWeight: '400',
              color: 'black',
              textAlign: 'center',
            }}
          >
            HOME
          </Typography>
        </ListItem>
        <ListItem
          button
          onClick={downloadCvClickHandler}
          sx={{ justifyContent: 'center' }}
        >
          <Typography
            className='spaceGrotesk'
            sx={{
              fontSize: '18px',
              fontWeight: '400',
              color: 'black',
              textAlign: 'center',
            }}
          >
            RESUME
          </Typography>
        </ListItem>
        <ListItem
          button
          onClick={handleGoToLinkedInHandler}
          sx={{ justifyContent: 'center' }}
        >
          <Typography
            className='spaceGrotesk'
            sx={{
              fontSize: '18px',
              fontWeight: '400',
              color: 'black',
              textAlign: 'center',
            }}
          >
            LINKEDIN
          </Typography>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: isDesktop ? '100px' : '105px',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'white',
        padding: isDesktop ? '0 80px' : '',
        backgroundColor: '#fffef6 !important',
      }}
    >
      <AppBar position='static' sx={{ bgcolor: 'white', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }}>
          {isDesktop ? (
            <>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Typography
                  onClick={handleGoToHomeHandler}
                  className='spaceGrotesk'
                  sx={{
                    color: 'black',
                    textDecoration: 'none',
                    fontSize: 18,
                    fontWeight: 400,
                    cursor: 'pointer',
                  }}
                >
                  HOME
                </Typography>
                <Typography
                  onClick={downloadCvClickHandler}
                  className='spaceGrotesk'
                  sx={{
                    color: 'black',
                    textDecoration: 'none',
                    fontSize: 18,
                    fontWeight: 400,
                    cursor: 'pointer',
                  }}
                >
                  RESUME
                </Typography>
              </Box>
              <Typography
                onClick={handleGoToLinkedInHandler}
                className='spaceGrotesk'
                sx={{
                  color: 'black',
                  textDecoration: 'none',
                  fontSize: 18,
                  fontWeight: 400,
                  cursor: 'pointer',
                }}
              >
                LINKEDIN
              </Typography>
            </>
          ) : (
            <>
              <Typography
                variant='h6'
                sx={{ color: 'black' }}
                onClick={handleGoToHomeHandler}
              >
                Lula Rossini
              </Typography>
              <IconButton
                edge='start'
                color='inherit'
                aria-label='menu'
                onClick={handleDrawerToggle}
              >
                <MenuIcon sx={{ color: 'black' }} />
              </IconButton>
            </>
          )}
        </Toolbar>
        <Drawer
          anchor='left'
          open={drawerOpen}
          onClose={handleDrawerToggle}
          transitionDuration={0}
          PaperProps={{
            sx: { width: '100vw', height: '100vh', bgcolor: 'white' },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </Box>
  );
};

export default Header;
