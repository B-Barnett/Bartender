import {StyledSideNav} from './styles/StyledSideNav.styled';
import {StyledCloseIcon} from './styles/StyledIcons.styled';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as RiIcons from 'react-icons/ri';

const SideNav = (props) => {
    const {
        side, 
        changeSide, 
        cats, 
        ingredients, 
        glasses, 
        handleCatFilter,
        handleIngFilter,
        handleGlassFilter,
        catFilter,
        ingFilter,
        glassFilter} = props;

    const sideTheme = createTheme({
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
                paper: '#15204b',
            }
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        right: '0',
                        left: 'auto !important',
                    },
                },
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        fontFamily: 'Montserrat',
                    }
                }
            },
            MuiList: {
                styleOverrides: {
                    root: {
                        maxHeight: '300px',
                    }
                }
            }
        },
    });
    
    return (
        <ThemeProvider theme={sideTheme}>
            <StyledSideNav side = {side}>
                <StyledCloseIcon>
                    <RiIcons.RiCloseLine onClick={changeSide}/>
                </StyledCloseIcon>
                <p className='filter'>Filter</p>
                <FormControl sx={{marginTop: '10px'}} fullWidth>
                    <InputLabel id='categories'>Categories</InputLabel>
                    <Select
                        labelId='categories'
                        id='categories'
                        label='categories'
                        onChange={handleCatFilter}
                        value={catFilter}
                        >
                        <MenuItem value="">None</MenuItem>
                        {
                        cats.sort().map((cat, i) => 
                        <MenuItem key={i} value={cat}>
                            {cat}
                        </MenuItem>
                        )}
                    </Select>
                </FormControl>
                <FormControl sx={{marginTop: '10px'}} fullWidth>
                    <InputLabel id='ingredients'>Ingredients</InputLabel>
                    <Select
                        labelId='ingredients'
                        id='ingredients'
                        label='ingredients'
                        onChange={handleIngFilter}
                        value={ingFilter}
                        >
                        <MenuItem value="">None</MenuItem>
                        {
                        ingredients.sort().map((ing, i) => 
                        <MenuItem key={i} value={ing}>
                            {ing}
                        </MenuItem>
                        )}
                    </Select>
                </FormControl>
                <FormControl sx={{marginTop: '10px'}} fullWidth>
                    <InputLabel id='glassType'>Glass Type</InputLabel>
                    <Select
                        labelId='glassType'
                        id='glassType'
                        label='glassType'
                        onChange={handleGlassFilter}
                        value={glassFilter}
                        >
                        <MenuItem value="">None</MenuItem>
                        {
                        glasses.sort().map((glass, i) =>
                        <MenuItem key={i} value={glass}>
                            {glass}
                        </MenuItem>
                        )}
                    </Select>
                </FormControl>
            </StyledSideNav>
        </ThemeProvider>
    );
}

export default SideNav;