
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Country } from '../Country/Country';
import Home from '../../pages/Home';



const Item = styled.div`
{  
    margin-top: 50px;
    height: 50px;
    font-family: 'Nunito Sans', sans-serif ;
}
`
export const Mainbox = ({ searchValue, onSearchChanged, onRegionChanged, region }) => {

  const filterBySearch = (event) => {
    onSearchChanged(event.target.value);
  };

  const filterByRegion = (event) => {
    onRegionChanged(event.target.value);
  };
  return (

    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Grid item md={4}>
          <Item>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'}}
            >
              <IconButton sx={{ p: '10px' }} aria-label="menu">
                <SearchIcon />
              </IconButton>
              <InputBase
                value={searchValue}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for a country..."
                onChange={filterBySearch} />
            </Paper>

          </Item>
        </Grid>
        <Grid item md={2}>
          <Item>
            <FormControl sx={{ minWidth: 200 }}>
              <Select
                onChange={filterByRegion}
                value={region}
                displayEmpty
              >
                <MenuItem>
                  <em>Filter by </em>
                </MenuItem>
                <MenuItem value={''}>ALL</MenuItem>
                <MenuItem value={'Africa'}>Africa</MenuItem>
                <MenuItem value={'Americas'}>America</MenuItem>
                <MenuItem value={'Oceania'}>Oceania</MenuItem>
                <MenuItem value={'Asia'}>Asia</MenuItem>
                <MenuItem value={'Europe'}>Europe</MenuItem>
                <MenuItem value={'Favourites'}>Favourites</MenuItem>
              </Select>
            </FormControl>
          </Item>
        </Grid>
      </Grid>

    </>
  );
}