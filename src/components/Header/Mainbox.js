
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Search from './Images/search-outline.svg';
import downpic from './Images/chevron-down-outline.svg';
const Input = styled.input`
  {
     width: 90%;
     height: 50px;
     border:none;
     border-radius: 7px;
     padding-left:60px ;
     box-shadow: 3px 5px 5px 3px rgba(0, 0, 0, 0.2);
     background-image: url('./Images/search-outline.svg');
     background-size: 20px 30px;
     background-repeat: no-repeat;
     background-position:20px center;

 }
 `
 const Droppic  = styled.img`
{   
    width:10%;
    height:20px;
   
}
`
const Item= styled.div`
{  
    margin-top: 50px;
    height: 50px;
    font-family: 'Nunito Sans', sans-serif ;
}
`
const DropdownAll= styled.div`
box-shadow: 3px 5px 5px 3px rgba(0, 0, 0, 0.2);
width: 100%;
margin-bottom: 17px;
height: 50px;
border-radius: 7px;
box-sizing: border-box;
padding:20px ;
display:flex;
align-items: center;
justify-content: space-between;


}
`
const Dropdown = styled.div`
box-sizing: border-box;
cursor: pointer;
border-radius: 5px;
}
`
const Drop = styled.div`
position: absolute;
border-radius: 5px;
z-index: 1;
margin-bottom: 20px;
box-sizing: border-box;
width: 13.4%;
padding-left:20px ;
box-shadow: 3px 5px 5px 3px rgba(0, 0, 0, 0.2);
visibility: hidden;
opacity: 0;
transition: opacity 0.2s linear,visibility 0.2s linear;
background-color: white;

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
         
            <Input placeholder="Search for a country..." />
          </Item>
        </Grid>
        <Grid item md={2}>
          <Item>
         
          <Dropdown>
         <DropdownAll>
                <p>Filter by </p>
                <Droppic src={downpic}  alt=""/>  
         </DropdownAll>
         <Drop>
           <p >ALL</p>
           <p >Africa</p>
           <p >America</p>
           <p >Oceania</p>
            <p >Asia</p>
           <p >Europe</p>
           <p >Favourites</p>
            </Drop> 
      </Dropdown>
      </Item>
        </Grid>
      </Grid>
  
        </>
    );
}