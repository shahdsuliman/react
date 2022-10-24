import React from 'react';
import { BackButton } from '../components/Header/BackButton';
import { Header } from '../components/Header/Header';
import { Detailspic} from '../components/Header/Detailspic';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { DetailsInfo } from '../components/Header/DetailsInfo';

const Item= styled.div`
{   
    margin-top:60px;
    height: 400px;
    font-family: 'Nunito Sans', sans-serif ;
  
}
`

function Details() {
    return (
        <>
            <Header></Header>
            <Container>  
                <BackButton></BackButton>
          
            <Grid container spacing={6}>
                     <Grid item xs={0} md={6}>
                <Item>
                   <Detailspic></Detailspic>
                </Item>
        </Grid>
                    
        <Grid item xs={12} md={6}>
                <Item>
                     <DetailsInfo></DetailsInfo>        
                </Item>
        </Grid>
    </Grid>
    </Container>   
        
        
              
        </>
    );
    
  
}
export default Details;