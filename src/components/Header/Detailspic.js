import styled from 'styled-components';
import Usaimg from '../Images/usa.svg';

const CountryPic = styled.img`{   
    width:100%;
    height: 400px;
    object-fit: cover;
 
}
`
const CountryPicDiv = styled.div`{
    object-fit: cover;
}`
export const Detailspic = ({ }) => {
    return (
        <CountryPicDiv>
            <CountryPic src={Usaimg} alt="" />
        </CountryPicDiv>
    );
}