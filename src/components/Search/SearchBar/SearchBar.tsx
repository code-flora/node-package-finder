import { useContext, useRef } from 'react';
import { StateContextType, StateContext } from '../../../context/stateContext';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import styledC from 'styled-components';
import { useNavigate } from "react-router-dom";

export interface ISearchBarProps {
}

export default function SearchBar(props: ISearchBarProps) {
    // Hooks
    let navigate = useNavigate();

    // Get state and setStates from context
    const { query, setQuery, querySubmitted, setQuerySubmitted } = useContext(StateContext) as StateContextType;


    // Set up controlled input
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        // Slow down the update of query to prevent constant re-rendering of results page
        //setTimeout(() => setQuery(event.target.value), 1000);
        setQuery(event.target.value)
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        // Set query submitted state to query(truthy) to change home page to header
        setQuerySubmitted(query);
        // Navigate to search results page with query
        navigate(`/search?q=${query}`);
    }

    // Check if input is null or spaces (a chain of empty spaces), if so, disable submit
    const spaceRegex = /^\s+$/g;
    const isValid = Boolean(query && !query.match(spaceRegex));

    return (
        <SearchWrap>
            <Search sx={{ margin: '0' }}>
                <Form action="/search" method="get" onSubmit={handleSubmit}>
                    <StyledInputBase
                        placeholder="Find the package you need"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{ padding: '5px' }}
                        defaultValue={query}
                        key={querySubmitted}
                        onChange={handleInputChange}
                    />

                    <SubmitButton type="submit" disabled={!isValid}><SearchIcon /></SubmitButton>

                    <input type="submit" disabled={!isValid} hidden />
                </Form>

            </Search>
        </SearchWrap>
    );
}

const SearchWrap = styledC.div`
    width: 100%;
    background-color: var(--sub-alt-color);
    border-radius: 5px;
    color: var(--main-color);
`

const Form = styledC.form`
    width: 100%;
`

const SubmitButton = styledC.button`
padding: 0px 10px;
height: 100%;
position: absolute;
right: 0px;
top: 0px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
border: none;
background-color: transparent;
color: var(--main-color);
`

const Search = styled('div')(({ theme }) => ({
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        //marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 2),
        // vertical padding + font size from searchIcon
        paddingRight: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        // [theme.breakpoints.up('md')]: {
        //     width: '70ch',
        // },
    },
}));