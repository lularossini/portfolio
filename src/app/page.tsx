import { Box } from '@mui/material';
import Abitab from './_noPages/views/home/Abitab';
import Properati from './_noPages/views/home/Properati';
import TyrCase from './_noPages/views/home/TyrCase';
import Proppit from './_noPages/views/home/proppit';

const Home = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '23px' }}>
      <TyrCase />
      <Abitab />
      <Properati />
      <Proppit />
    </Box>
  );
};

export default Home;
