'use client';

import { Box, Typography, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';

const TyrCase: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const router = useRouter();

  const goToTheCaseStudyPage: () => void = () => {
    router.push('/project-detail/tyr-case');
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
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '25px',
                letterSpacing: '2px',
              }}
            >
              A NEW INTERNAL SYSTEM TO ENHACE EXPERIENCE
            </Typography>
            <Typography
              className='spaceGrotesk'
              sx={{
                fontSize: '13px',
                fontWeight: '500',
                lineHeight: '23px',
                marginTop: '15px',
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  lineHeight: '23px',
                  marginTop: '15px',
                }}
              >
                UX Design •  UX Research •
              </span>{' '}
              Complete redesign focused on the usability of the internal tool
              for a commodity trading company in Portland
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
            height: '440px',
            padding: '33px 0',
            borderRadius: '10px',
            backgroundColor: '#F1E5F8',
            alignItems: 'center',
            justifyContent: 'first',
          }}
        >
          <img
            src='/home/TYRHomeMobile.svg'
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
              sx={{
                width: '100%',
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '24px',
                letterSpacing: '2px',
              }}
            >
              A NEW INTERNAL SYSTEM TO ENHACE EXPERIENCE
            </Typography>
            <Typography
              sx={{
                width: '292px',
                height: '69px',
                fontSize: '13px',
                fontWeight: '500',
                lineHeight: '23px',
                letterSpacing: '0.12px',

                marginTop: '14px',
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  lineHeight: '23px',
                  letterSpacing: '0px',

                  marginTop: '13px',
                }}
              >
                UX Design •  UX Research •&nbsp;
              </span>
              Complete redesign focused on the usability of the internal tool
              for a commodity trading company in Portland
            </Typography>

            <Box sx={{ display: 'flex', marginTop: '13px' }}>
              <Typography
                sx={{
                  fontSize: '14px',
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

export default TyrCase;
