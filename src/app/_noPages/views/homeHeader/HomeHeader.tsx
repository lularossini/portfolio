import { Box, Typography, useMediaQuery } from "@mui/material";

const HomeHeader = () => {
  const greaterThan1280 = useMediaQuery('(min-width:1280px)');
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const isLittleMobile = useMediaQuery('(max-width:380px)');
  
  return (
    <Box
        sx={{
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          width: isDesktop ? '1250px' : isLittleMobile ? '100%' : '349px',
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
            5 years of experience
          </Typography>
          <img
            src='/icons/circleIconHome.svg'
            alt=''
            style={{ width: '35px', height: '35px' }}
          />
        </Box>
      </Box>
  );
};

export default HomeHeader;