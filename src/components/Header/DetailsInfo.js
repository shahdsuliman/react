import Grid from '@mui/material/Grid';
import styled from 'styled-components';
const Item = styled.div`{  
  
    padding-top:40px;
    height: 220px;
    font-family: 'Nunito Sans', sans-serif ;
    background:white;
    
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
export const DetailsInfo = ({ }) => {
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={0} md={6}>
                    <Item>
                        <Titel>United States of America</Titel>
                        <div>
                            <p><b>Native Name: </b>Belgie </p>
                            <p><b> Population: </b>323,947,000 </p>
                            <p> <b>Region: </b>Americas </p>
                            <p><b> Sub Region: </b>Westem Europe </p>
                            <p><b> Capital: </b> Washington.D.C.</p>
                        </div>
                    </Item>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Item>
                        <Textbox>
                            <p><b>Top Level Domain: </b>.be</p>
                            <p><b>Currencies: </b> Euro</p>
                            <p><b> Languages: </b> Dutch,French,German</p>
                        </Textbox>
                    </Item>
                </Grid>
            </Grid>
            <Countriesdiv>
                <b>Border Countries:</b>
                <div>
                    <Button>France</Button>
                    <Button>Germany</Button>
                    <Button>Netherlands</Button>
                </div>
            </Countriesdiv>
        </>
    );
}