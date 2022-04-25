import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';

import styled from 'styled-components';


export interface ITabsBarProps {
    info: any;
    versionsCount: number;
}

export default function TabsBar(props: ITabsBarProps) {
    const { info, versionsCount } = props;
    // counts for dependencies and versions
    let depCount, devDepCount;
    if (info.dependencies) {
        depCount = Object.keys(info.dependencies).length;
    } else { depCount = 0 }
    if (info.devDependencies) {
        devDepCount = Object.keys(info.devDependencies).length;
    } else { devDepCount = 0 }



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
            <Tab value="dependencies" label={`${depCount + devDepCount} Dependencies`} />
            <Tab value="versions" label={`${versionsCount} Versions`} />
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
