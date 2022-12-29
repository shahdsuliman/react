import styled from 'styled-components';
import { Box } from '@mui/system';
import React from 'react';
import { useDrop } from 'react-dnd'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Item = styled.div`
{
    box-shadow: 2px 3px 3px 2px  rgba(0, 0, 0, 0.2);
    height: 50px;
    margin-bottom:10px;
   
    
}
`
const FavPic = styled.img`
{
    height: 40px;
    width:30%;
  
}
`
const Favdiv = styled.div`
{
    box-shadow: 3px 5px 5px 3px  rgba(0, 0, 0, 0.2);
    height: 800px;
    @media (max-width: 376px) {
        display: none;
      
      }
}
`
export const Favlist = ({ onCardDropped, favourite, deleteFavItem }) => {
    const [collectedProps, drop] = useDrop(() => ({
        accept: "card",
        drop: (item, monitor) => {
            onCardDropped(item);
        }
    }), [onCardDropped]);

    return (

        <Favdiv ref={drop}>
            <Box sx={{ pl: 3, pt: 0.2 }}>
                <h2>Favourites</h2>

                <Grid container spacing={2}>
                    <Grid item md={11} >
                        {favourite.map((country) =>
                            <Item>
                                <FavPic src={country.flags.svg} />
                                {country.name.common}
                                <IconButton size="small" onClick={() => deleteFavItem(country.cca3)}>
                                    <HighlightOffIcon fontSize="inherit" />
                                </IconButton>
                            </Item>

                        )}
                    </Grid>
                </Grid>

            </Box>

        </Favdiv>

    );
}