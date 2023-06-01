import styled from "styled-components";

const Button = styled.button`


font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #BF4F74;
border-radius: 3px;

  
  $:hover,

  $:active {
    background: #741188;
    border-color: #741188;
  }
  
 $:focus {
    outline: none;
  }

`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;


export default Button


