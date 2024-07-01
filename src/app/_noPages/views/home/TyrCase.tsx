import { Box, Typography } from '@mui/material';

const TyrCase: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '1107px',
        height: '452px',
        borderRadius: '10px',
        backgroundColor: '#F1E5F8',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '',
      }}
    >
      <img
        src='TYRHomeDesktop.png'
        alt=''
        style={{ width: '527px', height: '325px' }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '350px',
          fontSize: '23px',
          fontWeight: '700',
          lineHeight: '25px',
          letterSpacing: '2px',
        }}
      >
        <Typography>A NEW INTERNAL SYSTEM TO ENHACE EXPERIENCE</Typography>
        <Typography sx={{ marginTop: '15px' }}>
          UX Design •  UX Research • Complete redesign focused on the usability
          of the internal tool for a commodity trading company in Portland
        </Typography>

        <Box sx={{ display: 'flex', marginTop: '15px' }}>
          <Typography>Learn more</Typography>
          <img src='/learnMoreIcon.svg' alt='' />
        </Box>
      </Box>
    </Box>
  );
};

export default TyrCase;
