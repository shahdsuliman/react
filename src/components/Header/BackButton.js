import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Bdiv = styled.div`
{  
    width:100%;
     height: 80px;
     padding-top: 80px;
    
}
`

const MyButton = styled(Button)`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: black !important;
`;

export const BackButton = ({ }) => {
    return (
        <Bdiv>

            <MyButton
                component={Link}
                to="/"
                variant="default"
                color="inherit"
                startIcon={<ArrowBackIcon />}>
                Back
            </MyButton>

        </Bdiv>
    );
}