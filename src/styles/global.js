import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  color
}
html, body, #root{
  min-height:100%;
}
body{
  /*background-color: #060402;*/
  background-color: #c9341c;
  -webkit-font-smoothig: antialiased !important;
}
body,input, button{
  color: #222;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
}
ul,ol{
  list-style:none
}
a{
  text-decoration:none
}
button{
  cursor:pointer;
}
`;
