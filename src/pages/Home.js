import React from 'react';
import './Style.css'
import { Header } from '../components/Header/Header';
import { Mainbox } from '../components/Header/Mainbox';
import { Favlist } from '../components/Header/Favlist';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { Country } from '../components/Country/Country';
import { useEffect, useState } from "react";
import './Style.css';


const Item = styled.div`
{  
    margin-top: 50px;
    height: 800px;
    border-radius: 7px;
}
`

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [region, setRegion] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [itemId, setitemId] = useState('');
    const [theme, setTheme] = useState('light');
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
    const [favourite, setfavourite] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("favourite");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    useEffect(() => {
        // storing input name
        localStorage.setItem("favourite", JSON.stringify(favourite));
    }, [favourite]);
    useEffect(() => {
        const fetchCountries = async (search) => {
            let api = search ?
                `https://restcountries.com/v3.1/name/${search}` :
                `https://restcountries.com/v3.1/all`;

            const data = await fetch(api)
                .then((response) => response.json());

            if (data.status === 404) {
                setCountries([]);
            }
            else {
                setCountries(data);
            }
        }
        fetchCountries(searchValue);
    }, [searchValue]);

    useEffect(() => {
        setFilteredCountries(countries.filter((country) => !region || country.region === region));
    }, [region, countries]);

    let handleDrop = (item) => {
        if (!favourite.find((country) => country.cca3 === item.id)) {
            let country = countries.find((country) => country.cca3 === item.id);
            setfavourite((prevState) => [country, ...prevState]);
        }
    }

    let deleteFavItem = (itemId) => {
        let country = favourite.find((country) => country.cca3 === itemId);
        const index = favourite.indexOf(country);
        favourite.splice(index, 1);
        setfavourite(favourite.slice());
    }
    
    return (
        <>
            <Header toggleTheme={toggleTheme}></Header>
            <Container>
                <Mainbox searchValue={searchValue}
                    onSearchChanged={(value) => { setSearchValue(value) }}
                    onRegionChanged={(value) => setRegion(value)}
                    region={region}
                ></Mainbox>
                <Grid container spacing={3}>
                    <Grid item xs={0} md={3}>
                        <Item>
                            <Favlist favourite={favourite}
                                onCardDropped={handleDrop}
                                deleteFavItem={deleteFavItem}
                                itemId={itemId}
                            ></Favlist>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={9}>
                        <Item>
                            <Country Countries={filteredCountries} ></Country>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </>

    );
}

export default Home;