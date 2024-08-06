'use client';

import React, { useEffect } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Abitab from './_noPages/views/home/Abitab';
import Properati from './_noPages/views/home/Properati';
import TyrCase from './_noPages/views/home/TyrCase';
import Proppit from './_noPages/views/home/proppit';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { hotjar } from 'react-hotjar';
import HomeHeader from './_noPages/views/homeHeader/HomeHeader';

const Home: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    hotjar.initialize({ id: 5059946, sv: 6 });
  }, []);

  return (
    <>
      
      <HomeHeader />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '23px',

          marginTop: isDesktop ? '60px' : '37px',
          marginBottom: '50px',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {[TyrCase, Abitab, Properati, Proppit].map((Component, index) => (
          <Box key={index} data-aos='fade-up' data-aos-delay={index * 100}>
            <Component />
          </Box>
        ))}

        {/* Footer home */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: '50px',
            width: '100%',
          }}
        >
          <Typography
            sx={{
              fontSize: isDesktop ? '25px' : '18px',
              lineHeight: isDesktop ? '36px' : '25px',
              fontWeight: '700',
            }}
          >
            Let&apos;s connect!
          </Typography>
          <Typography
            sx={{
              fontSize: isDesktop ? '18px' : '18px',
              lineHeight: isDesktop ? '26px' : '24px',
              fontWeight: '600',
              userSelect: 'all',
            }}
          >
            rossinilucia@gmail.com
          </Typography>

          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              top: isDesktop ? '2245px' : '2390px',
              left: 0,
              width: '100%',
              border: '1px solid #8B8B8B',
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;

// padding del menu mobile izquierdo aparenta ser mayor por el padding del boton
//footer de cases
