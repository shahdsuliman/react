import styled from 'styled-components';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Moon from './Images/moon-outline.svg'
const Text = styled.h1`
{
    font-size: 23px;
}
`
const DarkMode = styled.button`
 {
  color: inherit;
  border:none;
  background:white;
  font-size: 15px;
  display: flex;
  padding-left:90px;
  padding-top:10px;
  font-weight: 700;
  
}
`
const Headeritem = styled.div`
 {
    display: flex;
    whidth:100%;
    justify-content: space-between;
    font-family: 'Nunito Sans', sans-serif ;
    box-shadow: 0 5px 5px  rgba(0, 0, 0, 0.2);
    margin:0px;
    alignItems:center;
}
`
const Item= styled.div`
{  
    height: 50px;
    font-family: 'Nunito Sans', sans-serif ;
 
}
`
const Moonimg = styled.img`
{   
    width: 18px;
    height: 18px;
    
  
}
`

export const Header = ({ }) => {
    return (
        <Headeritem >
            <Container>
            <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center">
        <Grid item xs={3} md={9}>
                        <Item>
                            <Text>Where in the world?</Text>
                        </Item>
        </Grid>
        <Grid item xs={1} md={2}>
                        <Item>    
                     <DarkMode>  
                        <Moonimg src={Moon}  alt=""/>      
                        Dark Mode
                    </DarkMode>
             </Item>
                </Grid>
             </Grid>
                </Container>
        </Headeritem>
        
      
        
         
    
    );
}