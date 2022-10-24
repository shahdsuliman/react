import styled from 'styled-components';
import ArrowBack from './Images/arrow-back-outline.svg';
import { BrowserRouter as Router, Link } from "react-router-dom";
const Back = styled.button`
{
 color: inherit;
 font-color:black;
 border:none;
 background:white;
 box-shadow: 3px 5px 5px 3px rgba(0, 0, 0, 0.2);
 font-size: 15px;
 display: flex;
 align-items: center;
 margin-top: 70px;
 font-weight: 700;
 width:11%;
 height: 45px;
 padding-left:20px;
 border-radius: 7px;
 margin-botton:150px;
 
}
`
const Bdiv= styled.div`
{  
    width:100%;
     height: 80px;
}
`
const Backpic = styled.img`
{   
    width:25%;
    height:45px;
    margin-right: 10px;
   
}
`
const Pback = styled.p`
{   
    color: inherit;
   
}
`
export const BackButton = ({ }) => {
    return (
        <Bdiv>
           
            <Link to="/">
            <Back>
            <Backpic src={ArrowBack}  alt=""/>  
                   <Pback>Back</Pback> 
                </Back>
            </Link>
           
        </Bdiv>
    );
}