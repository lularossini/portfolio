'use client';

import { Box, Typography, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';

const Properati: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const router = useRouter();

  const goToTheCaseStudyPage: () => void = () => {
    router.push('/project-detail/properati-case');
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
            backgroundColor: '#F1E5F8',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
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
              className='darkerGrotesk'
              sx={{
                fontSize: '23px',
                fontWeight: '700',
                lineHeight: '25px',
                letterSpacing: '2px',
              }}
            >
              A RESPONSIVE WEB TO HELP SELLERS WORK QUICKLY AND EFFICIENTLY
            </Typography>
            <Typography
              className='spaceGrotesk'
              sx={{
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '23px',
                marginTop: '15px',
              }}
            >
              <span
                className='spaceGrotesk'
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  lineHeight: '23px',
                  marginTop: '15px',
                }}
              >
                UX Design •
              </span>{' '}
              The process of designing a site to help property vendors sell
              better and faster
            </Typography>

            <Box sx={{ display: 'flex', marginTop: '12px' }}>
              <Typography
                className='spaceGrotesk'
                sx={{
                  fontSize: '14px',
                  fontWeight: '500',
                  lineHeight: '25px',
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
          onClick={goToTheCaseStudyPage}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '349px',
            height: '463 px',
            padding: '33px 0 25px 0',
            borderRadius: '10px',
            backgroundColor: '#F1E5F8',
            alignItems: 'center',
            justifyContent: 'first',
          }}
        >
          <img
            src='/home/PROPERATIHomeMobile.png'
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
              A RESPONSIVE WEB TO HELP SELLERS WORK QUICKLY AND EFFICIENTLY
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
                UX Design • &nbsp;
              </span>
              The process of designing a site to help property vendors sell
              better and faster
            </Typography>

            <Box sx={{ display: 'flex', marginTop: '13px' }}>
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
              <img src='/learnMoreIcon.svg' alt='' style={{ width: '11px' }} />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Properati;
