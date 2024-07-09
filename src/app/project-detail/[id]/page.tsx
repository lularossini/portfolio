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

  const project = projects.find((experience) => {
    return experience.id === id;
  });

  if (!project) {
    router.push('/error');

    return;
  }

  const details = project.details;

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
          top: isDesktop ? '100px' : '105px',
          left: 0,
          width: '100vw',
          height: isDesktop ? '452px' : '322px',
          backgroundColor:
            id === 'properati-case' || id === 'tyr-case'
              ? '#F1E5F8'
              : '#EDE9EF',
        }}
      ></Box>

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
