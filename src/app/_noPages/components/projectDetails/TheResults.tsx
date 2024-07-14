import { Box, Typography, colors, useMediaQuery } from '@mui/material';
import React from 'react';

interface IResultsPropsTypes {
  percentages: string[];
  texts: string[];
  colors: string[];
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

const TheResults: React.FC<IResultsPropsTypes> = ({
  percentages,
  texts,
  colors,
  marginBottom,
  marginTop,
}) => {
  const isDesktop = useMediaQuery('(min-width:1200px)');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        marginBottom: `${marginBottom}px`,
        marginTop: `${marginTop}px`,
      }}
    >
      {percentages.map((percentage, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            width: '100%',
            height: 'fit-content',
            alignItems: isDesktop ? 'center' : 'first',
          }}
        >
          {isDesktop ? (
            <Box
              sx={{
                display: 'flex',
                width: '100px',
                minWidth: '100px',
                height: '100px',
                minHeight: '100px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '60px',
                backgroundColor: colors[index],
              }}
            >
              <Typography sx={{ fontSize: '34px', fontWeight: '500' }}>
                {percentage}
              </Typography>
            </Box>
          ) : (
            <Typography sx={{ fontSize: '28px', fontWeight: '500' }}>
              {percentage}
            </Typography>
          )}

          <Box>
            <Typography
              key={index}
              variant='body1'
              sx={{
                fontSize: isDesktop ? '24px' : '22px',
                lineHeight: isDesktop ? '30px' : '29px',
                fontWeight: '400',
                color: 'black',
                paddingLeft: isDesktop ? '35px' : '20px',
                paddingTop: isDesktop ? '0px' : '3px',
              }}
            >
              {formatText(texts[index]).map((part, index) => (
                <React.Fragment key={index}>{part}</React.Fragment>
              ))}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default TheResults;
