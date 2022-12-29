import { Card } from "@mui/material";
import React from "react";
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { useDrag } from 'react-dnd'
const Item = styled.div`
{  
    box-shadow: 0 0px 10px  rgba(0, 0, 0, 0.1);
    background-color:none !important;
}
`
const Countrypic = styled.img`
{   
    width:100%;
    height: 150px;
    object-fit: cover;
    overflow: hidden;
}
`
const Text = styled.h2`
{
    font-size: 18px;
}
`
const Countryinfo = styled.div`
{
    padding-left:30px;
    color:black ;
    padding-bottom:30px;
}
`
export function CountryCard({ id, image, name, population, region, capital }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'card',
        item: { id },

        collect: (monitor) => ({
            isDragging: monitor.isDragging()

        })
    }))


    return (

        <Grid item md={4} >
            {
                <Item style={{ opacity: isDragging ? 0.5 : 1 }}>
                    <Card role="Handle" ref={drag} >
                        <Link to={`/Details/${name}`}>
                            <Countrypic src={image} />
                            <Countryinfo>
                                <Text > {name}</Text>
                                <p><b>Population: </b>{population}<br></br>
                                    <b>Region: </b>{region}<br></br>
                                    <b>Capital: </b>{capital}</p>
                            </Countryinfo>
                        </Link>
                    </Card>
                </Item>
            }
        </Grid>



    );
}