'use client';
import { projects } from '@/JSONs/JSONprojects';

import ExperienceDetailImage from '@/app/_noPages/components/projectDetails/ProjectDetailImage';
import ExperienceDetailVideo from '@/app/_noPages/components/projectDetails/ProjectDetailVideo';
import { Box, Typography } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ExperienceDetail = () => {
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

  const period = experience.period;
  const name = experience.name;
  const role = experience.role;
  const details = experience.details;

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        top: '-30px',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      {/*Details*/}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '672px',
          marginTop: '60px',
          '@media(min-width: 1200px)': {
            marginTop: '0px',
          },
        }}
      >
        {/*Back button*/}
        <Box
          onClick={backToHomeButtonHandler}
          sx={{
            display: 'flex',
            position: 'absolute',
            width: '40px',
            height: '40px',
            justifyContent: 'center',
            alignItems: 'center',
            top: '-50px',
            left: '0px',
            borderRadius: '100px',
            border: '1px solid #8C8C8C',
            cursor: 'pointer',
            '@media(min-width: 1200px)': {
              top: '25px',
              left: '-160px',
            },
          }}
        >
          <svg
            width='17'
            height='17'
            color='black'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='m12 19-7-7 7-7'></path>
            <path d='M19 12H5'></path>
          </svg>
        </Box>

        <Typography
          variant='h1'
          sx={{
            fontSize: '30px',
            color: 'black',
            fontWeight: '600',
            marginTop: '25px',
            fontFamily: 'var(--font-darkerGrotesque), sans-serif !important',
          }}
        >
          {name}
        </Typography>

        <Typography
          variant='body1'
          sx={{
            fontSize: '14px',
            lineHeight: '14px',
            color: '#black',
            marginTop: '0px',
          }}
        >
          {period}
        </Typography>

        <Typography
          variant='body1'
          sx={{
            fontSize: '17px',
            color: 'black',
            marginTop: '8px',
            fontWeight: '600',
          }}
        >
          {role}
        </Typography>
        {details &&
          details.map((detail, index) => {
            if (typeof detail === 'string') {
              const fisrtString = index === 0;
              const isaRegularText = detail.slice(0, 3) !== '<b>';
              const isaYearTitle =
                detail.slice(0, 3) === '<b>' &&
                typeof details[index + 1] === 'string' &&
                (details[index + 1] as string).slice(0, 3) === '<b>';

              const isaTitleAfterYear =
                detail.slice(0, 3) === '<b>' &&
                typeof details[index - 1] === 'string' &&
                (details[index - 1] as string).slice(0, 3) === '<b>';

              const isaRegularTitle =
                detail.slice(0, 3) === '<b>' && !isaYearTitle;

              return (
                <Typography
                  key={index}
                  variant='body1'
                  sx={{
                    fontSize: isaRegularText
                      ? '16px'
                      : isaYearTitle
                      ? '24px'
                      : isaRegularTitle
                      ? '18px'
                      : '',
                    fontWeight: isaRegularText
                      ? '400'
                      : isaYearTitle
                      ? '700'
                      : isaRegularTitle
                      ? '600'
                      : '',
                    color: isaYearTitle || isaRegularTitle ? 'black' : 'black',
                    lineHeight: '23px',
                    marginTop: fisrtString
                      ? '60px'
                      : isaRegularText
                      ? '10px'
                      : isaTitleAfterYear
                      ? '5px'
                      : isaRegularTitle
                      ? '40px'
                      : isaYearTitle
                      ? '40px'
                      : '',
                  }}
                >
                  {detail.slice(0, 3) === '<b>' ? detail.slice(3) : detail}
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

export default ExperienceDetail;

//http://localhost:3000/experience-detail/456
