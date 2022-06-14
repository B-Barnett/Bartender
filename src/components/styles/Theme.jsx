import { createTheme } from '@mui/material/styles';
import '@fontsource/montserrat';

export const theme = createTheme({
    palette: {
    mode: 'dark',
        primary: {
            main: '#005aff',
            light: '#c9dbff',
            dark: '#0048cc',
            contrastText: '#ffffff',
        },
        background: {
            default: '#15204b',
            paper: '#1B285F',
        },
    },
    breakpoints: {
        values: {
            xxs: 0,
            xs: 400,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily:'montserrat, Roboto, sans-serif',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    border: '2px solid #c9dbff',
                    borderRadius: '0',
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    color: '#c9dbff',
                    padding: '0 14px 0 14px',
                    height: '100px',
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '0 8px 0 8px',
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '0',
                }
            }
        },
    },
});