import React from 'react';
import { BackButton } from '../components/Header/BackButton';
import { Header } from '../components/Header/Header';
import { Detailspic } from '../components/Header/Detailspic';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { DetailsInfo } from '../components/Header/DetailsInfo';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './Style.css';
const Item = styled.div`
{   
    margin-top:60px;
    height: 400px;
}
`

function Details() {
    const [countries, setCountries] = useState([]);
    const { id } = useParams();
    const url = `https://restcountries.com/v3.1/name/`;
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        fetch(url + id)
            .then((response) => response.json())
            .then((data) => setCountries(data));
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <Header toggleTheme={toggleTheme}></Header>
            <Container>
                <BackButton></BackButton>
                {countries.map((country, index) =>
                    <Grid container spacing={5}>
                        <Grid item xs={0} md={6}>
                            <Item>
                                <Detailspic image={country.flags.svg}></Detailspic>
                            </Item>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Item>
                                <DetailsInfo
                                    key={index}
                                    name={country.name.common }
                                    nativeName={Object.values(country.name.nativeName)[0].common}
                                    population={country.population}
                                    region={country.region}
                                    subregion={country.subregion}
                                    capital={country.capital}
                                    topLevelDomain={country.tld}
                                    currencies={Object.values(country.currencies)[0].name}
                                    languages={Object.values(country.languages)}
                                    borders={Object.values(country.borders)}

                                >

                                </DetailsInfo>
                            </Item>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </>
    );


}
export default Details;