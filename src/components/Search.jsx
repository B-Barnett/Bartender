import {StyledSearch} from './styles/StyledSearch.styled';
import {SearchButton} from './styles/StyledButtons.styled';
import * as IoIcons from "react-icons/io5";

const Search = (props) => {
    const {handleSearch} = props;

    return (
        <>
            <StyledSearch>
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder='Search...' name="search"/>
                    <SearchButton type='submit'>
                        <IoIcons.IoSearchOutline/>
                    </SearchButton>
                </form>
            </StyledSearch>
        </>
    )
}

export default Search;