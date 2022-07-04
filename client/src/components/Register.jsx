import {StyledLogReg} from './styles/StyledLogReg.styled';
import {LogRegButton, LogRegLink} from './styles/StyledButtons.styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const Register = () => {
    return (
        <StyledLogReg>
            <Grid container rowSpacing={2} direction="column" justifyContent="center" alignItems="center" height="100%">
                <Grid item>
                    <p className='logRegTitle'>Register</p>
                </Grid>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                    >
                    <TextField
                        id="standard"
                        label="Email"
                        variant="standard"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        variant="standard"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Confirm Password"
                        type="password"
                        variant="standard"
                    />
                    <Grid item mt={3}>
                        <LogRegButton type="submit">Register</LogRegButton>
                    </Grid>
                </Box>
                <Grid item>
                    <LogRegLink to="/login">Login to an account</LogRegLink>
                </Grid>
            </Grid>
        </StyledLogReg>
    );
}

export default Register;