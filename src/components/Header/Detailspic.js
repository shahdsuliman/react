import styled from 'styled-components';
import Usaimg from './Images/usa.svg';

const Countrypic  = styled.img`
{   
    width:100%;
    height: 400px;
    object-fit: cover;
 
}
`
export const Detailspic = ({ }) => {
    return (
        <>
        <Countrypic src={Usaimg}  alt=""/>  
       
        </>
    );
}