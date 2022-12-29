import Grid from '@mui/material/Grid';
import React from 'react';

import { CountryCard } from './CountryCard';


export const Country = ({ Countries }) => {

  return (
    <Grid container spacing={3}>
      {
        Countries.map((country) =>

          <CountryCard
            key={country.cca3}
            id={country.cca3}
            image={country.flags.svg}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital} />
        )
      }
    </Grid>
  );
}





