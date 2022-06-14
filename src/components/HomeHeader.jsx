import {StyledHomeHeader} from './styles/StyledHomeHeader.styled';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

const HomeHeader = (props) => {
    const {handleSort, sort} = props;

    return (
        <StyledHomeHeader>
            <Grid container mt={5} mb={3} justifyContent='center'>
                <Grid item sx={{display: 'flex', justifyContent: {xxs: 'center', xs:'center', sm: 'flex-start'}}} xxs={12} sm={6}>
                    <h2 className='homeHeader'>Drinks</h2>
                </Grid>
                <Grid item sx={{display: 'flex', justifyContent: {xxs: 'center', xs:'center', sm:'flex-end'}, marginTop: {xxs: '20px', xs: '20px', sm: '0'}}} xxs={12} sm={6}>
                    <FormControl>
                        <InputLabel sx={{fontFamily: 'Montserrat', zIndex: 'auto'}} id='sort'>Sort By</InputLabel>
                        <Select
                            labelId='sort'
                            id='sort'
                            label='Sort By'
                            value={sort}
                            sx={{width: '138px', height: '53px'}}
                            onChange={handleSort}
                            >
                            <MenuItem value={""}>None</MenuItem>
                            <MenuItem value={1}>A - Z</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </StyledHomeHeader>
    );
}

export default HomeHeader;