import { useState } from 'React';
import React from 'react';
import {render} from 'react-dom';
import styled from 'styled-components';

const Button = styled.button`
 display:inline-block;
 padding:0.35em 1.2em;
 border:0.1em solid gray;
 margin: 1.5em 0.3em 0.3em 0;
 border-radius:0.12em;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:400;
 color:gray;
 text-align:center;
 transition: all 0.2s;
 cursor: pointer;

 &:hover{
     color:#FFFFFF;
     background-color:gray;
 }
`;
  
  export default Button;
