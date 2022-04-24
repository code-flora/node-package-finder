import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import styledC from 'styled-components';
import { useNavigate } from "react-router-dom";


export interface ISearchBarProps {
    defaultValue: string | undefined;
    bundle: any;
}

export default function SearchBar(props: ISearchBarProps) {
    //hooks
    let navigate = useNavigate();

    // Get query and setQuery from props
    const { query, setQuery, querySubmitted, setQuerySubmitted, searchResults, setSearchResults } = props.bundle;

    // Set up controlled input
    function handleInputChange(event: any) {
        setQuery(event.target.value)
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        // set query submitted state to true to change home page to header
        setQuerySubmitted(query);
        // navigate to search results page with query
        navigate(`/search?q=${query}`);
    }

    return (
        <SearchWrap>
            <Search sx={{ margin: '0' }}>
                <Form action="/search" method="get" onSubmit={handleSubmit}>
                    <StyledInputBase
                        placeholder="Find the package you need"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{ padding: '5px' }}
                        defaultValue={props.defaultValue}
                        onChange={handleInputChange}
                    />

                    {/* <SearchIconWrapper> */}
                    <SubmitButton type="submit" ><SearchIcon /></SubmitButton>
                    {/* </SearchIconWrapper> */}
                    <input type="submit" hidden />
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

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: '0px',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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