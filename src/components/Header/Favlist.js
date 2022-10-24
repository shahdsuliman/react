import Usaimg from './Images/usa.svg';
import styled from 'styled-components';
import Closepic from './Images/close-circle-outline.svg';
const Fav= styled.h2`
{  
    padding-left:20px ;
    padding-top:20px ;
}
`
const Favdiv= styled.div`
{
   
    font-family: 'Nunito Sans', sans-serif ;
    box-shadow: 3px 5px 5px 3px  rgba(0, 0, 0, 0.2);
    height: 800px;
}
`
const Text = styled.h2`
{
    font-size: 13px;
    padding-left:7px;
}
`
const Favcountry= styled.div`
{
   
    font-family: 'Nunito Sans', sans-serif ;
    height: 30px;
    margin-bottom: 10px;
    display:flex;
    padding-left:20px;
}
`
const Countrypic  = styled.img`
{   
    width:18%;
    height: 30px;
    object-fit: cover;
    border-radius: 5px;
    
}
`

const  Closeimg = styled.img`
 {
    width:15%;
    height: 30px;
    border:none;
   
}
`
export const Favlist = ({ }) => {
    return (
                <Favdiv>
                <Fav>Favourites</Fav> 
                <Favcountry>
                <Countrypic src={Usaimg}  alt=""/>  
                <Text> United States of America</Text>
      
                <Closeimg src={Closepic}  alt=""/>  
              
                  </Favcountry>
                <Favcountry>
            <Countrypic src={Usaimg}  alt=""/>  
                <Text> United States of America</Text>
      
                <Closeimg src={Closepic}  alt=""/>  
                  </Favcountry>
            <Favcountry>
            <Countrypic src={Usaimg}  alt=""/>  
                <Text> United States of America</Text>
      
                <Closeimg src={Closepic}  alt=""/>  
                  </Favcountry>
                </Favdiv>
       
    );
}