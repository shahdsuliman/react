import styled from 'styled-components';
import React from 'react';

const CountryPic = styled.img`{   
    width:100%;
    height: 400px;
    object-fit: cover;
 
}
`
const CountryPicDiv = styled.div`{
    object-fit: cover;
}`
export const Detailspic = ({ image }) => {
    return (
        <CountryPicDiv>
            <CountryPic src={image} alt="" />
        </CountryPicDiv>
    );
}