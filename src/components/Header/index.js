import React, {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.45),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const Header = ({ setCoordinates }) => {
  const [autoComplete, setAutoComplete] = useState(null)

  const onLoad = (autoCom) => setAutoComplete(autoCom)

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat()
    const lng = autoComplete.getPlace().geometry.location.lng()

    setCoordinates({lat, lng})

  }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
            <Typography 
            variant="h5" 
            noWrap component="div" 
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight: 'Bold',color: 'rgb(53, 54, 53)' }}
            >
            LEISURE COMPASS
            </Typography>
            <Box display="flex">
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                </Search>
            </Autocomplete>
            </Box>
        </Toolbar>
    </AppBar>
</Box>
  );
};

export default Header;











