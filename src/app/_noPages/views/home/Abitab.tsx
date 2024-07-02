'use client';

import { Box, Typography, useMediaQuery } from '@mui/material';

const TyrCase: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');

  return (
    <>
      {isDesktop && (
        <Box
          sx={{
            display: 'flex',
            width: '1107px',
            height: '452px',
            borderRadius: '10px',
            backgroundColor: '#EDE9EF',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src='/home/TYRHomeDesktop.png'
            alt=''
            style={{ width: '527px', height: '325px' }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '350px',
              marginLeft: '5px',
            }}
          >
            <Typography
              sx={{
                fontSize: '23px',
                fontWeight: '700',
                lineHeight: '25px',
                letterSpacing: '2px',
                fontFamily:
                  'var(--font-darkerGrotesque), sans-serif !important',
              }}
            >
              GIVING URUGUAYANS A DIGITAL IDENTITY{' '}
            </Typography>
            <Typography
              sx={{
                fontSize: '15px',
                fontWeight: '500',
                lineHeight: '23px',
                fontFamily: 'var(--font-spaceGrotesque), sans-serif !important',
                marginTop: '15px',
              }}
            >
              <span
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  lineHeight: '23px',
                  fontFamily:
                    'var(--font-spaceGrotesque), sans-serif !important',
                  marginTop: '15px',
                }}
              >
                UX Design •  UX Research •
              </span>{' '}
              Redesign of an application that Uruguayans use to access public
              sites and perform processes such as paying taxes
            </Typography>

            <Box sx={{ display: 'flex', marginTop: '12px' }}>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: '500',
                  lineHeight: '25px',
                  fontFamily:
                    'var(--font-spaceGrotesque), sans-serif !important',
                  marginRight: '18px',
                }}
              >
                Learn more
              </Typography>
              <img src='/learnMoreIcon.svg' alt='' />
            </Box>
          </Box>
        </Box>
      )}

      {!isDesktop && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '329px',
            height: '557px',
            padding: '33px 0',
            borderRadius: '10px',
            backgroundColor: '#F1E5F8',
            alignItems: 'center',
            justifyContent: 'first',
          }}
        >
          <img
            src='/home/ABITABHomeMobile.png'
            alt=''
            style={{ width: '241px', height: '266px' }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginTop: '33px',
              padding: '0 18.5px',
            }}
          >
            <Typography
              sx={{
                width: '100%',
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '24px',
                letterSpacing: '2px',
                fontFamily:
                  'var(--font-darkerGrotesque), sans-serif !important',
              }}
            >
              GIVING URUGUAYANS A DIGITAL IDENTITY
            </Typography>
            <Typography
              sx={{
                width: '292px',
                height: '92px',
                fontSize: '13px',
                fontWeight: '500',
                lineHeight: '23px',
                letterSpacing: '0.12px',

                fontFamily: 'var(--font-spaceGrotesque), sans-serif !important',
                marginTop: '14px',
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  lineHeight: '23px',
                  letterSpacing: '0px',
                  fontFamily:
                    'var(--font-spaceGrotesque), sans-serif !important',
                  marginTop: '13px',
                }}
              >
                UX Design •  UX Research •&nbsp;
              </span>
              Redesign of an application that Uruguayans use to access public
              sites and perform processes such as paying taxes
            </Typography>

            <Box sx={{ display: 'flex', marginTop: '13px' }}>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '700',
                  lineHeight: '25px',
                  fontFamily:
                    'var(--font-spaceGrotesque), sans-serif !important',
                  marginRight: '14px',
                }}
              >
                Learn more
              </Typography>
              <img src='/learnMoreIcon.svg' alt='' style={{ width: '11px' }} />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default TyrCase;
