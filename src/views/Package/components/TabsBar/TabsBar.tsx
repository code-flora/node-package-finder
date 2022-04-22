import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';

import styled from 'styled-components';


export interface ITabsBarProps {
}

export default function TabsBar(props: ITabsBarProps) {
    // Set media query to change tabs bar display
    const smallScreen = useMediaQuery('(max-width: 600px)');

    const [value, setValue] = React.useState('read-me');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="Secondary Tabs"
            orientation={smallScreen ? "vertical" : undefined}
        >
            <Tab value="read-me" label="Readme" className="tab-style" />
            <Tab value="dependencies" label="10 Dependencies" />
            <Tab value="dependents" label="14,583 Dependents" />
            <Tab value="versions" label="291 Versions" />
        </StyledTabs>
    );
}

const StyledTabs = styled(Tabs)`
    margin-top: 20px;
    font-family: var(--main-font);

    .tab-style {
        font-family: var(--main-font) important!;
    }

    @media (max-width: 600px) {
        width: 100%;

        // Tab to take full width on small screens
        .MuiButtonBase-root {
            max-width: 100%;
        }
        
        // Switching indicator to the left
        .MuiTabs-indicator{
            right: unset;
            left: 0;
        }
    }
    
`
