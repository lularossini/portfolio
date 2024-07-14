import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

interface ITablePropsTypes {
  titles: string[];
  data: string[][];
  widths: string[];
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

const Table: React.FC<ITablePropsTypes> = ({
  titles,
  data,
  widths,
  marginBottom,
  marginTop,
}) => {
  const isDesktop = useMediaQuery('(min-width:1200px)');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: `${marginBottom}px`,
        marginTop: `${marginTop}px`,
        gap: '3px', // Espaciado entre filas
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          gap: '10px',
        }}
      >
        {titles.map((title, index) => (
          <Typography
            key={index}
            sx={{
              fontWeight: '600',
              fontSize: isDesktop ? '34px' : '27px',
              lineHeight: isDesktop ? '38px' : '34px',
              color: 'black',
              width: widths[index],
            }}
          >
            {title}
          </Typography>
        ))}
      </Box>

      {/* Data */}
      {data[0] &&
        data[0].map((_, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              gap: '10px',
            }}
          >
            {data.map((colData, colIndex) => (
              <Typography
                key={colIndex}
                variant='body1'
                sx={{
                  fontSize: isDesktop ? '24px' : '22px',
                  lineHeight: isDesktop ? '30px' : '29px',
                  fontWeight: '400',
                  color: 'black',
                  width: widths[colIndex],
                  marginTop: rowIndex === 0 ? '10px' : '0', // Aplicar margen solo a filas no primeras
                }}
              >
                {formatText(colData[rowIndex]).map((part, index) => (
                  <React.Fragment key={index}>{part}</React.Fragment>
                ))}
              </Typography>
            ))}
          </Box>
        ))}
    </Box>
  );
};

export default Table;
