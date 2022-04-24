import * as React from 'react';
import Button from '@mui/material/Button';


export interface IKeywordButtonProps {
    keyword: string | null;
}

export default function KeywordButton(props: IKeywordButtonProps) {
    const { keyword } = props;
    return (
        <Button
            sx={{
                backgroundColor: 'var(--sub-alt-color)', color: 'var(--main-color)',
                padding: '4px 8px', marginRight: '5px', marginTop: '10px', fontFamily: 'var(--code-font)', letterSpacing: '0.3px', textTransform: 'none'
            }}
            size="small"
        >{keyword}</Button>
    );
}
