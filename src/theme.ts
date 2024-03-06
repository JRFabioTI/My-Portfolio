import { SegmentOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',	
    },
    secondary: {
      main: '#4f8e3e',
    },
  },
  Typography: {
    fontFamily: [
    '"Helvetica Neue"',
    // '-apple-system',
    // 'BlinkMacsSystemFont',
    // '"Segoe UI"',
    // 'Roboto',
    // '"Helvetica Neue"',
    // 'Arial',
    // 'sans-serif',
    // '"Apple Color Emoji"',
    // '"Segoe UI Emoji"',
    // '"Segoe UI Symbol"',
  ].join(','),
  }
});

theme = responsiveFontSizes(theme);

export default theme;