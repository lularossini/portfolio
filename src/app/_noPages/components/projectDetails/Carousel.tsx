import { Box, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface ICarouselPropsTypes {
  desktopSrcImages: string[];
  mobileSrcImages: string[];
  greaterThan600Mode: '100%' | 'full width' | 'customWidth';
  mobileMode: '100%' | 'full width' | 'customWidth';
  customWidthgreaterThan600Mode?: string;
  customWidthMobile?: string;
  marginBottom: number;
  marginTop: number;
}

const SimpleAliceCarousel: React.FC<ICarouselPropsTypes> = ({
  desktopSrcImages,
  mobileSrcImages,
  greaterThan600Mode,
  mobileMode,
  customWidthgreaterThan600Mode,
  customWidthMobile,
  marginBottom,
  marginTop,
}) => {
  const isGreaterThan600 = useMediaQuery('(min-width:600px)');
  const [width, setWidth] = useState('auto');

  useEffect(() => {
    const calculateWidth = () => {
      if (isGreaterThan600) {
        switch (greaterThan600Mode) {
          case '100%':
            return '100%';
          case 'full width':
            return '100vw';
          case 'customWidth':
            return customWidthgreaterThan600Mode || 'auto';
          default:
            return 'auto';
        }
      } else {
        switch (mobileMode) {
          case '100%':
            return '100%';
          case 'full width':
            return '100vw';
          case 'customWidth':
            return customWidthMobile || 'auto';
          default:
            return 'auto';
        }
      }
    };

    setWidth(calculateWidth());
  }, [
    isGreaterThan600,
    greaterThan600Mode,
    mobileMode,
    customWidthgreaterThan600Mode,
    customWidthMobile,
  ]);

  const items = (isGreaterThan600 ? desktopSrcImages : mobileSrcImages).map(
    (src, index) => (
      <div
        key={index}
        style={{
          padding: '0 20px', // Reduce el padding para que el margen total entre las slides sea 80px
          boxSizing: 'border-box',
          width: `calc(${width} / 2)`, // Divide el ancho entre 3 para mostrar tres elementos
        }}
      >
        <img src={src} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
      </div>
    )
  );

  const buttonStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    top: 'calc(50% - 27px)',
    transform: 'translateY(-50%)',
    zIndex: 10,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const responsive = {
    0: { items: 1 },
    1000: { items: 2 }, // 3 slides visibles para pantallas mayores de 600px
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: width,
        margin: width === '100vw' ? '0 calc(50% - 50vw)' : '0 auto',
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
      }}
    >
      <AliceCarousel
        items={items}
        infinite
        responsive={responsive}
        disableDotsControls
        autoWidth
        renderPrevButton={() => (
          <button style={{ ...buttonStyle, left: '10px' }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-chevron-left'
            >
              <polyline points='15 18 9 12 15 6' />
            </svg>
          </button>
        )}
        renderNextButton={() => (
          <button style={{ ...buttonStyle, right: '10px' }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-chevron-right'
            >
              <polyline points='9 18 15 12 9 6' />
            </svg>
          </button>
        )}
      />
    </Box>
  );
};

export default SimpleAliceCarousel;
