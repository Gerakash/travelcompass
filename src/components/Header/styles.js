// import { alpha, makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/styles';
import { alpha } from '@mui/material/styles';

const Title = styled('div')(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }));
  
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha('#FFF', 0.15),
    '&:hover': {
      backgroundColor: alpha('#FFF', 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const InputRoot = styled('div')({
    color: 'inherit',
  });
  
  const InputInput = styled('input')(({ theme }) => ({
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  }));
  
  const ToolbarStyle = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
  });

  export {
    Title,
    Search,
    SearchIconStyle,
    InputRoot,
    InputInput,
    ToolbarStyle,
  };