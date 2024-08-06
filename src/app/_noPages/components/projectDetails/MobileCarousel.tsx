import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface IMobileCarouselPropsTypes {
  mobileSrcImages: string[];
  mobileModeWidth: '100%' | 'full width' | 'customWidth';
  customWidthMobile?: string;
  mobileMarginBottom: number;
  mobileMarginTop: number;
}

const MobileCarousel: React.FC<IMobileCarouselPropsTypes> = ({
  mobileSrcImages,
  mobileModeWidth,
  customWidthMobile,
  mobileMarginBottom,
  mobileMarginTop,
}) => {
  const [innerwidth, setInnerWidth] = useState<number | null>(null);

  useEffect(() => {
    const initialWidth = window.innerWidth;
    setInnerWidth(initialWidth);

    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(innerwidth);
  }, [innerwidth]);

  const mobileItems = mobileSrcImages.map((src, index) => (
    <div key={index}>
      <img src={src} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
    </div>
  ));

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

  if (innerwidth === null) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'relative',
        left:
          mobileModeWidth === '100%'
            ? 0
            : innerwidth >= 936
            ? -((innerwidth - 936) / 2)
            : 0,
        width:
          mobileModeWidth === 'full width'
            ? innerwidth
            : mobileModeWidth === 'customWidth'
            ? customWidthMobile
            : '100%',
        maxWidth:
          mobileModeWidth === 'full width'
            ? innerwidth
            : mobileModeWidth === 'customWidth'
            ? customWidthMobile
            : '100%',

        margin: `${mobileMarginTop}px auto ${mobileMarginBottom}px auto`,
      }}
    >
      <AliceCarousel
        items={mobileItems}
        infinite
        renderDotsItem={({ isActive }) => (
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: isActive ? 'black' : 'grey',
              margin: '0 5px',
              cursor: 'pointer',
            }}
          />
        )}
        renderPrevButton={() => (
          <button style={{ ...buttonStyle, left: '10px' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-left"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}
        renderNextButton={() => (
          <button style={{ ...buttonStyle, right: '10px' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-right"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}
      />
    </Box>
  );
};

export default MobileCarousel;