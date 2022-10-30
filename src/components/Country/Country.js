import Grid from '@mui/material/Grid';
import Usaimg from '../Images/usa.svg';
import Brazilimg from '../Images/Brazil.svg';
import Icelandimg from '../Images/iceland.svg';
import Islandimg from '../Images/islands.svg';
import Albaniaimg from '../Images/albania.svg';
import Algeriaimg from '../Images/algeria.svg';
import { CountryCard } from './CountryCard';


export const Country = ({ }) => {

  const countries = [
    {
      image: Usaimg,
      name: 'United States of America',
      population: 323947000,
      region: 'Americas',
      capital: 'Washington D.C.'
    },
    {
      image: Brazilimg,
      name: 'Brazil',
      population: 206135893,
      region: 'Americas',
      capital: 'Brasilia'
    },
    {
      image: Icelandimg,
      name: 'Iceland',
      population: 334300,
      region: 'Europe',
      capital: 'Reykjavik'
    },
    {
      image: Islandimg,
      name: 'Aland Islands',
      population: 28875,
      region: 'Europe',
      capital: 'Mariehamn'
    },
    {
      image: Albaniaimg,
      name: 'Albania',
      population: 2886026,
      region: 'Europe',
      capital: 'Tirana'
    },
    {
      image: Algeriaimg,
      name: 'Algeria',
      population: 40400000,
      region: 'Africa',
      capital: 'Algiers'
    },
  ];

  return (
    <Grid container spacing={3}>
      {
        countries.map((country, index) =>

          <CountryCard
            key={index}
            image={country.image}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital} />
        )
      }
    </Grid>
  );
}





