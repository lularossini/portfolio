import { Box, useMediaQuery } from '@mui/material';

interface IProjectDetailImageProps {
  desktopSrc: string;
  desktopMode: '100%' | 'full width' | 'customWidth';
  mobileSrc: string;
  mobileMode: '100%' | 'full width' | 'customWidth';
  customWidthMobile?: string;
  customWidthDesktop?: string;
  marginBottom: number;
  marginTop: number;
}

const ProjectDetailImage: React.FC<IProjectDetailImageProps> = ({
  desktopSrc,
  desktopMode,
  mobileSrc,
  mobileMode,
  customWidthMobile,
  customWidthDesktop,
  marginBottom,
  marginTop,
}) => {
  const isDesktop = useMediaQuery('(min-width:1200px)');

  const getWidth = () => {
    if (isDesktop) {
      switch (desktopMode) {
        case '100%':
          return '100%';
        case 'full width':
          return '100vw';
        case 'customWidth':
          return customWidthDesktop || 'auto';
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

  const imageWidth = getWidth();

  return (
    <Box
      sx={{
        width: imageWidth === '100vw' ? '100vw' : 'auto',
        margin: imageWidth === '100vw' ? '0 calc(50% - 50vw)' : '0 auto',
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
      }}
    >
      <img
        src={isDesktop ? desktopSrc : mobileSrc}
        alt=''
        style={{
          height: 'auto',
          width: imageWidth,
        }}
      />
    </Box>
  );
};

export default ProjectDetailImage;
