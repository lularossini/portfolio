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

const Home: React.FC = () => {
  const greaterThan1280 = useMediaQuery('(min-width:1280px)');
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const isLittleMobile = useMediaQuery('(max-width:380px)');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    hotjar.initialize({ id: 5059946, sv: 6 });
  }, []);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          width: isDesktop ? '100vw' : isLittleMobile ? '100%' : '349px',
          height: isDesktop ? '38px' : '124px',
          marginLeft: isDesktop ? '' : '0px',
          marginTop: isDesktop ? '20px' : '',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isDesktop ? '12px' : '5px',
        }}
      >
        {isDesktop && (
          <Box
            sx={{
              display: 'flex',
              width: isDesktop ? 'fit-content' : '100%',
              flexDirection: 'row',
              gap: '12px',
              alignItems: 'center',
              justifyContent: 'left',
            }}
          >
            <Typography
              className='spaceGrotesk'
              sx={{
                fontSize: greaterThan1280
                  ? '37px'
                  : isDesktop
                  ? '32px'
                  : isLittleMobile
                  ? '24px'
                  : '26px',
                lineHeight: '38px',
                fontWeight: '400',
              }}
            >
              Lula Rossini
            </Typography>
            <img
              src='/icons/circleIconHome.svg'
              alt=''
              style={{ width: '35px', height: '35px' }}
            />
          </Box>
        )}

        <Box
          sx={{
            display: 'flex',
            width: isDesktop ? 'fit-content' : '100%',
            flexDirection: 'row',
            gap: '12px',
            alignItems: 'center',
            justifyContent: 'left',
          }}
        >
          <Typography
            className='spaceGrotesk'
            sx={{
              fontSize: greaterThan1280
                ? '37px'
                : isDesktop
                ? '32px'
                : isLittleMobile
                ? '24px'
                : '26px',
              lineHeight: '38px',
              fontWeight: '400',
            }}
          >
            UX Design
          </Typography>
          <img
            src='/icons/circleIconHome.svg'
            alt=''
            style={{ width: '37px', height: '35px' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            width: isDesktop ? 'fit-content' : '100%',

            flexDirection: 'row',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <Typography
            className='spaceGrotesk'
            sx={{
              fontSize: greaterThan1280
                ? '37px'
                : isDesktop
                ? '32px'
                : isLittleMobile
                ? '24px'
                : '26px',
              lineHeight: '38px',
              fontWeight: '400',
            }}
          >
            UX Research
          </Typography>
          <img
            src='/icons/circleIconHome.svg'
            alt=''
            style={{ width: '35px', height: '35px' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            width: isDesktop ? 'fit-content' : '100%',

            flexDirection: 'row',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <Typography
            className='spaceGrotesk'
            sx={{
              fontSize: greaterThan1280
                ? '37px'
                : isDesktop
                ? '32px'
                : isLittleMobile
                ? '24px'
                : '26px',
              lineHeight: '38px',
              fontWeight: '400',
            }}
          >
Product Design          </Typography>
         
        </Box>
      </Box>

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
              width: '100vw',
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
