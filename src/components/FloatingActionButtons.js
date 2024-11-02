import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function FloatingActionButtons({ onNavigate }) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab
        color="primary"
        aria-label="navigate"
        variant="extended"
        onClick={onNavigate}
      >
        <ArrowForwardIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
    </Box>
  );
}
