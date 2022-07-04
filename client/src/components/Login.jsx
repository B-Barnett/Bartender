import {StyledLogReg} from './styles/StyledLogReg.styled';
import {LogRegButton, LogRegLink} from './styles/StyledButtons.styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const Login = () => {
    return (
        <StyledLogReg>
            <Grid container rowSpacing={2} direction="column" justifyContent="center" alignItems="center" height="100%">
                <Grid item>
                    <p className='logRegTitle'>Login</p>
                </Grid>
                <Grid item>
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
                        <LogRegButton type="submit">Login</LogRegButton>
                    </Box>
                </Grid>
                <Grid item>
                    <LogRegLink to="/register">Register an account</LogRegLink>
                </Grid>
            </Grid>
        </StyledLogReg>
    );
}

export default Login;