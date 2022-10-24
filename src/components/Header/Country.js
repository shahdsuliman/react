import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Usaimg from './Images/usa.svg';
import Brazilimg from './Images/Brazil.svg';
import Icelandimg from './Images/iceland.svg';
import Islandimg from './Images/islands.svg';
import Albaniaimg from './Images/albania.svg';
import Algeriaimg from './Images/algeria.svg';
import Link from '@mui/material/Link';

const Item= styled.div`
{
    height: 340px;
    font-family: 'Nunito Sans', sans-serif ;
    background-color: white;
    box-shadow: 0 5px 5px  rgba(0, 0, 0, 0.2);
    border-radius: 7px;
    overflow: hidden;
}
`
const Countrypic  = styled.img`
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
const Countryinfo= styled.div`
{
    padding-left:30px;
    font-family: 'Nunito Sans', sans-serif ;
   
}
`
const Boldtext= styled.span`
{
  font-weight: bold;
}  
`
export const Country= ({ }) => {

    return (
        <Grid container spacing={3}>
  <Grid item md={4}>
          <Item>	  
          <Link href="/Details">
          <Countrypic src={Usaimg}  alt="" />  
          </Link>
    
				<Countryinfo>
				<Text> United States of America</Text>
					<p><Boldtext>Population: </Boldtext>323,947,000</p>
					<p><Boldtext>Region: </Boldtext>Americas</p>
					<p><Boldtext>Capital: </Boldtext>Washington.D.C.</p>
				</Countryinfo> 
    </Item>
  </Grid>
  <Grid item md={4}>
    <Item>
    <Countrypic  src={Brazilimg}  alt=""/>  
				<Countryinfo>
				<Text> Brazil</Text>
					<p><Boldtext>Population: </Boldtext>206,135,893</p>
					<p><Boldtext>Region: </Boldtext>Americas</p>
					<p><Boldtext>Capital: </Boldtext>Brasilia</p>
				</Countryinfo>   
    </Item>
  </Grid>
  <Grid item md={4}>
        <Item>
          <Countrypic  src={Icelandimg}  alt=""/>  
				<Countryinfo>
				<Text> Iceland</Text>
					<p><Boldtext>Population: </Boldtext> 334,300</p>
					<p><Boldtext>Region: </Boldtext>Europe</p>
					<p><Boldtext>Capital: </Boldtext>Reykjavik</p>
				</Countryinfo> 
    </Item>
  </Grid>
  <Grid item md={4}>
          <Item>
          <Countrypic  src={Islandimg}  alt=""/>  
				<Countryinfo>
				<Text>Aland Islands</Text>
					<p><Boldtext>Population: </Boldtext>28,875</p>
					<p><Boldtext>Region: </Boldtext>Europe</p>
					<p><Boldtext>Capital: </Boldtext>Mariehamn</p>
				</Countryinfo> 
    </Item>
    </Grid>
    <Grid item md={4}>
          <Item>
          <Countrypic  src={Albaniaimg}  alt=""/>  
				<Countryinfo>
				<Text>Albania</Text>
					<p><Boldtext>Population: </Boldtext>2,886,026</p>
					<p><Boldtext>Region: </Boldtext>Europe</p>
					<p><Boldtext>Capital: </Boldtext>Tirana</p>
				</Countryinfo> 
    </Item>
    </Grid>
    <Grid item md={4}>
          <Item>
          <Countrypic  src={Algeriaimg}  alt=""/>  
				<Countryinfo>
				<Text>Algeria</Text>
					<p><Boldtext>Population: </Boldtext>40,400,000</p>
					<p><Boldtext>Region: </Boldtext>Africa</p>
					<p><Boldtext>Capital: </Boldtext>Algiers</p>
				</Countryinfo> 
    </Item>
    </Grid>
    </Grid>
    );
}