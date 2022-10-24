import Grid from '@mui/material/Grid';
import styled from 'styled-components';
const Item= styled.div`
{  
  
    padding-top:20px;
    height: 220px;
    font-family: 'Nunito Sans', sans-serif ;
    background:white;
}
`
const Textbox= styled.div`
{  
  
    padding-top:70px;
}
`
const Countriesdiv= styled.div`
{  
padding-top:40px;
display:flex;

}
`
const Titel = styled.h2`{
    font-size:22px;

}`
const Boldtext= styled.span`
{
  font-weight: bold;
}  
`
const Button = styled.button`
 {
  border:none;
  background:white;
  font-size: 15px;
  margin-left:15px;
  box-shadow: 3px 5px 5px 3px  rgba(0, 0, 0, 0.2);
  
}
`
export const DetailsInfo = ({ }) => {
    return (
        <>
           <Grid container spacing={4}>
                     <Grid item xs={0} md={6}>
                <Item>
                <Titel> United States of America</Titel>
          <div>
             <p>< Boldtext>Native Name: </ Boldtext>Belgie </p>
                <p>< Boldtext> Population: </ Boldtext>323,947,000 </p>
               <p> < Boldtext >Region: </ Boldtext>Americas </p>
               <p>< Boldtext> Sub Region: </ Boldtext>Westem Europe </p>
               <p>< Boldtext> Capital: </ Boldtext> Washington.D.C.</p>
                    </div>
                </Item>
        </Grid>
                    
        <Grid item xs={12} md={6}>
                    <Item>
                        <Textbox> 
                              <p><Boldtext>Top Level Domain: </ Boldtext>.be</p>
           <p>< Boldtext>Currencies: </ Boldtext> Euro</p> 
                            <p> <Boldtext> Languages: </ Boldtext> Dutch,French,German</p>   
                            </Textbox>             
                </Item>
              
             
        </Grid>
    </Grid>
            <Countriesdiv>
        <Boldtext>Border Countries:</Boldtext>
        <div>
            <Button>France</Button>
            <Button>Germany</Button>
            <Button>Netherlands</Button>
                </div>
            </Countriesdiv>
        </>
    );
}