import * as React from 'react';
import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';

export interface IPaginationProps {
}

export default function Pages(props: IPaginationProps) {
    return (
        <div>
            <StyledPagination count={10} size="small" />
        </div>
    );
}

const StyledPagination = styled(Pagination)`
    margin-top: 20px;
`