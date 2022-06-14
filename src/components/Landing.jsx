import React, {useState, useEffect} from 'react';
import {useSearchParams, useNavigate, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import * as VsIcons from 'react-icons/vsc';
import {StyledFilterIcon} from './styles/StyledIcons.styled';
import {StyledImgCon} from './styles/StyledImgCon.styled';
import {RanButton} from './styles/StyledButtons.styled';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Search from './Search';
import SideNav from './SideNav';
import Footer from './Footer';
import HomeHeader from './HomeHeader';
import CardCom from './CardCom';

const Landing = () => {
    const [side, setSide] = useState(false);
    const [drinks, setDrinks] = useState([]);
    const [ranDrink, setRanDrink] = useState([]);
    const [sort, setSort] = useState('');
    const [random, setRandom] = useState(false);
    const [cats, setCats] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [glasses, setGlasses] = useState([]);
    const [catFilter, setCatFilter] = useState('');
    const [ingFilter, setIngFilter] = useState('');
    const [glassFilter, setGlassFilter] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    let navigate = useNavigate();
    let search = searchParams.get("search");

    // Receives the data for the card components depending on whether its
    // for a searched drink or the default home cards.
    useEffect(() => {
        const getDrinks = () => {
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then(res => {
                const temp = res.data.drinks;
                temp.forEach((e => e.expanded = false));
                setDrinks(temp);
            })
            .catch(err => console.log(err))
        }
        const getSearchDrinks = () => {
            navigate(`/home?search=${search}`);
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => {
                const temp = res.data.drinks;
                temp.forEach((e => e.expanded = false));
                setDrinks(temp);
            })
            .catch(err => console.log(err))
        }
        if (search) {
            getSearchDrinks();
        } else {
            getDrinks();
        }
    }, [search])

    // Finds a random drink.
    useEffect(() => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => {
            const temp = res.data.drinks;
            temp.forEach((e => e.expanded = false));
            setRanDrink(temp);
        })
        .catch(err => console.log(err))
    }, [random])

    // API requests for receiving the filter data on the sidenav.
    useEffect(() => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
            .then(res => setCats(res.data.drinks.map(c => c.strCategory)))
            .catch(err => console.log(err))
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
            .then(res => setIngredients(res.data.drinks.map(i => i.strIngredient1)))
            .catch(err => console.log(err))
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')
            .then(res => setGlasses(res.data.drinks.map(g => g.strGlass)))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        // Functions for receiving the filter drinks.
        const getCats = (callback) => {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${catFilter}`)
            .then(res => {
                const temp = res.data.drinks;
                callback(temp);
            })
            .catch(err => console.log(err))
        }
        const getIng = (callback) => {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingFilter}`)
            .then(res => {
                const temp = res.data.drinks;
                callback(temp);
            })
            .catch(err => console.log(err))
        }
        const getGlass = (callback) => {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glassFilter}`)
            .then(res => {
                const temp = res.data.drinks;
                callback(temp);
            })
            .catch(err => console.log(err))
        }
        // Callback function for making n amount of axios calls
        // based on the amount of id's recieved from the calls above.
        const getDrinks = (t) => {
            const requests = [];
            t.forEach((i => requests.push(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${i.idDrink}`)))
            axios.all(requests.map((request) => axios.get(request))).then(
                (data) => {
                    const newData = [];
                    data.map((d) => newData.push(d.data.drinks[0]));
                    newData.forEach((e => e.expanded = false));
                    setDrinks(newData);
                }
            );
        }

        if(catFilter) {
            getCats(getDrinks);
        }; if(ingFilter) {
            getIng(getDrinks);
        }; if (glassFilter) {
            getGlass(getDrinks);
        };

    }, [catFilter, ingFilter, glassFilter])

    // Changes the expand property on the card component.
    const handleExpandClick = (id) => {
        let newRanDrink = ranDrink.map(d => {
            if(d.idDrink === id) {
                return {...d, expanded: !d.expanded};
            }
            return d;
        });
        setRanDrink(newRanDrink);
        let newDrinks = drinks.map(d => {
            if(d.idDrink === id) {
                return {...d, expanded: !d.expanded};
            }
            return d;
        });
        setDrinks(newDrinks);
    };
    const handleSort = (e) =>  {
        setSort(e.target.value);
        if (e.target.value === 1) {
            let type = 'strDrink';
            const sorted = [...drinks].sort((a, b) => (a[type] > b[type]) ? 1 : ((b[type] > a [type]) ? -1 : 0));
            setDrinks(sorted);
        }
        return;
    };
    const handleSearch = (e) => {
        e.preventDefault();
        let formData = e.target[0].value;
        if (!formData) {
            return;
        }
        setSearchParams({search: formData});
    };
    function changeSide() {
        setSide(!side);
    };
    const handleCatFilter = (e) => {
        navigate("/home");
        changeSide();
        setIngFilter('');
        setGlassFilter('');
        setCatFilter(e.target.value);
    };
    const handleIngFilter = (e) => {
        navigate("/home");
        changeSide();
        setCatFilter('');
        setGlassFilter('');
        setIngFilter(e.target.value);
    };
    const handleGlassFilter = (e) => {
        navigate("/home");
        changeSide();
        setCatFilter('');
        setIngFilter('');
        setGlassFilter(e.target.value);
    };

    return (
        <>
            <section>
                <header>
                    <StyledFilterIcon props = {side}>
                        <VsIcons.VscListFilter onClick = {changeSide}/>
                    </StyledFilterIcon>
                </header>
                <StyledImgCon>
                    <div>
                        <Grid container direction='column' justifyContent='center' height='50%'>
                            <Grid item>
                                <h1>Tipsy Cocktail</h1>
                            </Grid>
                            <Grid item>
                                <p className='imgP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta incidunt ratione deleniti eaque in iste fugiat obcaecati perspiciatis quas tempore?</p>
                            </Grid>
                        </Grid>
                        <Grid container height='25%' justifyContent='center' alignItems='center'>
                            <Grid item xs={12} sm={10} md={8} lg={4}>
                                <Search handleSearch={handleSearch}/>
                            </Grid>
                        </Grid>
                        <Grid container height='25%' justifyContent='center' alignItems='flex-start'>
                            <Grid item>
                                <RanButton onClick={() => {
                                    navigate("ran");
                                    setRandom(!random);
                                    }}
                                    >I'm Feeling Lucky
                                </RanButton>
                            </Grid>
                        </Grid>
                    <SideNav 
                    side={side} 
                    changeSide={changeSide}
                    cats={cats}
                    ingredients={ingredients}
                    glasses={glasses}
                    catFilter={catFilter}
                    ingFilter={ingFilter}
                    glassFilter={glassFilter}
                    handleCatFilter={handleCatFilter}
                    handleIngFilter={handleIngFilter}
                    handleGlassFilter={handleGlassFilter}
                    />
                    </div>
                </StyledImgCon>
            </section>
            <Container>
            <HomeHeader sort={sort} handleSort={handleSort}/>
                <Routes>
                    <Route index element={<CardCom handleExpandClick={handleExpandClick} drinks={drinks} />}/>
                    <Route path="filter" element={<CardCom handleExpandClick={handleExpandClick} drinks={drinks} />} />
                    <Route path="ran" element={<CardCom handleExpandClick={handleExpandClick} drinks={ranDrink} />}/>
                </Routes>
            </Container>
            <Footer/>
        </>
    );
}

export default Landing;