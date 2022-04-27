import { useContext } from 'react';
import { StateContextType, StateContext } from '../../../../context/stateContext';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


export interface IKeywordButtonProps {
    keyword: string | null;
}

export default function KeywordButton(props: IKeywordButtonProps) {
    const { keyword } = props;

    // Hooks
    let navigate = useNavigate();

    // Get state and setStates from context
    const { setQuery, setQuerySubmitted } = useContext(StateContext) as StateContextType;
    let keywordSearch = `keywords:${keyword}`

    function handleClick() {
        // Set query and querySubmitted to change home page to header
        setQuerySubmitted(keywordSearch);
        setQuery(keywordSearch);
        // Navigate to search results page with keyword
        navigate(`/search?q=${keywordSearch}`);
    }

    return (
        <Button
            sx={{
                backgroundColor: 'var(--sub-alt-color)', color: 'var(--main-color)',
                padding: '4px 8px', marginRight: '5px', marginTop: '10px', fontFamily: 'var(--code-font)', letterSpacing: '0.3px', textTransform: 'none'
            }}
            size="small"
            onClick={handleClick}
        >{keyword}</Button>
    );
}
