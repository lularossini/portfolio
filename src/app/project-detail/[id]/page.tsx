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
import TheResults from '@/app/_noPages/components/projectDetails/TheResults';
import Bullets from '@/app/_noPages/components/projectDetails/Bullets';
import Table from '@/app/_noPages/components/projectDetails/Table';
import Enum from '@/app/_noPages/components/projectDetails/Enum';

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
  const allProjectsId = projects.map((project) => project.id);

  const previousProjectClickHandler = () => {
    const indefOfCurrentProject = allProjectsId.indexOf(id);

    if (indefOfCurrentProject > 0)
      router.push(`/project-detail/${projects[indefOfCurrentProject - 1].id}`);
  };

  const nextProjectClickHandler = () => {
    const indefOfCurrentProject = allProjectsId.indexOf(id);

    if (indefOfCurrentProject < projects.length - 1)
      router.push(`/project-detail/${projects[indefOfCurrentProject + 1].id}`);
  };

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
            fontSize: '27px',
            fontWeight: '700',
            lineHeight: '34px',
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
          fontSize: '27px',
          fontWeight: '700',
          lineHeight: '34px',
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
          fontSize: '27px',
          fontWeight: '700',
          lineHeight: '34px',
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
          fontSize: '27px',
          fontWeight: '700',
          lineHeight: '34px',
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
        flexDirection: 'column',
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
          paddingTop: isDesktop ? '452px' : '362px', // CONDICIONAL AL ALTO DE LOS DIFERENTES CASES DE MOBILE
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

            // Image
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

            // The Results
            if (detail.type === 'theResults') {
              return (
                <TheResults
                  key={index}
                  percentages={detail.percentages}
                  colors={detail.colors}
                  texts={detail.texts}
                  marginBottom={detail.marginBottom}
                  marginTop={detail.marginTop}
                />
              );
            }
            if (detail.type === 'bullets') {
              return (
                <Bullets
                  key={index}
                  texts={detail.texts}
                  marginBottom={detail.marginBottom}
                  marginTop={detail.marginTop}
                />
              );
            }

            if (detail.type === 'enum') {
              return (
                <Enum
                  key={index}
                  texts={detail.texts}
                  marginBottom={detail.marginBottom}
                  marginTop={detail.marginTop}
                />
              );
            }
            if (detail.type === 'table') {
              return (
                <Table
                  key={index}
                  titles={detail.titles}
                  widths={detail.widths}
                  data={detail.data}
                  marginBottom={detail.marginBottom}
                  marginTop={detail.marginTop}
                />
              );
            }
          })}
      </Box>

      {/*Project nav bar*/}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '16px',
          width: '100vw',
          height: '65px',
          margin: '60px calc(50% - 50vw) 0 calc(50% - 50vw)',
          backgroundColor: '#EFEBF0',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '936px',
            height: '100%',
          }}
        >
          <Box
            sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}
            onClick={previousProjectClickHandler}
          >
            <img
              src='/previousArrow.svg'
              alt=''
              style={{
                position: 'relative',
                width: '18px',
                height: '18px',
                top: '1px',
              }}
            />
            <Typography
              sx={{
                fontSize: isDesktop ? '19px' : '16px',
                lineHeight: '25px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Previous project
            </Typography>
          </Box>

          <Box
            sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}
            onClick={nextProjectClickHandler}
          >
            <Typography
              sx={{
                fontSize: isDesktop ? '19px' : '16px',
                lineHeight: '25px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Next project
            </Typography>
            <img
              src='/nextArrow.svg'
              alt=''
              style={{
                position: 'relative',
                width: '18px',
                height: '18px',
                top: '1px',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetail;
