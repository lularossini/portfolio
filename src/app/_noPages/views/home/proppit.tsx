'use client';

import { Box, Typography, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';

const ProppitCase: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const router = useRouter();

  const goToTheCaseStudyPage: () => void = () => {
    router.push('/project-detail/proppit-case');
  };

  return (
    <>
      {isDesktop && (
        <Box
          onClick={goToTheCaseStudyPage}
          sx={{
            display: 'flex',
            width: '1107px',
            height: '452px',
            borderRadius: '10px',
            backgroundColor: '#EDE9EF',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '350px',
              marginLeft: '5px',
            }}
          >
            <Typography
              className='darkerGrotesk'
              sx={{
                fontSize: '27px',
                fontWeight: '700',
                lineHeight: '30px',
                letterSpacing: '2px',
              }}
            >
              REDUCING CHURN BY UNDERSTANDING USERS
            </Typography>
            <Typography
              className='spaceGrotesk'
              sx={{
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '25px',
                marginTop: '20px',
              }}
            >
              <span
                className='spaceGrotesk'
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  lineHeight: '25px',
                  marginTop: '15px',
                }}
              >
                UX Research •
              </span>{' '}
              Website analysis, customer feedback, and user interviews to
              understand the reasons for the massive unsubscribes
            </Typography>
            <Box
              sx={{
                display: 'flex',
                marginTop: '15px',
                position: 'relative',
                alignItems: 'center',
                '&:hover img': {
                  animation: 'moveSide 0.5s ease-in-out infinite alternate',
                },
                '@keyframes moveSide': {
                  '0%': {
                    transform: 'translateX(0)',
                  },
                  '100%': {
                    transform: 'translateX(5px)', // Ajusta este valor según la distancia que deseas que se mueva
                  },
                },
              }}
            >
              <Typography
                className='spaceGrotesk'
                sx={{
                  fontSize: '17px',
                  fontWeight: '500',
                  lineHeight: '24px',
                  marginRight: '18px',
                }}
              >
                Learn more
              </Typography>
              <img
                src='/icons/learnMoreIcon.svg'
                alt='Learn more icon'
                style={{
                  position: 'absolute',
                  top: '8px',
                  left: '100px',
                  width: '11px',
                }}
              />
            </Box>
          </Box>
          <img
            src='/home/PROPPITHomeDesktop.png'
            alt=''
            style={{ width: '527px', height: '325px' }}
          />
        </Box>
      )}

      {!isDesktop && (
        <Box
          onClick={goToTheCaseStudyPage}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '349px',
            height: '455px',
            padding: '33px 0 25px 0',
            borderRadius: '10px',
            backgroundColor: '#EDE9EF',
            alignItems: 'center',
            justifyContent: 'first',
          }}
        >
          <img
            src='/home/PROPPITHomeMobile.png'
            alt=''
            style={{ width: '295px', height: '171px' }}
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
              className='darkerGrotesk'
              sx={{
                width: '100%',
                fontSize: '20px',
                fontWeight: '700',
                lineHeight: '24px',
                letterSpacing: '2px',
              }}
            >
              REDUCING CHURN BY UNDERSTANDING USERS
            </Typography>
            <Typography
              className='spaceGrotesk'
              sx={{
                width: '292px',
                height: 'fit-content',
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '23px',
                letterSpacing: '0.12px',
                marginTop: '14px',
              }}
            >
              <span
                className='spaceGrotesk'
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  lineHeight: '23px',
                  letterSpacing: '0px',
                  marginTop: '13px',
                }}
              >
                UX Research •&nbsp;
              </span>
              Website analysis, customer feedback, and user interviews to
              understand the reasons for the massive unsubscribes
            </Typography>

            <Box
              sx={{ display: 'flex', marginTop: '13px', position: 'relative' }}
            >
              <Typography
                className='spaceGrotesk'
                sx={{
                  fontSize: '15px',
                  fontWeight: '700',
                  lineHeight: '25px',
                  marginRight: '14px',
                }}
              >
                Learn more
              </Typography>
              <img
                src='/icons/learnMoreIcon.svg'
                alt=''
                style={{
                  position: 'absolute',
                  top: '8px',
                  left: '90px',
                  width: '11px',
                }}
              />{' '}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProppitCase;
