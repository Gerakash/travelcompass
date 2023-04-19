import { styled } from '@mui/system';

const StyledPaper = styled('div')(({ theme }) => ({
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100px',
}));

const MapContainer = styled('div')({
  height: '85vh',
  width: '100%',
});

const MarkerContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  '&:hover': {
    zIndex: 2,
  },
}));

const Pointer = styled('div')({
  cursor: 'pointer',
});

export { StyledPaper, MapContainer, MarkerContainer, Pointer };