
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


const Item= styled.div`
{  
    margin-top: 50px;
    height: 50px;
    font-family: 'Nunito Sans', sans-serif ;
}
`
export const Mainbox = ({ }) => {
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
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
      <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for a country..." 
      />
    </Paper>
         
          </Item>
        </Grid>
        <Grid item md={2}>
          <Item>
          <FormControl sx={{ minWidth: 200 }}>
        <Select
          displayEmpty
        >
          <MenuItem>
            <em>Filter by </em>
          </MenuItem>
          <MenuItem >ALL</MenuItem>
          <MenuItem >Africa</MenuItem>
          <MenuItem>America</MenuItem>
          <MenuItem>Oceania</MenuItem>
          <MenuItem>Asia</MenuItem>
          <MenuItem>Europe</MenuItem>
          <MenuItem>Favourites</MenuItem>     
        </Select>
      </FormControl>
      </Item>
        </Grid>
      </Grid>
  
        </>
    );
}