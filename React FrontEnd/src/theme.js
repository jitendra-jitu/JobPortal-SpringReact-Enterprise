// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Set the theme mode to dark
    primary: {
      main: '#90caf9', // Customize primary color
    },
    secondary: {
      main: '#f48fb1', // Customize secondary color
    },
    background: {
      default: '#121212', // Default background color
      paper: '#424242', // Background color for Paper components
    },
    text: {
      primary: '#ffffff', // Primary text color
      secondary: '#b0bec5', // Secondary text color
    },
  },
});

export default theme;
