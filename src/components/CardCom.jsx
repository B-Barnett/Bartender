import {StyledCard} from './styles/StyledCard.styled';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
}) (({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CardCom = props => {
    const {handleExpandClick, drinks} = props;

    return (
        <>
            <StyledCard>
                <Grid container spacing={2} justifyContent={{xxs: 'center', xs:'center', sm:'start',md:'start',lg:'start'}}>
                {
                    drinks.map((drink) => <Grid item xs={12} sm={4} lg={3} mt={2} key={drink.idDrink}>
                        <Card>
                            <CardHeader sx={{textAlign: 'center', padding: '12px 0 12px 0'}} title={drink.strDrink}/>
                            <CardMedia
                                component="img"
                                height="250"
                                image={drink.strDrinkThumb}
                                alt={drink.strDrink}
                            />
                            <CardContent sx={{height: '65px', pt: '20px'}}>
                                <p className='cardContent'>{drink.strAlcoholic}</p>
                                <p className='cardContent'>{drink.strGlass}</p>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="bookmark">
                                    <BookmarkBorderIcon/>
                                </IconButton>
                                <ExpandMore
                                    expand={drink.expanded}
                                    onClick={() => handleExpandClick(drink.idDrink)}
                                    aria-expanded={drink.expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon/>
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={drink.expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <p className="cardContentExp">Ingredients:</p>
                                    <ul className="cardContentExp">
                                        <li>{drink.strIngredient1}</li>
                                        <li>{drink.strIngredient2}</li>
                                        <li>{drink.strIngredient3}</li>
                                        <li>{drink.strIngredient4}</li>
                                        <li>{drink.strIngredient5}</li>
                                        <li>{drink.strIngredient6}</li>
                                        <li>{drink.strIngredient7}</li>
                                        <li>{drink.strIngredient8}</li>
                                        <li>{drink.strIngredient9}</li>
                                        <li>{drink.strIngredient10}</li>
                                        <li>{drink.strIngredient11}</li>
                                        <li>{drink.strIngredient12}</li>
                                        <li>{drink.strIngredient13}</li>
                                        <li>{drink.strIngredient14}</li>
                                        <li>{drink.strIngredient15}</li>
                                    </ul>
                                    <p className="cardContentExp">Instructions:</p>
                                    <p className="cardContentExp">{drink.strInstructions}</p>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                    )
                }
                </Grid>
            </StyledCard>
        </>
    );
}

export default CardCom;