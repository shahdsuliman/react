import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import React from 'react';

const Bdi = styled.div`
{  
    width:100%;
     height: 80px;
     padding-top: 80px;
    
}
`
const MButton = styled(Button)`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: black !important;
`;

export const BackButton = ({ }) => {
    return (
        <Bdi>

            <MButton
                component={Link}
                to="/"
                variant="default"
                color="inherit"
                startIcon={<ArrowBackIcon />}>
                Back
            </MButton>

        </Bdi>
    );
}