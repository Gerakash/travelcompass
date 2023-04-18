import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

import {
    Title,
    Search,
    SearchIconStyle,
    InputRoot,
    InputInput,
    ToolbarStyle,
  } from './styles'

  import { useTheme } from '@mui/material/styles';



  const Header = () => {
    const theme = useTheme();
  
    return (
      <AppBar position="static">
        <Toolbar component={ToolbarStyle}>
          <Typography
            variant="h5"
            component={Title}
            sx={{
              [theme.breakpoints.up('sm')]: {
                display: 'block',
              },
            }}
          >
            Leisure Compass
          </Typography>
          <Box display="flex">
            <Typography
              variant="h6"
              component={Title}
              sx={{
                [theme.breakpoints.up('sm')]: {
                  display: 'block',
                },
              }}
            >
              Explore new places
            </Typography>
            {/* <Autocomplete > */}
            <Search>
              <SearchIcon component={SearchIconStyle}/>
              <InputBase
                placeholder="Search..."
                components={{ root: InputRoot, input: InputInput }}
              />
            </Search>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Header;