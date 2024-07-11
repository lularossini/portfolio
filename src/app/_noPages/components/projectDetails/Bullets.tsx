import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

interface IBulletsPropsTypes {
  texts: string[];
  marginBottom: number;
  marginTop: number;
}

const formatText = (detail: string) => {
  const parts = detail.split(/(<b>.*?<\/b>)/g);
  return parts.map((part, index) => {
    if (part.startsWith('<b>') && part.endsWith('</b>')) {
      return <b key={index}>{part.slice(3, -4)}</b>;
    }
    return part;
  });
};

const Bullets: React.FC<IBulletsPropsTypes> = ({
  texts,
  marginBottom,
  marginTop,
}) => {
  const isDesktop = useMediaQuery('(min-width:1200px)');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        paddingLeft: '20px',
      }}
    >
      {texts.map((text, index) => (
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
          <span
            style={{
              position: 'relative',
              top: '2px',
              fontSize: '30px',
              fontWeight: '500',
            }}
          >
            •&nbsp;
          </span>
          {formatText(texts[index]).map((part, index) => (
            <React.Fragment key={index}>{part}</React.Fragment>
          ))}
        </Typography>
      ))}
    </Box>
  );
};

export default Bullets;
