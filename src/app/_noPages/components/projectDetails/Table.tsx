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

  if (isDesktop) {
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
                fontSize: '34px',
                lineHeight: '38px',
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
                    fontSize: '24px',
                    lineHeight: '30px',
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
  } else {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginBottom: `${marginBottom}px`,
          marginTop: `${marginTop}px`,
          gap: '15px', // Espaciado entre bloques de títulos y datos
        }}
      >
        {titles.map((title, titleIndex) => (
          <Box key={titleIndex} sx={{ width: '100%' }}>
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '27px',
                lineHeight: '34px',
                color: 'black',
                marginBottom: '5px',
              }}
            >
              {title}
            </Typography>
            {data[titleIndex].map((detail, detailIndex) => (
              <Typography
                key={detailIndex}
                variant='body1'
                sx={{
                  fontSize: '22px',
                  lineHeight: '29px',
                  fontWeight: '400',
                  color: 'black',
                  marginTop: '10px',
                }}
              >
                {formatText(detail).map((part, index) => (
                  <React.Fragment key={index}>{part}</React.Fragment>
                ))}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>
    );
  }
};

export default Table;
