import React from 'react';
import AllRoutes from './Pages/AllRoutes';
import { Box } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: 2,
          right: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '6px',
        }}
      >
        <ColorModeSwitcher sx={{ width: '100%', border: '1px solid black' }} />
      </Box>
      <AllRoutes />
    </>
  );
}

export default App;
