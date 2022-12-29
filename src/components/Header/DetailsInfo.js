import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import React from 'react';
const Item = styled.div`{  
  
    padding-top:40px;
    height: 220px;
    font-family: 'Nunito Sans', sans-serif ;
   
}
`
const Textbox = styled.div`{  
  padding-top:70px;
}
`
const Countriesdiv = styled.div`{  
padding-top:90px;
display:flex;

}
`
const Titel = styled.h2`{
    font-size:22px;
}
`
const Button = styled.button`{
  border:none;
  background:white;
  font-size: 15px;
  margin-left:15px;
  box-shadow: 3px 5px 5px 3px  rgba(0, 0, 0, 0.2);
}
`
export const DetailsInfo = ({ borders,name, nativeName, population, region, languages, subregion, capital, topLevelDomain, currencies }) => {
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={0} md={6}>
                    <Item>
                        <Titel>{name}</Titel>
                        <div>
                            <p><b>Native Name:</b>{nativeName} </p>
                            <p><b> Population: </b>{population}</p>
                            <p> <b>Region: </b>{region} </p>
                            <p><b> Sub Region: </b>{subregion} </p>
                            <p><b> Capital: </b>{capital}</p>
                        </div>
                    </Item>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Item>
                        <Textbox>
                            <p><b>Top Level Domain: </b>{topLevelDomain}</p>
                            <p><b>Currencies: </b>{currencies}</p>
                            <p><b> Languages: </b>{languages}</p>
                        </Textbox>
                    </Item>
                </Grid> 
            </Grid>
            <Countriesdiv>
                <b>Border Countries:</b>
                <div>
               {borders.map((element) => 
                   <Button>{element}</Button>
             )} 

                </div>
            </Countriesdiv>
        </>
    );
}