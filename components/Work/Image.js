
import React from "react";
import styled from 'styled-components';

const StyledFig = styled.figure`
    width:250px;
    height:200px;
    margin: 0;
    padding: 0;
    background: #fff;
    overflow: hidden;
    display:inline-block;
    float:left;
    margin:10px;

   img { 

     object-fit: cover;
	  -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;}
    
    img:hover {
      -webkit-transform: scale(1.3);
	    transform: scale(1.3);
    }
`;

const Image = ({work})=>{

  return <StyledFig>
    <img src={work.image} alt="work-projects"/>
  </StyledFig>
}

export default Image;

