import React, { useEffect, useState } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

interface ICarouselPropsTypes {
  desktopSrcImages: string[];
  desktopModeWidth: '100%' | 'full width';
  desktopModeQuantitySlidesLevel?: 0.5 | 1 | 1.5 | 2 | 2.5;
  desktopMarginBottom: number;
  desktopMarginTop: number;
}

const DesktopCarousel: React.FC<ICarouselPropsTypes> = ({
  desktopSrcImages,
  desktopModeWidth,
  desktopModeQuantitySlidesLevel,
  desktopMarginBottom,
  desktopMarginTop,
}) => {
  const [innerWidth, setInnerWidth] = useState<number | null>(null);

  useEffect(() => {
    if (innerWidth) {
      const glide = new Glide('#customCarousel', {
        type: 'carousel',
        focusAt: 'center',
        perView: desktopModeQuantitySlidesLevel
          ? desktopModeQuantitySlidesLevel
          : 1,
        startAt: desktopModeQuantitySlidesLevel
          ? desktopModeQuantitySlidesLevel
          : 1,
        gap: 30,
        peek: {
          before: desktopModeWidth === 'full width' ? 400 : 200,
          after: desktopModeWidth === 'full width' ? 400 : 200,
        },
        breakpoints: {
          800: {
            perView: 1,
            peek: { before: 150, after: 150 },
          },
          480: {
            perView: 1,
            peek: { before: 20, after: 20 },
          },
        },
      });
      glide.mount();
    }
  }, [innerWidth, desktopModeWidth]);

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

  const buttonStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '1px solid #4c4c4c',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  if (innerWidth === null) {
    return null;
  }

  return (
    <div
      id="customCarousel"
      style={{
        position: 'relative',
        left: desktopModeWidth === 'full width' ? -((innerWidth - 936) / 2) : 0,
        width: desktopModeWidth === 'full width' ? innerWidth : '100%',
        marginTop: `${desktopMarginTop}px`,
        marginBottom: `${desktopMarginBottom}px`,
      }}
    >
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {desktopSrcImages.map((src, index) => (
            <li className="glide__slide" key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                style={{ width: '100%' }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div data-glide-el="controls">
        <button style={{ ...buttonStyle, left: '10px' }} data-glide-dir="<">
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
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button style={{ ...buttonStyle, right: '10px' }} data-glide-dir=">">
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
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DesktopCarousel;
