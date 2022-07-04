import {StyledFooter} from './styles/StyledFooter.styled';
import * as FaIcons from 'react-icons/fa';
import {StyledFooterIcons} from './styles/StyledIcons.styled';
import {StyledFooterButton} from './styles/StyledButtons.styled';
import Grid from '@mui/material/Grid';

const Footer = () => {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            <StyledFooter>
                <Grid container>
                    <Grid item container xs={12} mt={5} justifyContent='center'>
                        <StyledFooterButton onClick={scrollToTop}>
                            Top <FaIcons.FaAngleUp/>
                        </StyledFooterButton>
                    </Grid>
                    <Grid item xxs={12} >
                        <p>Email</p>
                        <p>brendanbarnett01@gmail.com</p>
                    </Grid>
                    <Grid item xxs={12}>
                        <p>Phone</p>
                        <p>555-555-5555</p>
                    </Grid>
                    <Grid container p={3} textAlign='center' mt={{xxs: 3, xs: 2, sm: 0}}>
                        <Grid item xxs={12}>
                            <StyledFooterIcons to="#">
                                <FaIcons.FaTwitter/>
                            </StyledFooterIcons>
                            <StyledFooterIcons to="#">
                                <FaIcons.FaLinkedin/>
                            </StyledFooterIcons>
                            <StyledFooterIcons to="/inst">
                                <FaIcons.FaInstagramSquare/>
                            </StyledFooterIcons>
                        </Grid>
                    </Grid>
                </Grid>
            </StyledFooter>
        </>
    );
}

export default Footer;