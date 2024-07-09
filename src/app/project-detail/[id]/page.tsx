'use client';

// ** React | Next import
import React, { useEffect } from 'react';

// ** Router import
import { useParams, useRouter } from 'next/navigation';

// ** JSON data import
import { projects } from '@/JSONs/JSONprojects';

// ** Components import
import ProjectDetailImage from '@/app/_noPages/components/projectDetails/ProjectDetailImage';

// ** Material UI import
import { Box, Typography, useMediaQuery } from '@mui/material';

const ProjectDetail = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const router = useRouter();
  const params = useParams();
  const id: string | string[] = params.id;

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  if (!id || typeof id !== 'string') {
    router.push('/not-found');

    return;
  }

  const isKnownId = projects.map((experience) => experience.id).includes(id);

  if (!isKnownId) {
    router.push('/not-found');

    return;
  }

  const project = projects.find((project) => {
    return project.id === id;
  });

  if (!project) {
    router.push('/error');

    return;
  }

  const details = project.details;

  const tyrCaseDesktop = (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img
        src='/home/TYRHomeDesktop.png'
        alt=''
        style={{ width: '527px', height: '325px' }}
      />
      <Box
        sx={{
          display: 'flex',
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
          A NEW INTERNAL SYSTEM TO ENHACE EXPERIENCE
        </Typography>
      </Box>
    </Box>
  );

  const tyrCaseMobile = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Typography
        className='darkerGrotesk'
        sx={{
          fontSize: '20px',
          fontWeight: '700',
          lineHeight: '24px',
          letterSpacing: '2px',
          width: '270px',
          marginTop: '35px',
          marginBottom: '30 px',
          textAlign: 'center',
        }}
      >
        A NEW INTERNAL SYSTEM TO ENHACE EXPERIENCE
      </Typography>

      <img
        src='/home/TYRHomeDesktop.png'
        alt=''
        style={{
          marginTop: '40px',
          width: '325px',
        }}
      />
    </Box>
  );

  const abitabCaseDesktop = (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        className='darkerGrotesk'
        sx={{
          fontSize: '23px',
          fontWeight: '700',
          lineHeight: '25px',
          letterSpacing: '2px',
          width: '360px',
        }}
      >
        GIVING URUGUAYANS A DIGITAL IDENTITY
      </Typography>
      <img
        src='/home/ABITABHomeDesktop.svg'
        alt=''
        style={{ width: '365px', height: '403px' }}
      />
    </Box>
  );

  const abitabCaseMobile = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Typography
        className='darkerGrotesk'
        sx={{
          fontSize: '20px',
          fontWeight: '700',
          lineHeight: '24px',
          letterSpacing: '2px',
          width: '270px',
          marginTop: '30px',
          textAlign: 'center',
        }}
      >
        GIVING URUGUAYANS A DIGITAL IDENTITY
      </Typography>

      <img
        src='/home/ABITABHomeDesktop.svg'
        alt=''
        style={{
          marginTop: '25px',
          width: '241px',
        }}
      />
    </Box>
  );

  const properatiCaseDesktop = (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img
        src='/home/PROPERATIHomeDesktop.png'
        alt=''
        style={{ width: '527px', height: '305 px' }}
      />
      <Typography
        className='darkerGrotesk'
        sx={{
          fontSize: '23px',
          fontWeight: '700',
          lineHeight: '25px',
          letterSpacing: '2px',
          width: '360px',
          marginLeft: '70px',
        }}
      >
        A RESPONSIVE WEB TO HELP SELLERS WORK QUICKLY AND EFFICIENTLY
      </Typography>
    </Box>
  );

  const properatiCaseMobile = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Typography
        className='darkerGrotesk'
        sx={{
          fontSize: '20px',
          fontWeight: '700',
          lineHeight: '24px',
          letterSpacing: '2px',
          width: '270px',
          marginTop: '35px',
          textAlign: 'center',
        }}
      >
        A RESPONSIVE WEB TO HELP SELLERS WORK QUICKLY AND EFFICIENTLY
      </Typography>

      <img
        src='/home/PROPERATIHomeDesktop.png'
        alt=''
        style={{
          marginTop: '26px',
          width: '325px',
        }}
      />
    </Box>
  );

  const proppitCaseDesktop = (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        className='darkerGrotesk'
        sx={{
          fontSize: '23px',
          fontWeight: '700',
          lineHeight: '25px',
          letterSpacing: '2px',
          width: '360px',
        }}
      >
        REDUCING CHURN BY UNDERSTANDING USERS
      </Typography>
      <img
        src='/home/PROPPITHomeDesktop.png'
        alt=''
        style={{ width: '527px', height: '305px' }}
      />
    </Box>
  );

  const proppitCaseMobile = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Typography
        className='darkerGrotesk'
        sx={{
          fontSize: '20px',
          fontWeight: '700',
          lineHeight: '24px',
          letterSpacing: '2px',
          width: '270px',
          marginTop: '45px',
          textAlign: 'center',
        }}
      >
        REDUCING CHURN BY UNDERSTANDING USERS
      </Typography>

      <img
        src='/home/PROPPITHomeDesktop.png'
        alt=''
        style={{
          marginTop: '37px',
          width: '325px',
        }}
      />
    </Box>
  );

  const renderCaseContent = () => {
    switch (id) {
      case 'tyr-case':
        return isDesktop ? tyrCaseDesktop : tyrCaseMobile;
      case 'abitab-case':
        return isDesktop ? abitabCaseDesktop : abitabCaseMobile;
      case 'properati-case':
        return isDesktop ? properatiCaseDesktop : properatiCaseMobile;
      case 'proppit-case':
        return isDesktop ? proppitCaseDesktop : proppitCaseMobile;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        maxWidth: '936px',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      {/* Cover case study */}
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          top: isDesktop ? '100px' : '105px',
          left: 0,
          width: '100vw',
          height: isDesktop
            ? '452px'
            : id !== 'abitab-case'
            ? '322px'
            : '384px',
          backgroundColor:
            id === 'properati-case' || id === 'tyr-case'
              ? '#F1E5F8'
              : '#EDE9EF',
        }}
      >
        {renderCaseContent()}
      </Box>

      {/*Details*/}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: isDesktop ? '502px' : '362px',
        }}
      >
        {/* Details*/}
        {details &&
          details.map((detail, index) => {
            // Regular text
            if (typeof detail === 'string') {
              const formatText = (detail: string) => {
                const parts = detail.split(/(<b>.*?<\/b>)/g);
                return parts.map((part, index) => {
                  if (part.startsWith('<b>') && part.endsWith('</b>')) {
                    return <b key={index}>{part.slice(3, -4)}</b>;
                  }
                  return part;
                });
              };

              return (
                <Typography
                  key={index}
                  variant='body1'
                  sx={{
                    fontSize: isDesktop ? '24px' : '20px',
                    lineHeight: isDesktop ? '30px' : '27px',
                    fontWeight: '400',
                    color: 'black',
                    marginTop: '10px',
                  }}
                >
                  {formatText(detail).map((part, index) => (
                    <React.Fragment key={index}>{part}</React.Fragment>
                  ))}
                </Typography>
              );
            }

            // Title
            if (detail.type === 'title') {
              return (
                <Typography
                  key={index}
                  sx={{
                    fontSize: isDesktop ? '34px' : '25px',
                    fontWeight: '600',
                    marginTop: `${detail.marginTop}px`,
                    marginBottom: `${detail.marginBottom}px`,
                  }}
                >
                  {detail.text}
                </Typography>
              );
            }

            // Image 100%
            if (detail.type === 'image') {
              return (
                <ProjectDetailImage
                  key={index}
                  desktopSrc={detail.desktopSrc}
                  mobileSrc={detail.mobileSrc}
                  desktopMode={detail.desktopMode}
                  mobileMode={detail.mobileMode}
                  customWidthMobile={detail.customWidthMobile}
                  customWidthDesktop={detail.customWidthDesktop}
                  marginBottom={detail.marginBottom}
                  marginTop={detail.marginTop}
                />
              );
            }
          })}
      </Box>
    </Box>
  );
};

export default ProjectDetail;
