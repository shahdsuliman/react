import React from 'react';
import './Style.css'
import { Header } from '../components/Header/Header';
import { Mainbox } from '../components/Header/Mainbox';
import { Favlist } from '../components/Header/Favlist';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { Country } from '../components/Country/Country';

const Item = styled.div`
{  
    margin-top: 50px;
    height: 800px;
    border-radius: 7px;
}
`
function Home() {
    return (
        <>
            <Header></Header>
            <Container>
                <Mainbox></Mainbox>
                <Grid container spacing={3}>
                    <Grid item xs={0} md={3}>
                        <Item>
                            <Favlist></Favlist>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={9}>
                        <Item>
                            <Country></Country>
                        </Item>
                    </Grid>
                </Grid>

            </Container>


        </>

    );
}

export default Home;