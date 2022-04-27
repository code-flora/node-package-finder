import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';

export interface ITabsBarProps {
    info: {
        dependencies?: {};
        devDependencies?: {};
    };
    versionsCount: number;
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export default function TabsBar(props: ITabsBarProps) {
    // Get props
    const { info, versionsCount, value, handleChange } = props;

    // aria stuff
    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    // Counts for dependencies and versions
    let depCount, devDepCount;
    if (info.dependencies) {
        depCount = Object.keys(info.dependencies).length;
    } else { depCount = 0 }
    if (info.devDependencies) {
        devDepCount = Object.keys(info.devDependencies).length;
    } else { devDepCount = 0 }

    // Set media query to change tabs bar display
    const smallScreen = useMediaQuery('(max-width: 600px)');

    return (
        <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="Secondary Tabs"
            orientation={smallScreen ? "vertical" : undefined}
        >
            <Tab label="Readme" className="tab-style" {...a11yProps(0)} />
            <Tab label={`${depCount + devDepCount} Dependencies`} {...a11yProps(1)} />
            <Tab label={`${versionsCount} Versions`} {...a11yProps(2)} />
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
