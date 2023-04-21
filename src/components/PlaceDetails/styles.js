import { Chip } from '@mui/material';
import { styled } from '@mui/system';

const StyledChip = styled(Chip)({
  margin: '5px 5px 5px 0',
});

const Subtitle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '10px',
});

const Spacing = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export { StyledChip, Subtitle, Spacing };