
import React from "react";
import styled from 'styled-components';
import image from '../../public/assets/images/jen.jpg' // Tell webpack this JS file uses this image
//console.log(logo); // /logo.84287d09.png
function Image() {
  // Import result is the URL of your image
  return <img src={image} alt="prof-pick" />;
}
export default Image;
