'use client';
import { projects } from '@/JSONs/JSONprojects';

import ExperienceDetailImage from '@/app/_noPages/components/projectDetails/ProjectDetailImage';
import ExperienceDetailVideo from '@/app/_noPages/components/projectDetails/ProjectDetailVideo';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { useEffect, useState } from 'react';

const ProjectDetail = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');

  const router = useRouter();
  const params = useParams();
  const id: string | string[] = params.id;

  const backToHomeButtonHandler = () => {
    router.push('/');
  };

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

  const experience = projects.find((experience) => {
    return experience.id === id;
  });

  if (!experience) {
    router.push('/error');

    return;
  }

  const details = experience.details;

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
      {/*Details*/}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '340px',

          '@media(min-width: 1200px)': {
            paddingTop: '430px',
          },
        }}
      >
        {/* Cover case study */}
        <Box
          sx={{
            position: 'absolute',
            top: '50px',
            left: 0,
            width: '100vw',
            height: isDesktop ? '452px' : '322px',
            backgroundColor:
              id === 'properati-case' || id === 'tyr-case'
                ? '#F1E5F8'
                : '#EDE9EF',
          }}
        ></Box>

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
                  className='regularText'
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
                  }}
                >
                  {detail.text}
                </Typography>
              );
            }
            if (detail.type === 'results') {
              return (
                <Box
                  key={index}
                  sx={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: '25px' }}>The results</Typography>

                  {detail.percentages.map((percentage, index) => {
                    return (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          marginTop: '10px',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '28px',
                            fontWeight: '500',
                            marginRight: '10px',
                          }}
                        >
                          {percentage}
                        </Typography>
                        <Typography
                          sx={{ fontSize: '20px', fontWeight: '600' }}
                        >
                          {detail.texts[index]}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              );
            }
            if (detail.type === 'link') {
              return (
                <a
                  target='_blank'
                  key={index}
                  href={detail.href}
                  style={{
                    textDecoration: 'underline',
                    width: '100%',
                    height: detail.height,
                    textAlign: 'center',
                    marginTop: detail.marginTop,
                    marginBottom: detail.marginBottom,

                    fontSize: '14px',
                  }}
                >
                  {detail.text}
                </a>
              );
            }

            if (detail.type === 'image') {
              return (
                <ExperienceDetailImage
                  key={index}
                  src={detail.src}
                  srcMobile={detail.mobileVersionSrc}
                  width={detail.width}
                  height={detail.height}
                  marginTop={detail.marginTop}
                  marginBottom={detail.marginBottom}
                  imageDescription={detail.imageDescription}
                  widthImageDescription={detail.widthImageDescription}
                />
              );
            }

            if (detail.type === 'video') {
              return (
                <ExperienceDetailVideo
                  key={index}
                  src={detail.src}
                  width={detail.width}
                  height={detail.height}
                  imageDescription={detail.imageDescription}
                  marginTop={detail.marginTop}
                  marginBottom={detail.marginBottom}
                  widthImageDescription={detail.widthImageDescription}
                />
              );
            }
          })}
      </Box>
    </Box>
  );
};

export default ProjectDetail;
