import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
    padding: 0;
    box-sizing : border-box;
}
  body {
    a{
      text-decoration:none;
      color:inherit;
    }
    font-family: 'Orbitron', sans-serif;
    background-color:#101216;
    color: white;
    &::-webkit-scrollbar {
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: black;
	}
	&::-webkit-scrollbar-track {
		background-color: #25262e;
	}
  }
  
  h2{
    font-size:32px;
    margin-bottom: 32px;
  }`;
